/**
 * OpenFdaController
 * 
 * @description :: API proxy for OpenFDA API
 * @help :: See http://links.sailsjs.org/docs/controllers
 */
var rp = require('request-promise');
var _ = require('lodash');
var Promise = require("bluebird");
var RateLimiter = require('request-rate-limiter');

var limiter = new RateLimiter(240);

var BluebirdLRU = require("bluebird-lru-cache");
var options = {
  max : 1000,
  maxAge : 1000 * 60 * 60 * 24, // 24 hours
  noreject : true // Don't reject
};
 
var cache = BluebirdLRU(options);

/**
 * Sends request to openFDA API
 */
function apiQuery(endpoint, params) {
  params = params || {};

  // Add API key
  params.api_key = sails.config.keys.fda;
  
  var url = "https://api.fda.gov/drug/" + endpoint + parameters.serialize(params);
  
  return sails.services.cachedrequest.query(url, limiter)
    // Process the results
    .then(function(result) {
      return {
        url : url,
        params : params,
        result : JSON.parse(result.body),
      };
    });
}



/**
 * Proxies a request from the app to the openFDA API.
 * 
 * In the future this could be cached or other value added.
 */
function apiProxy(req, res) {
  apiQuery(req.params.endpoint, req.query)
  .then(function(result) {
    return res.json(result.result);
  })
  .catch(function(err) {
    res.serverError('An error occurred');
  });
}

function getDrugs(req, res) {
  var params = parameters.getQueryParams(req, [ 'limit', 'offset', 'like' ], { 
    limit : 50, 
    offset : 0,
    like : '',
  });
  
  Promise.bind({}).then(function() {
    return drugsDb.connect()
  })
  .then(function(db) {
    this.db = db;
    
    var query_params = {
      $limit : params.limit,
      $offset : params.offset,
      $like : params.like + '%',
    };
    
    return db.all('SELECT brand_name, generic_name FROM Products WHERE brand_name LIKE $like ORDER BY brand_name ASC LIMIT $limit OFFSET $offset', query_params);
  })
  .then(function(rows) {
    return res.json(rows);
  })
  .catch(function(err) {
    sails.log.error(err);
    res.serverError('An error occurred');
  });
}

module.exports = {
  apiProxy : apiProxy,
  getDrugs : getDrugs
};

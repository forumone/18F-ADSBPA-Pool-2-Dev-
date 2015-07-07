#ADS RFQ Pool One Development
Prototype URL: [agilebpadevpool.forumone.com](http://agilebpadevpool.forumone.com).

Agile Management Tool: [Trello](https://trello.com/b/QIqBUToI/18f-agile-bpa-development)

This tool tracked progress on the prototype and includes a timestamped chronological listing of how the prototypes was designed and developed by out team. All documentation within Trello is also in the Documentation section in Github. 

## Description

The dCAREHx tool was created to enable physicians, pharmacists, nurses, patients, care providers, and general consumers to understand the adverse events related from taking a particular mental health drug, and the frequency on which cases were submitted. The dCAREHx tool is specifically designed to help those who are taking or prescribing pharmaceuticals for mental health issues to understand if there are potentially adverse side effects from a particular medication as well as the number of cases reported over a period of time. It is based on official FDA data, and reduces the research time substantially.

You can track our progress on our [trello board.](https://trello.com/b/QIqBUToI/18f-agile-bpa-development)

## Approach - Development Pool 
###Vision, Design and Preparation


###Agile Methdologies

###Iterations on Minimum Viable Product

###Usage of Open-source Technologies
A large component of our ability to stay lean and develop fast came from the use of [open-source technologies](https://playbook.cio.gov/#play8). Our team developed the prototype on GitHub, using modern stack of tools that include SASS, Angular, D3, Jenkins, Capistrano, Sails, Lodash, jQuery, Grunt, Bower, and NPM. 


##Development Criteria - Pool 2
| #  | Criteria | Evidence |
|----|----------|----------|
| 1  | Assigned one leader, gave that person authority and responsibility, and held that person accountable for the quality of the prototype submitted | [link](https://github.com/forumone/18F-ADSBPA-Pool-2-Dev-/blob/master/README.md#team-and-labor-categories---development-pool) |
| 2  | Assembled a multidisciplinary and collaborative team that includes at a minimum of three of the labor categories limited to the Development Pool labor categories to develop the prototype as quoted in Attachment C | [link](https://github.com/forumone/18F-ADSBPA-Pool-2-Dev-/blob/master/README.md#team-and-labor-categories---development-pool) |
| 3  | Used at least five modern and open-source technologies, regardless of architectural layer (frontend, backed, etc) | Our team developed the prototype on GitHub, using modern stack of tools that include SASS, Angular, D3, Jenkins, Capistrano, Sails, Lodash, jQuery, Grunt, Bower, and NPM. [link](https://github.com/forumone/18F-ADSBPA-Pool-2-Dev-/blob/master/documentation/TechnicalSpecifications.md) |
| 4  | Deployed the prototypes on an Infrastructure as a Service (IaaS) or Platform as a Service (Paas) provider, and indicated which provider was used| The prototype was deployed on Amazon Web Services EC2 Linux Server. [link](https://github.com/forumone/18F-ADSBPA-Pool-2-Dev-/blob/master/documentation/TechnicalSpecifications.md) |
| 5  | Wrote unit tests for their code | Unit tests were written for the prototype tool. [link](https://trello.com/c/0cvYzUvz) |
| 6  | Set up or used a continuous integration system to automate the running of tests and continuously deployed their code to their IaaS or PaaS provider | We use Vagrant and Puppet for managing local virtual machines, Jenkins and GruntJS for continuous integration, and Capistrano for deployment.[link](https://github.com/forumone/18F-ADSBPA-Pool-2-Dev-/blob/master/documentation/TechnicalSpecifications.md) |
| 7  | Set up or used a configuration management | All configuration and source code is managed via Git using standard best practices. [link] (https://github.com/forumone/18F-ADSBPA-Pool-2-Dev-/blob/master/documentation/TechnicalSpecifications.md) |
| 8  | Deploy their software in a container (i.e., utilized operating-system level virualization) | ```docker run -it --rm --name 18f -v "$PWD":/server -w /server artificial/docker-sails npm install && sails lift``` |
| 9  | Used an iterative approach, where feedback informed subsequent work or versions of the prototype | Please see evidence within Trello board. We used an iterative approach and developed the prototype by iterating on an existing tool and making changes based on content, theme, color, and content. Iterations were made based on guidance from the Product Manager. [Trello Board] (https://trello.com/b/QIqBUToI/18f-agile-bpa-development) |
| 10 | Provided sufficient documentation to install and run their prototype on another machine | [link](https://github.com/forumone/18F-ADSBPA-Pool-2-Dev-#web-starter-kit) |
| 11 | Prototype and underlying platforms used to create and run the prototype are openly licensed and free of charge | [link](https://github.com/forumone/18F-ADSBPA-Pool-2-Dev-/blob/master/LICENSE.md) |

## Team and Labor Categories - Development Pool
| Role  | Bio | Responsibility | LOE |
|----|----------|----------|----|
| Product Manager - Eric Davis | Eric Davis is a Project Director at Forum One, where he serves as Senior Advisor and Program Managemer on many of our web strategy and development projects. Eric has over twelve years of experience using technology in a health policy and programming setting, from hands-on web development, organizational web strategy and marketing, all using agile project methdologies. Some of Eric’s most recent clients at Forum One include the Centers for Disease Control and Prevention, the Patient-Centered Outcomes Research Institute (PCORI), and the National Cancer Institute. Prior to joining Forum One, Eric was Vice President of Digital Health at Edelman, and previously Vice President of Digital Strategies at IQ Solutions. He has a bachelor’s degree in Exercise Physiology from Ball State University, a master’s in Health Policy from American University, and an MBA from University of Maryland, College Park. Eric is Forum One's go-to expert when managing healthcare-related projects.| xx hours |
| Technical Architect - William Hurley | William Hurley is Manager, Technical Development for Forum One, where he is responsible for delivering smart technical solutions and managing a team of developers. His skills combine technical web development and knowledge of organizational system design, and he has been developing on the web since 1997 using PHP, Java, Adobe Flex, JavaScript, and ColdFusion. William also has extensive knowledge of XHTML/HTML, CSS and XML, and related technologies. Using Agile principles, William has led the technical development for the Educational Testing Services, EnergyStar, the Environmental Protection Agency, Robert Wood Johnson Foundation, and the World Bank. | xxx | xxx hours |
| Back-end Developer - Alex Ford | Alex Ford is a Developer at Forum One, where he is responsible for delivering smart solutions that satisfy our clients’ complex and varying business goals. Recent clients with whom Alex has worked include the U.S. Department of Agriculture, the U.S. Global Change Research Program, and the National Assessment of Educational Progress. Alex earned his B.A. in Mathematics at the University of North Carolina at Asheville and spent a year in San Antonio. He came to Forum One from NationalField, an enterprise social network, where he learned how to massage data into the proper format for web-based consumption. Alex is Forum One's data guru and is lead developer on many of the complex data or data visualization projects within the company. | xxxx | xxx |

## Installing project

The dCAREHx project is built using SailsJS, a real-time NodeJS framework. You can run this locally or through a Docker container.

### Running locally

In order to run the project locally you need NPM of 1.4 or higher as well as bower and sails packages installed globally. Run ```npm --version``` to check your version of NPM and then ```sudo npm update npm -g``` to upgrade as necessary. To install the packages run:

* ```sudo npm install bower -g``` to install bower
* ```sudo npm install sails -g``` to install sails

To start the site run ```sails lift``` within the root checkout. It will run the Grunt tasks and start Express so the site is available at http://localhost:1337.

To run unit tests run ```grunt test```

### Running using Docker

In order to run the project with Docker you need to install Docker for your operating system or using boot2docker for OSX or Windows. Once the project is cloned you can launch it in Docker by running: ```docker run -it --rm --name my-running-script -v "$PWD":/server -w /server artificial/docker-sails npm install && sails lift```

The site will then be accessible at http://localhost:1337.

To run unit tests run ```docker run -it --rm --name my-running-script -v "$PWD":/server -w /server artificial/docker-sails npm install && grunt test```


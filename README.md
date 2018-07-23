# Pulsar Playground

## Clone to a new project
* Run `git clone https://github.com/jadu/pulsar-playground-skeleton.git your-project-directory`
* cd `your-project-directory`

## Install dependencies
* Run `composer install && npm install`

## Start development environment
* Start docker container with `docker-compose up -d`
* Run `grunt`
* Visit http://localhost:5000/app.php, this will load the view `/views/list/index.html.twig`

## Organising code
* Views go in `/views`, copy or start modifying one of the existing layout examples to get started
* Custom styles can be added in `/scss`, link to them from the `pulsar.scss` file
* Custom js can be built in `js`, link to them in `index.js`

Please do improve this readme!
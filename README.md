
# three.js with PARCEL JS - This is the template branch

## Branches:
- template: Empty template
- main: rotating thing


## I. Local development (without Docker)

### INITIAL SETUP & INSTALL:
npm install -g parcel

### START DEVELOPMENT SERVER:
cd node-js/app
npm run start
Open webbrowser: http://localhost:8000

BUILD FOR PRODUCTION:
cd node-js/app
npm run build



## II. Local Development (with Docker)

### INITIAL SETUP & INSTALL:
docker-compose up --build


### START DEVELOPMENT SERVER:
docker-compose up
Open webbrowser: http://localhost:8000


### BUILD FOR PRODUCTION:
docker-compose exec web bash
> cd app 
> npm run build
Result is in folder /dist


ACCESS VIA BASH:
docker-compose exec web bash


## III. Gitpod Development

Start with: https://gitpod.io/#https://github.com/aknip/three.js-Experiments


## NOTES:


V2:
https://medium.com/@devongovett/parcel-2-0-0-alpha-1-is-here-8b160c6e3f7e
https://github.com/parcel-bundler/parcel/blob/v2/packages/core/parcel/README.md
https://github.com/parcel-bundler/parcel/issues/3377
https://github.com/parcel-bundler/parcel/tree/v2


# three.js with PARCEL JS



## I. LOCAL DEVELOPMENT WITH PARCEL (WITHOUT DOCKER)

### INITIAL SETUP & INSTALL:
npm install -g parcel

### START DEVELOPMENT SERVER:
cd node-js/app
npm run start
Open webbrowser: http://localhost:8000

BUILD FOR PRODUCTION:
cd node-js/app
npm run build



## II. LOCAL DEVELOPLENT WITH DOCKER (AND PARCEL)

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




## NOTES:


V2:
https://medium.com/@devongovett/parcel-2-0-0-alpha-1-is-here-8b160c6e3f7e
https://github.com/parcel-bundler/parcel/blob/v2/packages/core/parcel/README.md
https://github.com/parcel-bundler/parcel/issues/3377
https://github.com/parcel-bundler/parcel/tree/v2

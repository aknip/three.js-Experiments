FROM node:16

COPY app/package*.json ./app/

# Clean Install NPM Dependencies
RUN cd app && npm i

# Copy app source
# not needed anymore due to VOLUME mapping in docker-compose.yml
# COPY app/src /app/src



# Fetching the minified node image on apline linux
FROM node:slim

# Setting up the work directory
WORKDIR /app

# Copying all the files in our project
COPY . /app

# Installing dependencies
RUN npm install

# Exposing server port
EXPOSE 8080

# Starting our application/
CMD npm start

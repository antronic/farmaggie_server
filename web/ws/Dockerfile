FROM node:8.12.0-alpine
MAINTAINER Jirachai Chansivanon (antronic.inc@gmail.com)

WORKDIR /var/app
COPY . /var/app

RUN apk add --update \
  && rm -rf /var/cache/apk/*

RUN ["rm", "-rf", "node_modules"]
RUN ["npm", "install"]
RUN ["npm", "install", "-g", "nodemon"]
RUN ["npm", "install", "-g", "babel-cli"]

CMD nodemon ./

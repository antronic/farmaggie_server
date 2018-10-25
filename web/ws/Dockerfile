FROM node:8.12.0-alpine
MAINTAINER Jirachai Chansivanon (antronic.inc@gmail.com)

WORKDIR /var/app
COPY . /var/app

RUN apk add --update \
  && rm -rf /var/cache/apk/*

RUN ["rm", "-rf", "node_modules"]
RUN ["yarn"]
RUN ["yarn", "global", "add", "nodemon"]
RUN ["yarn", "global", "add", "babel-cli"]

CMD nodemon ./

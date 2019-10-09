FROM node:12.11.1-alpine
# FROM node:10-alpine
MAINTAINER Jirachai Chansivanon (antronic.inc@gmail.com)

WORKDIR /var/app
COPY . /var/app

RUN apk add --update \
  && rm -rf /var/cache/apk/*

RUN apk add tzdata

ENV TZ=Asia/Bangkok
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

RUN ["rm", "-rf", "node_modules"]

RUN ["yarn", "install"]
RUN ["yarn", "global", "add", "nodemon"]
# RUN ["yarn", "global", "-g", "@babel/cli"]

RUN ["yarn", "babel", "./src", "-d", "./dist"]

CMD nodemon ./dist

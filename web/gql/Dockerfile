FROM node:8.12.0-alpine
MAINTAINER Jirachai Chansivanon (antronic.inc@gmail.com)

WORKDIR /var/app
COPY . /var/app

RUN apk add --update \
  && rm -rf /var/cache/apk/*

RUN apk add tzdata

ENV TZ=Asia/Bangkok
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

RUN ["rm", "-rf", "node_modules"]
RUN ["npm", "install"]
RUN ["npm -g", "install", "nodemon"]

CMD nodemon ./

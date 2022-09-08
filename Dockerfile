FROM node:16.5.0-alpine

COPY ./dist /opt
WORKDIR /opt

CMD node ./main.js
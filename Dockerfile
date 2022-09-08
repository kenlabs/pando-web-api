FROM node:16.5.0-alpine

COPY ./dist /opt
COPY ./node_modules /opt/node_modules
WORKDIR /opt

CMD node ./main.js
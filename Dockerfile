FROM node:15.0.1-alpine3.10

WORKDIR /home/node/app

COPY . /home/node/app

RUN chown -R node /home/node/app

USER node

RUN npm install

CMD npm start


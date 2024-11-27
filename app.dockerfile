FROM node:latest

WORKDIR /ata-theaters-api
COPY package.json .
RUN npm install
COPY . .
CMD npm start
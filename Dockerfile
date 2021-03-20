FROM node:alpine

WORKDIR /usr/src/app

COPY package.json .

RUN npm install

COPY . .

RUN npm run build

ENV APP_PORT 8080

EXPOSE 8080

CMD [ "npm", "start" ]
FROM node:14
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
ENV APP_PORT 3000
EXPOSE 3000
CMD [ "npm", "run", "start" ]
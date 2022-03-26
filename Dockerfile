FROM node:lts-alpine3.14

WORKDIR /app

RUN npm install -g npm@latest

COPY package*.json ./

RUN npm install --only=production

COPY . .

RUN chmod -R g+rw /app

CMD [ "npm", "start" ]
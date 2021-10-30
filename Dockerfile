FROM node:12.13-slim

WORKDIR /usr/src/app
COPY package.json .
RUN npm install
COPY . .
EXPOSE 8080
ENTRYPOINT [ "npm", "run", "start"]
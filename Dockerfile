FROM node:latest

ARG PORT=8080
ARG BASE_URL=https://api.edamam.com/search

ENV port $PORT
ENV base_url $BASE_URL

EXPOSE $port

WORKDIR .
COPY package.json package-lock.json .babelrc ./
RUN npm install
COPY src ./src
CMD PORT=$port BASE_URL=$base_url npm run serve

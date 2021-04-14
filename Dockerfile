FROM node:latest

ARG PORT=8080
ENV port $PORT

WORKDIR .
COPY package.json package-lock.json ./
RUN npm install
COPY src ./src
CMD PORT=$port npm run serve

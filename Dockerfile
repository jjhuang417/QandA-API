FROM node:alpine

WORKDIR /Users/Soft/work/QandA-API

COPY package.json .

RUN npm install

COPY . .

CMD ["node", "./server/index.js"];
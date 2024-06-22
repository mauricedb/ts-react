FROM node:20.14.0-alpine3.20
WORKDIR /app

COPY package.json /app
COPY package-lock /app

RUN yarn install

COPY . .

CMD ["yarn", "start"]
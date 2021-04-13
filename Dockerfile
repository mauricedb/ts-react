FROM node:lts-alpine
WORKDIR /app

COPY package.json /app
COPY package-lock /app

RUN yarn install

COPY . .

CMD ["yarn", "start"]
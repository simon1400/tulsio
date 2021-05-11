
FROM node:10-alpine

RUN mkdir -p /var/www/tulsio/client/node_modules && chown -R node:node /var/www/tulsio/client

WORKDIR /var/www/tulsio/client

COPY package*.json ./
RUN yarn install
COPY --chown=node:node . .

RUN yarn build

EXPOSE 3004

CMD [ "npm", "start" ]

FROM node:16.15 as base

WORKDIR /app
COPY package.json /app
COPY yarn.lock /app
EXPOSE 3333

FROM base as production
ENV NODE_ENV=production
RUN yarn
COPY . /
RUN yarn build
CMD [ "node", "dist/server.js" ]

FROM base as dev
ENV NODE_ENV=development
RUN yarn
COPY . /
CMD ["yarn", "dev"]
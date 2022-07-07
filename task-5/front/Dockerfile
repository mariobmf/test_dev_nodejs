# ESTAGIO 1
FROM node:16.15 as base

WORKDIR /app
COPY package.json /app
COPY yarn.lock /app

FROM base as dev
ENV NODE_ENV=development
RUN yarn
COPY . /
EXPOSE 3000
CMD ["yarn", "dev"]

FROM base as production
ENV NODE_ENV=production
RUN yarn
COPY . /
RUN yarn build

FROM nginx:1.23-alpine

COPY --from=node /app/dist/ /usr/share/nginx/html

COPY nginx-custom.conf /etc/nginx/conf.d/default.conf

COPY nginx-custom.conf /etc/nginx/conf/default.conf

EXPOSE 80
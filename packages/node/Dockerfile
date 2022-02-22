FROM node:alpine

WORKDIR /test-is-railway

COPY . .

RUN yarn && yarn build

CMD ["yarn", "test"]

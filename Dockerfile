FROM node:16 as build-stage
RUN apt update -y && apt upgrade -y
WORKDIR /app
COPY package.json ./
RUN yarn install
COPY . /app
EXPOSE 4000
ENV SERVER_HOST=0.0.0.0
ENV SERVER_PORT=4000
RUN APP_URL=https://dev.playlog.com
RUN API_BASE_URL="https://dev.playlog.com/api/"
RUN yarn build
CMD ["yarn", "start"]
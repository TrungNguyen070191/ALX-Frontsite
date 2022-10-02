#Dockerfile
FROM node:16-alpine
RUN apk add --no-cache udev git g++ gcc libgcc libstdc++ linux-headers make python3 build-base
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . ./
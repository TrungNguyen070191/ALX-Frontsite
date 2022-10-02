#Dockerfile
#stage 1: build and complie FE site
FROM node:16-alpine as react-build-stage
RUN apk add --no-cache udev git g++ gcc libgcc libstdc++ linux-headers make python3 build-base
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . ./
RUN npm run build
#stage 2: based on Nginx, to have only the compiled app, ready for production with Nginx
FROM nginx:alpine
#Copy the default nginx.conf provided to Nginx config
COPY --from=react-build-stage /app/nginx/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=react-build-stage /app/nginx/anlacxa.key /app/nginx/anlacxa.pem /etc/nginx/
WORKDIR /usr/share/nginx/html
#Remove default nginx static assets
RUN rm -rf ./*
# Copy static assets from builder stage to nginx
COPY --from=react-build-stage /app/build/ /usr/share/nginx/html
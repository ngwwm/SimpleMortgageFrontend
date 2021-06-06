# Stage 1: Use yarn to build the app
FROM node:14 as builder
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm install 
COPY . ./
RUN npm run build

# Stage 2: Copy the JS React SPA into the Nginx HTML directory
FROM nginx:1.21.0
COPY --from=builder /usr/src/app/build /usr/share/nginx/html
COPY default.conf /etc/nginx/conf.d/default.conf
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]

# Stage 1: Build the Angular app
FROM node:22 AS build

# Set the working directory inside the container
WORKDIR /app

# Install dependencies
COPY . .
#RUN rm -r ./node_modules
#RUN rm -r dist
RUN npm install

# Copy the rest of the application files

# Build the Angular application
RUN npm run build --prod

# Stage 2: Serve the Angular app using Nginx
FROM nginx:alpine

# Copy the build output to Nginx's default web root
COPY --from=build /app/dist/wcr-challenge-frontend/* /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start the Nginx server
CMD ["nginx", "-g", "daemon off;"]
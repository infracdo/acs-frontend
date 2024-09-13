FROM node:12 as build


# Set the working directory
WORKDIR /app

RUN git config --global url."https://".insteadOf git://
# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .


WORKDIR /app

# Build the application
RUN npm run build

# Stage 2: Set up Nginx and copy built files
FROM nginx:alpine

# Copy the build artifacts from the previous stage
COPY --from=build /app/dist /usr/share/nginx/html

# Expose the port that Nginx will use
EXPOSE 80

# Command to run Nginx
CMD ["nginx", "-g", "daemon off;"]

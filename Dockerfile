# Build stage
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

# Build the application
RUN npm run build

# Stage 2: Serve static files using an external Nginx
FROM node:12 as production

WORKDIR /app

# Copy build artifacts from the build stage
COPY --from=build /app/dist /usr/share/nginx/html

# Expose only port 80 (Nginx will be handled externally)
EXPOSE 80

# The container just serves static content, so no need to run any server here
CMD ["npm", "start"]

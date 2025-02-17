FROM node:16 as build
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

# Stage 2: Set up a lightweight Node.js server
FROM node:16-alpine  # Upgrade here as well

WORKDIR /app

# Copy the build artifacts from the previous stage
COPY --from=build /app/dist /app

# Install a simple HTTP server
RUN npm install -g serve

# Expose ports
EXPOSE 80 443

# Start the server
CMD ["serve", "-s", "/app", "-l", "80"]

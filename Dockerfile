# Stage 1: Build the application
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

# Stage 2: Run the application
FROM node:12-alpine

# Set the working directory
WORKDIR /app

# Copy built files from the previous stage
COPY --from=build /app/dist /app/dist
COPY --from=build /app/package*.json ./

# Install only production dependencies
RUN npm install --only=production

# Expose port (adjust if needed)
EXPOSE 7548

# Command to run the application
CMD ["node", "dist/server.js"]

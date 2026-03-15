# Build stage
FROM node:20-slim AS build

WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# Production stage
FROM nginx:alpine

# Copy the built files from the build stage to Nginx's serve directory
COPY --from=build /app/dist /usr/share/nginx/html

# Copy a custom Nginx config to handle React routing
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Hugging Face Spaces run on port 7860
EXPOSE 7860

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]

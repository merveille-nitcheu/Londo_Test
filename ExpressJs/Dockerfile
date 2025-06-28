# Dockerfile pour ExpressJs

# Build Stage
FROM node:20-alpine AS build

WORKDIR /app

RUN echo "Copying package.json, the application code and installing dependencies..."

COPY package*.json ./

RUN npm install

COPY . .

# create appuser and appgroup
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
USER appuser

EXPOSE 3001
CMD ["node", "app.js"]
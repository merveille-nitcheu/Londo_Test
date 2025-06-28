# Dockerfile pour nestJs

# Build Stage
FROM node:20-alpine AS build


WORKDIR /app

RUN echo "Copying package.json, the application code and installing dependencies..."

COPY package*.json ./

RUN npm ci 

COPY . .

RUN npm run build

FROM node:20-alpine
# create appuser and appgroup
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
USER appuser

WORKDIR /app

COPY --from=build /app/dist /app/dist

# COPY --from=builder /app/node_modules /app/node_modules

EXPOSE 3000
CMD ["node", "dist/main.js"]
# Dockerfile for Angular without SSR

# Build Stage

FROM node:20-alpine AS build

WORKDIR /app

RUN echo "Copying package.json, the application code and installing dependencies..."

COPY package.json package-lock.json ./

RUN npm ci

COPY . .

RUN npm run ng build

FROM nginx:alpine

# create appuser and appgroup
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

RUN mkdir -p /var/cache/nginx/client_temp /tmp \
    && chown -R appuser:appgroup /var/cache/nginx /tmp

USER appuser

WORKDIR /app

COPY --from=build /app/dist/angular /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf


EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]


# Dockerfile for Angular with SSR

# Build Stage

FROM node:20-alpine AS build

WORKDIR /app

RUN echo "Copying package.json, the application code and installing dependencies..."

COPY package.json package-lock.json ./

RUN npm ci

COPY . .

RUN npm run ng build

FROM node:20-alpine

# create appuser and appgroup
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

USER appuser

WORKDIR /app

COPY --from=build /app/dist/angular-ssr/server /app/server
COPY --from=build /app/package.json /app/package.json
COPY --from=build /app/package-lock.json /app/package-lock.json

RUN npm ci --omit=dev

EXPOSE 4000

CMD ["node", "server/server.mjs"]


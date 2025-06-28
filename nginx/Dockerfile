FROM nginx:alpine
COPY nginx.conf /etc/nginx/nginx.conf
RUN rm -rf /etc/nginx/conf.d/* && \
    apk add --no-cache modsecurity && \
    modsecurity-nginx

RUN addgroup -S appgroup && adduser -S appuser -G appgroup
USER appuser
EXPOSE 80 443
CMD ["nginx", "-g", "daemon off;"]
FROM nginx:alpine
    
# RUN mkdir -p /etc/modsecurity-custom
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
# COPY modsecurity.conf /etc/modsecurity-custom/modsecurity.conf
RUN mkdir -p /var/cache/nginx/client_temp /tmp \
    && chown -R appuser:appgroup /var/cache/nginx /tmp




# RUN chown -R appuser:appgroup /etc/modsecurity-custom /var/log/nginx /tmp

COPY nginx.conf /etc/nginx/nginx.conf

USER appuser



EXPOSE 80 443

CMD ["nginx", "-g", "daemon off;"]
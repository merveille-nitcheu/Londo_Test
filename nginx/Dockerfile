FROM owasp/modsecurity:nginx-alpine
    
RUN mkdir -p /etc/modsecurity-custom

COPY modsecurity.conf /etc/modsecurity-custom/modsecurity.conf


# RUN addgroup -S appgroup && adduser -S appuser -G appgroup


# RUN chown -R appuser:appgroup /etc/modsecurity-custom /var/log/nginx /tmp

COPY nginx.conf /etc/nginx/nginx.conf

# USER appuser



EXPOSE 80 443

CMD ["nginx", "-g", "daemon off;"]
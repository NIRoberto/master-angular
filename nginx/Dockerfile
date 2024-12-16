# Base on offical NGINX Alpine image
FROM nginx:alpine
# Remove any existing config files
RUN rm /etc/nginx/conf.d/*

# Copy config files
# *.conf files in conf.d/ dir get included in main config
# COPY ./default.conf /etc/nginx/conf.d/
COPY ./templates /etc/nginx/templates
COPY ./ssl-certs/yahealth.rw.pem /etc/nginx/ssl/yahealth.rw.pem
COPY ./ssl-certs/yahealth_rw.key /etc/nginx/ssl/yahealth_rw.key


# Launch NGINX
CMD [ "nginx", "-g", "daemon off;" ]

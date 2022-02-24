FROM nginx:1.21.6
RUN mkdir -p /www/wwwroot
COPY dist  /www/wwwroot


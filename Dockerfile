FROM nginx
RUN mkdir -p /www/wwwroot
COPY dist  /www/wwwroot


FROM nginx:stable-alpine

# Add Maintainer info:
MAINTAINER ghazanfar9131 <ghazanfar9131@gmail.com>

# Make port 5000 available to the world outside this container:
EXPOSE 80

COPY . /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]
# The base image in which Node is installed
FROM node:20

# Set the current work directory to /app in the container
WORKDIR /app/silweb

# Copy our project dependencies into the docker
# COPY package*.json ./silweb

# Installing dependencies into node_modules
# RUN npm install

# This is configuring app port inside the container 
EXPOSE 3000
ENV PORT 3000

CMD [ "/bin/bash" ]

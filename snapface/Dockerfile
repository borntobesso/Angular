FROM ubuntu:18.04

WORKDIR /app

# Install dependencies
RUN apt-get update && \
    apt-get upgrade -y && \
    apt-get install -y curl

# Install Node.js
RUN curl -fSL https://deb.nodesource.com/setup_16.x | bash - && \
    apt-get install -y nodejs

# Install app dependencies
COPY . .
RUN npm install

# Install Angular CLI
RUN npm install -g @angular/cli

# Expose port 4200
EXPOSE 4200

# Start the app
ENTRYPOINT [ "ng", "serve" ]
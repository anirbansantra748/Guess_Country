FROM node:14
USER root
RUN apt-get update && apt-get install -y sudo
COPY . /app
WORKDIR /app
CMD ["node", "src/app.js"]

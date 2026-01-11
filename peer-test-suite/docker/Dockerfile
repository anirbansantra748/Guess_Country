
FROM node:14

# Simple Error: Misspelled Dockerfile instruction (Case insensitive but 'RUNN' is invalid)
RUNN apt-get update

WORKDIR /app
COPY package.json .
RUN npm install

# High Level Error: 'cd' inside RUN does not persist state to the next instruction
# The user expects the app to start from /app/src, but it will start from /app
RUN cd src
CMD ["node", "index.js"] 
# This will fail if index.js is inside src/ because the previous 'cd' had no effect on the CMD context.

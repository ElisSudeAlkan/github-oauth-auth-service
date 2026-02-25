# Source repository: https://github.com/ElisSudeAlkan/github-oauth-auth-service

FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000
CMD ["node", "server.js"]
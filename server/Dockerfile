FROM node:20-alpine
LABEL authors="serms1999"
LABEL version="1.0"
MAINTAINER Sergio Marin Sanchez "serms1999@gmail.com"

WORKDIR /server
COPY . .

RUN npm install
RUN npm run build

EXPOSE $SERVER_PORT

CMD ["npm", "run", "start"]

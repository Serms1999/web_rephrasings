FROM node:20-alpine
LABEL authors="serms1999"
LABEL version="1.3"
MAINTAINER Sergio Marin Sanchez "serms1999@gmail.com"

WORKDIR /server
COPY . .

ENV DB_HOST=localhost
ENV DB_DATABASE=database
ENV DB_TABLE=table
ENV DB_USER=user
ENV DB_PASS=password

ENV SERVER_HOSTNAME=localhost
ENV SERVER_PORT=8000
ENV HTTPS=true

RUN npm install
RUN npm run build

EXPOSE $SERVER_PORT

CMD ["npm", "run", "start"]

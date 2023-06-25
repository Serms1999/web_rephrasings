FROM node:20-alpine
LABEL authors="serms1999"
LABEL version="2.0"
MAINTAINER Sergio Marin Sanchez "serms1999@gmail.com"

WORKDIR /client
COPY . .

ENV SERVER_HOSTNAME=localhost
ENV SERVER_PORT=8000
ENV HTTPS=true
ENV CLIENT_PORT=80

ENV PATH /client/node_modules/.bin:$PATH

RUN npm install
RUN npm run build

EXPOSE $CLIENT_PORT

CMD ["npm", "run", "start:env"]

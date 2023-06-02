FROM mysql:latest
LABEL authors="serms1999"
LABEL version="1.0"
MAINTAINER Sergio Marin Sanchez "serms1999@gmail.com"

WORKDIR /db
COPY setup.sql /docker-entrypoint-initdb.d

EXPOSE 3306

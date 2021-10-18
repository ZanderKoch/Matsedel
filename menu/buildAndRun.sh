#!/bin/sh
mvn clean package && docker build -t nu.te4/menu .
docker rm -f menu || true && docker run -d -p 9080:9080 -p 9443:9443 --name menu nu.te4/menu
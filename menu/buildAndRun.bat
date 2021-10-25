@echo off
call mvn clean package
call docker build -t nu.te4/menu .
call docker rm -f menu
call docker run -d -p 9080:9080 -p 9443:9443 --name menu nu.te4/menu
FROM ubuntu:latest
RUN apt update
RUN apt install -y openjdk-8-jdk
RUN apt install -y maven
COPY . .
RUN mvn compile
CMD mvn spring-boot:run
EXPOSE 8444/tcp

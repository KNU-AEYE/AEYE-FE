FROM node:latest

RUN apt-get update && apt-get upgrade -y

VOLUME ./aeye

WORKDIR ./aeye

ENTRYPOINT ["npm", "run", "start"]

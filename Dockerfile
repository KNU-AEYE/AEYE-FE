FROM node:latest

RUN apt-get update && apt-get upgrade -y

COPY ./script.sh .

VOLUME ./aeye

ENTRYPOINT ["/bin/bash"]

CMD ["./script.sh"]

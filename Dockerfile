FROM node:latest

WORKDIR /usr/src/app

COPY . .

EXPOSE 3000

# CMD ["go", "run", "*.go"]
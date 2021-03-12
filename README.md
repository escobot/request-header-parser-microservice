# Request Header Parser Microservice

## Objective

Build a full stack app that is functionally similar to this: https://cryptic-ridge-9197.herokuapp.com/api/whoami/.

## Requirements

* User Story: I can get the IP address, language and operating system for my browser.

## Notes

Requirements:
- NodeJS
- NPM
- Docker (optional)

Run using NPM:
```bash
# install dependencies
npm install

# run app at localhost:3000
npm start
```

Run using Docker:
```bash
# build image
docker build -t pbgnz/request-header-parser-microservice .

# run image
docker run -p 3000:3000 -d pbgnz/request-header-parser-microservice
```

Usage
```bash
# get request
http://localhost:3000/api/whoami

# expected response
{"ipaddress":"::1","language":"en-US","software":"Windows NT 10.0; Win64; x64"}
```
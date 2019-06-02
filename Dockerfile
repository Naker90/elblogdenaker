FROM ubuntu as builder

RUN apt-get update -y && apt-get install nodejs -y && apt-get install npm -y

COPY package.json package-lock.json app/

RUN cd ./app && npm install -y

COPY . app/

RUN cd ./app && npm run build

FROM httpd

COPY --from=builder app/dist/. /usr/local/apache2/htdocs/

EXPOSE 80

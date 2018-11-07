FROM node:latest as appbuilder

RUN mkdir /usr/local/app
WORKDIR /usr/local/app

ENV PATH /usr/local/app/node_modules/.bin:$PATH

COPY package.json /usr/local/app/package.json
COPY ./conf/nginx.conf /usr/local/app/default.conf

RUN npm install
RUN npm install -g @angular/cli@6.1.1 --unsafe

COPY . /usr/local/app

RUN npm run build

FROM nginx:1.14.0-alpine

COPY --from=appbuilder /usr/local/app/dist /usr/share/nginx/html
COPY --from=appbuilder /usr/local/app/default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
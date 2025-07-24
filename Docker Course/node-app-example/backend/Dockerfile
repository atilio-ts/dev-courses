FROM node:14

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app

EXPOSE 80

ENV MONGO_DB_USERNAME=admin
ENV MONGO_DB_PASSWORD=admin

CMD ["npm", "start"]

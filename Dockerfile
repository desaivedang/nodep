FROM 172.18.0.52:5000/node

WORKDIR /src

COPY . .

RUN yarn add node cors express

EXPOSE 4000

CMD node server.js
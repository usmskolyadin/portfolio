FROM node:20

WORKDIR /portfolio

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

CMD ["npx", "serve@latest", "out"]

EXPOSE 3000
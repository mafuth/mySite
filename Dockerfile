FROM node:18

WORKDIR /app

COPY package*.json ./

RUN npm i

RUN npm run build

COPY . .

ENV PORT=4173

EXPOSE 4173

CMD ["npm", "run", "preview"]
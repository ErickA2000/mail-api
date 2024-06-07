##Stage 1
FROM node:18.17.0-alpine3.18 as build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

##Stage 2

FROM node:18.17.0-alpine3.18

WORKDIR /app

COPY --from=build /app/package*.json ./
COPY --from=build /app/dist ./dist
COPY --from=build /app/assets ./assets

RUN npm ci

EXPOSE $PORT

ENTRYPOINT [ "node", "dist/server.js" ]
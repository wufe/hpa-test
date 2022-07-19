FROM node:14

WORKDIR /app

COPY index.mjs index.mjs

CMD ["node", "index.mjs"]
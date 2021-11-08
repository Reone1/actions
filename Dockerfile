FROM node:16 AS Builder

RUN npm install -g npm@8.1.3

# Create Directory
RUN mkdir /usr/src/app
WORKDIR /usr/src/app
COPY . /usr/src/app
RUN npm install
RUN npm run build

ENV PORT 3000

FROM node:16


RUN mkdir /usr/src/prod
WORKDIR /usr/src/prod
COPY --from=Builder /usr/src/app/.next /usr/src/prod/.next
COPY --from=Builder /usr/src/app/package*.json /usr/src/prod/.

RUN npm install --production

RUN useradd nextjs
USER nextjs

EXPOSE 3000

CMD ["npm", "run", "start"]

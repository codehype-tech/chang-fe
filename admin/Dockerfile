FROM node:20-alpine AS base
RUN corepack enable && corepack prepare pnpm@latest --active

FROM base as deps

WORKDIR /app
COPY  ./package.json   .
COPY ./pnpm-lock.yaml .
COPY ./.npmrc .
COPY ./pnpm-workspace.yaml .
COPY ./admin ./apps/admin
COPY ./base ./base
RUN pnpm install

FROM base as build
WORKDIR /app

ENV NODE_ENV production
COPY --from=deps /app ./

RUN pnpm -F @jaizen/admin build

FROM base as deploy

WORKDIR /app

COPY --from=build /app/admin/.output .

ENV NODE_ENV production
ENV PORT 3010
EXPOSE 3020

CMD ["node", "server/index.mjs"]
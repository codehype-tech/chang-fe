FROM node:22-alpine AS base

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

FROM base AS deps

WORKDIR /app
COPY  ./package.json   .
COPY ./pnpm-lock.yaml .
# COPY ./.npmrc .
COPY ./pnpm-workspace.yaml .
COPY ./customer ./customer
COPY ./base ./base
RUN  pnpm install 

FROM base AS build
WORKDIR /app

ENV NODE_ENV production
COPY --from=deps /app ./

RUN pnpm -F @jaizen/customer build

FROM base AS deploy

WORKDIR /app

COPY --from=build /app/customer/.output .

ENV NODE_ENV production
ENV PORT 3020
EXPOSE 3020

CMD ["node", "server/index.mjs"]
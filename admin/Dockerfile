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
COPY ./admin ./admin
COPY ./base ./base
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --prod --frozen-lockfile

FROM base AS build
WORKDIR /app

ENV NODE_ENV production
COPY --from=deps /app ./

RUN pnpm -F @jaizen/admin build

FROM base AS deploy

WORKDIR /app

COPY --from=build /app/admin/.output .

ENV NODE_ENV production
ENV PORT 3010
EXPOSE 3010

CMD ["node", "server/index.mjs"]
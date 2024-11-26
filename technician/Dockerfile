FROM node:20-alpine AS base

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

FROM base AS deps

WORKDIR /app
COPY  ./package.json   .
COPY ./pnpm-lock.yaml .
# COPY ./.npmrc .
COPY ./pnpm-workspace.yaml .
COPY ./technician ./technician
COPY ./base ./base
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --prod --frozen-lockfile

FROM base AS build
WORKDIR /app

ENV NODE_ENV production
COPY --from=deps /app ./

RUN pnpm -F @jaizen/technician build

FROM base AS deploy

WORKDIR /app

COPY --from=build /app/technician/.output .

ENV NODE_ENV production
ENV PORT 3030
EXPOSE 3030

CMD ["node", "server/index.mjs"]
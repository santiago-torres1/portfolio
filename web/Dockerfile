# syntax=docker/dockerfile:1

# One image for local runs and AWS Lambda. The Lambda Web Adapter is a Lambda
# extension: inside Lambda it turns invoke events into HTTP requests to the
# Next.js server; anywhere else it is inert and the server runs as-is:
#   docker build -t portfolio web && docker run --rm -p 3000:3000 portfolio

ARG NODE_VERSION=24-alpine

FROM public.ecr.aws/docker/library/node:${NODE_VERSION} AS base
ENV COREPACK_ENABLE_DOWNLOAD_PROMPT=0 NEXT_TELEMETRY_DISABLED=1
RUN corepack enable
WORKDIR /app

FROM base AS deps
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
RUN --mount=type=cache,id=pnpm-store,target=/root/.local/share/pnpm/store \
    pnpm install --frozen-lockfile

FROM base AS build
COPY --from=deps /app/node_modules ./node_modules
COPY . .
# Absolute URL for metadata/Open Graph tags (CloudFront URL or custom domain).
ARG NEXT_PUBLIC_SITE_URL=""
ENV NEXT_PUBLIC_SITE_URL=${NEXT_PUBLIC_SITE_URL}
RUN pnpm build

FROM public.ecr.aws/docker/library/node:${NODE_VERSION} AS runner
COPY --from=public.ecr.aws/awsguru/aws-lambda-adapter:1.1.0 /lambda-adapter /opt/extensions/lambda-adapter
WORKDIR /app
ENV NODE_ENV=production \
    NEXT_TELEMETRY_DISABLED=1 \
    HOSTNAME=0.0.0.0 \
    PORT=3000 \
    AWS_LWA_PORT=3000

COPY --from=build --chown=1000:1000 /app/public ./public
COPY --from=build --chown=1000:1000 /app/.next/standalone ./
COPY --from=build --chown=1000:1000 /app/.next/static ./.next/static
# Lambda's filesystem is read-only except /tmp.
RUN rm -rf .next/cache && ln -s /tmp/cache .next/cache

# 1000 = the base image's unprivileged "node" user
USER 1000:1000
EXPOSE 3000
CMD ["node", "server.js"]

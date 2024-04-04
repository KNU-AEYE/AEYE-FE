# --------
# Build Stage

FROM node:21-slim AS builder

WORKDIR /app

COPY aeye/package.json aeye/package-lock.json* ./

RUN npm ci

COPY aeye/ .

RUN npm run build

# --------
# Deployment Stage

FROM node:21-slim

WORKDIR /app

COPY --from=builder /app/next.config.mjs ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules

CMD ["npm", "start"]
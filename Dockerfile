# --------
# Build Stage
FROM node:21-slim AS builder

WORKDIR /app

# 먼저 aeye 디렉토리 내의 파일들을 복사
COPY aeye/package.json aeye/package-lock.json ./

# 의존성 설치
RUN npm ci

# 나머지 파일 복사
COPY aeye/ .

# 애플리케이션 빌드
RUN npm run build

# --------
# Deployment Stage
FROM node:21-slim

WORKDIR /app

# 빌드된 애플리케이션과 필요한 파일들을 복사
COPY --from=builder /app/next.config.mjs ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules

CMD ["npm", "start"]

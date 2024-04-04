<<<<<<< Updated upstream
=======
# --------
# Build Stage

FROM node:21-slim AS builder

WORKDIR /app

COPY aeye/ .

RUN npm ci

RUN npm run build

# --------
# Deployment Stage

>>>>>>> Stashed changes
FROM node:21-slim

WORKDIR /app

# aeye 디렉토리 내의 모든 파일 및 폴더 복사
COPY aeye/ .

# 의존성 설치
RUN npm ci

# 애플리케이션 빌드
RUN npm run build

# 애플리케이션 실행
CMD ["npm", "start"]

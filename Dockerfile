FROM node:22-alpine AS builder

WORKDIR /app
COPY package*.json ./
# Install all dependencies including dev dependencies for build
RUN npm ci

COPY . ./
RUN npm run dev

FROM node:22-alpine
WORKDIR /app

# Copy the standalone output from Next.js
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000

ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

CMD ["npm", "run" , "dev"]
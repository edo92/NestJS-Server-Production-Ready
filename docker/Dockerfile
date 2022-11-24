# Build Process
FROM node:19.1-alpine as builder
WORKDIR /app

COPY . ./
RUN npm install --loglevel=error
RUN npm run build


# Production
FROM node:19.1-alpine
WORKDIR /app

COPY package*.json ./
RUN npm install --production
COPY --from=builder /app/dist ./dist

EXPOSE 3001
CMD ["npm", "run", "start"]
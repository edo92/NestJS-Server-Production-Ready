docker build -t backend -f ./docker/Dockerfile .
docker tag client nestjs/backend:latest
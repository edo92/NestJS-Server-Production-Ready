import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import config from './config';
import { AppModule } from './modules/app/app.module';

const bootstrap = async () => {
  const app = await NestFactory.create(AppModule, {
    cors: { origin: config.cors },
    bodyParser: true,
  });

  app.useGlobalPipes(new ValidationPipe());
  app.setGlobalPrefix(config.prefix);

  const port = process.env.PORT;
  await app.listen(port || 3001);

  if (!port) {
    Logger.log(`
    Application is running on: ${await app.getUrl()}
  `);
  }
};
bootstrap();

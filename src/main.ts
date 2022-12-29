import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const cookieSession = require('cookie-session');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(
    cookieSession({
      keys: ['someString'],
    }),
  );
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Striped out any extra properties from incoming request body automatically
    }),
  );
  await app.listen(3000);
}
bootstrap();

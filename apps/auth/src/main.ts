import { NestFactory } from '@nestjs/core';
import { AuthModule } from './auth.module';
import { ValidationPipe } from '@nestjs/common';
import { Logger } from 'nestjs-pino';
import { ConfigService } from '@nestjs/config';
import * as cookieParser from "cookie-parser"
import { MicroserviceOptions, Transport } from "@nestjs/microservices"

async function bootstrap() {
  const app = await NestFactory.create(AuthModule);
  const config = app.get(ConfigService)
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.TCP, 
    options:{ 
      host: '0.0.0.0',
      port: config.get("TCP_PORT")
    }
  })
  app.use(cookieParser())
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }))
  app.useLogger(app.get(Logger))
  await app.startAllMicroservices()
  await app.listen(config.get("HTTP_PORT"));
}
bootstrap();

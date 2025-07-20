import { Module } from '@nestjs/common';
import { NotificationController } from './notifications.controller';
import { NotificationsService } from './notifications.service';
import * as Joi from 'joi';
import { ConfigModule } from '@nestjs/config';
import { LoggerModule } from '@app/common';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        PORT: Joi.number().required(),
      }),
    }),
    LoggerModule
  ],
  controllers: [NotificationController],
  providers: [NotificationsService],
})
export class NotoficationsModule {}

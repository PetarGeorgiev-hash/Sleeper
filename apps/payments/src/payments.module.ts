import { Module } from '@nestjs/common';
import { PaymentsController } from './payments.controller';
import { PaymentsService } from './payments.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import * as Joi from "joi"
import { LoggerModule, NOTIFICATION_SERVICE } from '@app/common';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [ ConfigModule.forRoot({
        isGlobal: true,
        validationSchema: Joi.object({
          PORT: Joi.number().required(),
          STRIPE_SECRET_KEY: Joi.string().required(),
          NOTIFICATIONS_HOST: Joi.string().required(),
          NOTIFICATIONS_PORT: Joi.number().required()
        })
      }),LoggerModule,
       ClientsModule.registerAsync([{
        name: NOTIFICATION_SERVICE,
        useFactory: (configService: ConfigService) => ({
          transport: Transport.TCP,
          options: {
            host: configService.get('NOTIFICATIONS_HOST'),
            port: configService.get('NOTIFICATIONS_PORT'),
          }
        }),
        inject: [ConfigService]
      }])],
  controllers: [PaymentsController],
  providers: [PaymentsService],
})
export class PaymentsModule {}

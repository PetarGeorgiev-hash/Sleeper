import { Controller, Get } from '@nestjs/common';
import { NotificationsService } from './notifications.service';
import { EventPattern, Payload } from '@nestjs/microservices';
import { NotifyDto } from './dto/notify-email.dto';

@Controller()
export class NotificationController {
  constructor(private readonly notoficationsService: NotificationsService) {}


  @EventPattern('notify-email')
  async notifyEmail(@Payload() data: NotifyDto){

    //test
    this.notoficationsService.notify(data);
  }
}

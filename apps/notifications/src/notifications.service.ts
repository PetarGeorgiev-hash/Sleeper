import { Injectable } from '@nestjs/common';
import { NotifyDto } from './dto/notify-email.dto';
import * as nodemailer from "nodemailer"
import { ConfigService } from '@nestjs/config';

@Injectable()
export class NotificationsService {

  constructor(private readonly configService: ConfigService){}

  private readonly transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: 'OAuth2',
      user: this.configService.get('SMTP_USER'),
      clientId: this.configService.get('GOOGLE_OAUTH_ID'),
      clientSecret: this.configService.get('GOOGLE_OAUTH_CLIENT_SECRET'),
      refreshToken:  this.configService.get('GOOGLE_OAUTH_REFRESH_TOKEN')
    }
  })

  async notify({email, text}: NotifyDto){
    await this.transport.sendMail({
      from: this.configService.get('SMTP_USER'),
      to: email,
      subject: 'Sleeper Notification',
      text: text
    })
  }
}

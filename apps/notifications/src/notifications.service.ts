import { Injectable } from '@nestjs/common';
import { NotifyDto } from './dto/notify-email.dto';
// import * as nodemailer from 'nodemailer'

@Injectable()
export class NotificationsService {
  // private readonly transport = nodemailer.crateTransport({
  //   service: 'gmail',
  //   auth: {
  //     type: 'OAuth2'
  //   }
  // })

  async notify({email}: NotifyDto){
    console.log(email);
  }
}

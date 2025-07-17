import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import Stripe from "stripe"
import { CreateChargeDto } from '@app/common';
@Injectable()
export class PaymentsService {
  constructor(private readonly configService: ConfigService){}
  private readonly stipe = new Stripe(this.configService.get("STRIPE_SECRET_KEY"), 
  {
    apiVersion: '2023-08-16'
  })

  async createCharge({amount}: CreateChargeDto){
    // const paymentMethod = await this.stipe.paymentMethods.create({
    //   type: 'card',
    //   card: card
    // })

    const paymentIntent = await this.stipe.paymentIntents.create({
      // payment_method: paymentMethod.id,
      amount: amount * 100,
      confirm: true,
      // payment_method_types: ['card'],
      currency: 'usd',
      payment_method: 'pm_card_visa',
      automatic_payment_methods: {
        enabled: true,
        allow_redirects: 'never'
      }
    })

    return paymentIntent;
  }
}

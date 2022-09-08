import { Body, Controller, Post } from '@nestjs/common';
import { SubscribeInfoDto } from './dto/newsletter.dto';
import { NewsletterService } from './newsletter.service';

@Controller('newsletter')
export class NewsletterController {
  constructor(private readonly newsletterService: NewsletterService) {}

  @Post('/subscribers')
  subscribeNewsletter(@Body() subscribeInfo: SubscribeInfoDto): any {
    return this.newsletterService.subscribeNewsletter(subscribeInfo);
  }
}

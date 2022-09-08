import { Module } from '@nestjs/common';
import { MessageModule } from '../message/message.module';
import { NewsletterModule } from '../newsletter/newsletter.module';

@Module({
  imports: [MessageModule, NewsletterModule],
})
export class AppModule {}

import { Injectable } from '@nestjs/common';
import { SubscribeInfoDto } from './dto/newsletter.dto';
import axios from 'axios';

@Injectable()
export class NewsletterService {
  public async subscribeNewsletter(
    subscribeInfo: SubscribeInfoDto,
  ): Promise<any> {
    const apiURL = 'https://newsletter.kencloud.com/api/subscribers';
    try {
      const res = await axios.post(apiURL, subscribeInfo, {
        timeout: 100000,
        auth: { username: 'kenlabs', password: 'UsAsEBWnvuK7' },
      });
      console.log(res);
      return res.data;
    } catch (err) {
      console.log(err);
      return err.response.data;
    }
  }
}

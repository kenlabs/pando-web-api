import { Injectable } from '@nestjs/common';
import { SubscribeInfoDto } from './dto/newsletter.dto';
import axios from 'axios';

@Injectable()
export class NewsletterService {
  public async subscribeNewsletter(
    subscribeInfo: SubscribeInfoDto,
  ): Promise<any> {
    const apiURL = 'https://newsletter.kencloud.com/api/subscribers';
    const username = process.env.LISTMONK_USER;
    const password = process.env.LISTMONK_PASSWORD;
    try {
      const res = await axios.post(apiURL, subscribeInfo, {
        timeout: 100000,
        auth: { username: username, password: password },
      });
      console.log(res);
      return res.data;
    } catch (err) {
      console.log(err);
      return err.response.data;
    }
  }
}

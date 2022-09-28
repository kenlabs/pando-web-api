import { Injectable } from '@nestjs/common';
import { MessageDto } from './dto/message.dto';
import { WebClient } from '@slack/web-api';

@Injectable()
export class MessageService {
  public async sendMessage(sendRequest: MessageDto): Promise<any> {
    const token = process.env.SLACK_BOT_TOKEN;
    const channelID = process.env.SLACK_CHANNEL;
    const slackClient = new WebClient(token);
    const message = {
      channel: channelID,
      blocks: [
        {
          type: 'section',
          text: {
            text: 'PandoWeb Chat',
            type: 'mrkdwn',
          },
          fields: [
            {
              type: 'mrkdwn',
              text: '*Full Name*',
            },
            {
              type: 'mrkdwn',
              text: '*Email*',
            },
            {
              type: 'plain_text',
              text: sendRequest.fullName,
            },
            {
              type: 'plain_text',
              text: sendRequest.emailAddress,
            },
            {
              type: 'mrkdwn',
              text: '*Message*',
            },
            {
              type: 'mrkdwn',
              text: ' ',
            },
            {
              type: 'plain_text',
              text: sendRequest.message,
            },
          ],
        },
      ],
    };
    return await slackClient.chat.postMessage(message);
  }
}

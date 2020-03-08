'use strict';
const line = require('@line/bot-sdk');
const express = require('express');
const config = require('./config.json');
const dialogflow = require('./dialogflow');
const client = new line.Client(config);

function messageObjectFromJSON(json) {
  return JSON.parse(json);
}

async function handleEvent(req, event) {
  switch (event.type) {
    case 'message':
      const message = event.message;
      switch (message.type) {
        case 'text':
          return handleText(req, message, event);
        case 'image':
          return handleImage(message, event);
        case 'video':
          return handleVideo(message, event);
        case 'audio':
          return handleAudio(message, event);
        case 'location':
          return handleLocation(req, message, event);
        case 'sticker':
          return handleSticker(message, event);
        default:
          throw new Error(`Unknown message: ${JSON.stringify(message)}`);
      }

    case 'follow':
      const profile = await client.getProfile(event.source.userId);
      const followText = `สวัสดีคุณ ${profile.displayName} ยินดีต้อนรับครับ`;
      return client.replyMessage(event.replyToken, { type: 'text', text: followText });

    case 'unfollow':
      return console.log(`Unfollowed this bot: ${JSON.stringify(event)}`);

    case 'join':
      const joinText = `Joined ${event.source.type}`;
      return client.replyMessage(event.replyToken, { type: 'text', text: joinText });

    case 'leave':
      return console.log(`Left: ${JSON.stringify(event)}`);

    case 'postback':
      if (event.postback.params) {
        const text = createFakeTextMessage(req, event, event.postback.params.date)
        return dialogflow.convertToDialogflow(req, text);
      } else {
        return;
      }
    default:
      throw new Error(`Unknown event: ${JSON.stringify(event)}`);
  }
}

function createFakeTextMessage(req, event, text) {
  return {
    events:
      [{
        type: 'message',
        replyToken: event.replyToken,
        source: event.source,
        timestamp: event.timestamp,
        mode: event.mode,
        message: {
          type: 'text',
          text,
        },
      }],
    destination: req.body.destination,
  };
}

async function handleText(req, message, event) {
  return dialogflow.postToDialogflow(req);
  // return client.replyMessage(event.replyToken, { type: 'text', text: message.text });
  // return client.pushMessage(event.source.userId, { type: 'text', text: message.text });
}

function handleImage(message, event) {
  const imageMessage = messageObjectFromJSON(`{
    "type": "image",
    "originalContentUrl": "https://site-assets.mediaoxide.com/workpointnews/2018/09/03092841/1535941719_76412_.jpg",
    "previewImageUrl": "https://site-assets.mediaoxide.com/workpointnews/2018/09/03092841/1535941719_76412_.jpg",
    "animated": false
  }`);
  return client.replyMessage(event.replyToken, imageMessage);
  // return client.replyMessage(event.replyToken, { type: 'text', text: 'Got Image' });
}

function handleVideo(message, event) {
  return client.replyMessage(event.replyToken, { type: 'text', text: 'Got Video' });
}

function handleAudio(message, event) {
  return client.replyMessage(event.replyToken, { type: 'text', text: 'Got Audio' });
}

function handleLocation(req, message, event) {
  const text = `Lat : ${message.latitude}, Lng : ${message.longitude}`;
  return dialogflow.convertToDialogflow(req, createFakeTextMessage(req, event, text));
  // return client.replyMessage(event.replyToken, { type: 'text', text: 'Got Location' });
}

function handleSticker(message, event) {
  notify.sendImageUrl();
  return client.replyMessage(event.replyToken, { type: 'text', text: 'Got Sticker' });
}

const app = express();
app.post('/', (req, res) => {
  if (!Array.isArray(req.body.events)) {
    return res.status(500).end();
  }
  Promise.all(req.body.events.map(event => {
    console.log('event', event);
    if (event.source.userId === 'Udeadbeefdeadbeefdeadbeefdeadbeef') {
      return;
    }
    return handleEvent(req, event);
  }))
    .then(() => res.end())
    .catch((err) => {
      console.error(err);
      res.status(500).end();
    });
});

module.exports = {
  app
}
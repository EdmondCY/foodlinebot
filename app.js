// 引用linebot SDK
require('dotenv').config();
const linebot = require('linebot');


const bot = linebot({
  channelId: process.env.CHANNEL_ID,
  channelSecret: process.env.CHANNEL_SECRET,
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN
});
// 用於辨識Line Channel的資訊no

// 當有人傳送訊息給Bot時
bot.on('message', function (event) {
  // event.message.text是使用者傳給bot的訊息
  // 使用event.reply(要回傳的訊息)方法可將訊息回傳給使用者
  //var replyMsg = `Hello你剛才說的是:${event.message.text}`
  let replyMsg = [];
  switch(event.message.text) {
    case '1':
        replyMsg.push({
          type: "imagemap",
          baseUrl: "圖片網址的一部分",
          altText: "在不支援顯示影像地圖的地方顯示的文字",
          baseSize: {
            height: 1040,
            width: 1040
          },
          actions: [
            {
              type: "uri",
              linkUri: "https://www.kamigo.tw/",
              label: "https://www.kamigo.tw/",
              area: {
                x: 0,
                y: 0,
                width: 520,
                height: 1040
              }
            },
            {
              type: "message",
              text: "傳送文字",
              area: {
                x: 520,
                y: 0,
                width: 520,
                height: 1040
              }
            }
          ]
        });
          break;
    case '2':
        replyMsg.push({
          type: 'template',
          altText: 'this is a buttons template',
          template: {
            type: 'buttons',
            thumbnailImageUrl: 'https://steamcdn-a.akamaihd.net/steam/apps/730/header.jpg',
            title: 'Menu',
            text: 'Please select',
            actions: [{
              type: 'postback',
              label: 'Buy',
              data: 'action=buy&itemid=123'
            }, {
              type: 'postback',
              label: 'Add to cart',
              data: 'action=add&itemid=123'
            }, {
              type: 'uri',
              label: 'View detail',
              uri: 'http://example.com/page/123'
            }]
          }
        });
          break;

  }
  // var replyMsg = `Hello Test:${event.message.text}`
  console.log(replyMsg);
  event.reply(replyMsg).then(function (data) {
    // 當訊息成功回傳後的處理
  }).catch(function (error) {
    // 當訊息回傳失敗後的處理
    console.log(error);
  });
});

// Bot所監聽的webhook路徑與port
// bot.listen('/linewebhook', process.env.port="80", function () {
//     console.log('[BOT已準備就緒]');
bot.listen('/linewebhook', process.env.PORT, function () {
    console.log('[BOT已準備就緒]');
});

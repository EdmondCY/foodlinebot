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
  var replyMsg = `Hello你剛才說的是:${event.message.text}`
  console.log(replyMsg);
  event.reply(replyMsg).then(function (data) {
    // 當訊息成功回傳後的處理
  }).catch(function (error) {
    // 當訊息回傳失敗後的處理
    console.log(error);
  });
});

// Bot所監聽的webhook路徑與port
bot.listen('/linewebhook', 80, function () {
    console.log('[BOT已準備就緒]');
});
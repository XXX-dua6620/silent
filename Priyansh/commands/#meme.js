const fs = require("fs");
module.exports.config = {
  name: "love",
    version: "1.1.1",
  hasPermssion: 0,
  credits: "𝐏𝐑𝐈𝐘𝐀𝐍𝐒𝐇𝐈 𝐊𝐀𝐔𝐑", 
  description: "Just Respond",
  commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  let react = event.body.toLowerCase();
  if(react.includes("love you") ||
     react.includes("Love you bot") || react.includes("Bot love") || react.includes("lv u") ||
react.includes("luv you") ||
react.includes("Luv")) {
    var msg = {
        body: `I LOVE YOU 💋 TOOO BABY💋🙃👈`,
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🤗", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }

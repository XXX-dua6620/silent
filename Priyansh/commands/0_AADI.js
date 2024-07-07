 const fs = require("fs");
module.exports.config = {
	name: "aadi",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Arun", 
	description: "no prefix",
	commandCategory: "No command marks needed",
	usages: "...",
    cooldowns: 100, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	let react = event.body.toLowerCase();
	if(react.includes("owner ") ||
     react.includes("aadi") || 
react.includes("sir")) {
		var msg = {
				body: "★★𝗢𝘄𝗻𝗲𝗿 + 𝗣𝗿𝗼𝗳𝗶𝗹𝗲 𝗛𝗲𝗿𝗲★

✦𝐌𝐫..✬✿╭┳✪✪╤───────────➛➣ ★�🆁🅸🅽🅲🅴★🆂🅸🅻🅴🅽🆃)✪��🆈★  ✬✿╭┳✪✪╤───────────➛➣✦

 https://www.facebook.com/profile.php?id=61551474205816😇

☞★★᭄𝗖𝗿𝗲𝗱𝗶𝘁'𝘀 :  𝐌𝐫.✬✿╭┳✪✪╤───────────➛➣ ★�🆁🅸🅽🅲🅴★🆂🅸🅻🅴🅽🆃)✪��🆈★  ✬✿╭┳✪✪╤───────────➛➣🩷🪽✦`🥀🦋`",
				attachment: fs.createReadStream(__dirname + `/noprefix/kk1.jpg`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("📷", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
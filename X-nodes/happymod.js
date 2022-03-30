/*COPYRIGHT (C) 2022 CODED BY NOIZE */

const Garfield = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const got = require('got');
const Config = require('../config');

const Language = require('../language');
const Lang = Language.getString('weather');

Garfield.addXnodes({pattern: 'apk ?(.*)', fromMe: false, desc: Lang.STICKER_DESC, dontAdCommandList: true }, async (message, match) => {
	if (match[1] === '') return await message.reply(Lang.NEED_APPNAME);
	const url = `https://api.zeks.xyz/api/happymod?apikey=&q=${match[1]}&apikey=cjxJIn9eDletRHac3CG6CdvGxFH`;
	try {
		const response = await got(url);
		const json = JSON.parse(response.body);
		if (response.statusCode === 200) return await message.client.sendMessage(message.jid, 
		'*🐼 ' + Lang.NAMEY +'* ```' + json.result[0].title + '```\n\n' + 
		'*🐼 ' + Lang.SIZE +'* ```' + json.result[0].size + '```\n\n\n' + 
		'*🐼 ' + Lang.DOWNLOAD +':* ```' + json.result[0].link + '```\n\n *ᴍᴏᴅᴜʟᴇ ʙʏ ɴᴏɪᴢᴇ*', MessageType.text);
	} catch {
		return await message.client.sendMessage(message.jid, Lang.NOT_FOUNDMD, MessageType.text);
	}
});

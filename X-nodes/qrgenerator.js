/*COPYRIGHT (C) 2022 CODED BY NOIZE */

const Garfield = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const Config = require('../config');
const request = require('request');
const got = require("got");

const Language = require('../language');
const Lang = Language.getString('sticker');

if (Config.WORKTYPE == 'private') {

Garfield.addXnodes({pattern: 'qr ?(.*)', fromMe: true, desc: Lang.STICKER_DESC}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(Lang.TEXT);

    var webimage = await axios.get(`https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=${match[1].replace(/#/g, '\n')} `, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '  ```Follow Us Facebook - https://www.facebook.com/garfieldbots/```  ',quoted: message.data})
}));
}
if (Config.WORKTYPE == 'public') {

Garfield.addXnodes({pattern: 'qr ?(.*)', fromMe: false, desc: Lang.STICKER_DESC}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(Lang.TEXT);

    var webimage = await axios.get(`https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=${match[1].replace(/#/g, '\n')} `, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: '  ```Follow Us Facebook - https://www.facebook.com/garfieldbots/```  ',quoted: message.data})
}));
}

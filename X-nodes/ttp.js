/*COPYRIGHT (C) 2022 CODED BY NOIZE */

const Garfield = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const Config = require('../config');

const Language = require('../language');
const Lang = Language.getString('ttp');


if (Config.WORKTYPE == 'private') {
    Garfield.addXnodes({ pattern: 'ttp ?(.*)', fromMe: true, desc: Lang.TTP_DESC }, (async (message, match) => {
        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD, MessageType.text);
        var uri = encodeURI(match[1])
        var ttinullimage = await axios.get('https://api.xteam.xyz/ttp?file&text=' + uri, { responseType: 'arraybuffer' })
        await message.client.sendMessage(message.jid,Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: ' ```Follow Us Facebook - https://www.facebook.com/garfieldbots/``` ' })
    }));
    Garfield.addXnodes({ pattern: 'attp ?(.*)', fromMe: true, desc: Lang.ATTP_DESC }, (async (message, match) => {
        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD, MessageType.text);
        var uri = encodeURI(match[1])
        var ttinullimage = await axios.get('https://api.xteam.xyz/attp?file&text=' + uri, { responseType: 'arraybuffer' })
        await message.client.sendMessage(message.jid,Buffer.from(ttinullimage.data), MessageType.sticker, { mimetype: Mimetype.webp })
    }));
}
else if (Config.WORKTYPE == 'public') {
    Garfield.addXnodes({ pattern: 'ttp ?(.*)', fromMe: false, desc: Lang.TTP_DESC }, (async (message, match) => {
        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD, MessageType.text);
        var uri = encodeURI(match[1])
        var ttinullimage = await axios.get('https://api.xteam.xyz/ttp?file&text=' + uri, { responseType: 'arraybuffer' })
        await message.client.sendMessage(message.jid,Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: ' ```Follow Us Facebook - https://www.facebook.com/garfieldbots/``` ' })
    }));
    Garfield.addXnodes({ pattern: 'attp ?(.*)', fromMe: false, desc: Lang.ATTP_DESC }, (async (message, match) => {
        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD, MessageType.text);
        var uri = encodeURI(match[1])
        var ttinullimage = await axios.get('https://api.xteam.xyz/attp?file&text=' + uri, { responseType: 'arraybuffer' })
        await message.client.sendMessage(message.jid,Buffer.from(ttinullimage.data), MessageType.sticker, { mimetype: Mimetype.webp })
    }));
}

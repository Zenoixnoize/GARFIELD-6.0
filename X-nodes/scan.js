/*COPYRIGHT (C) 2022 CODED BY NOIZE */

const Garfield = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const Config = require('../config');

const Language = require('../language');
const Lang = Language.getString('tagall');

if (Config.Auroraxc == 'off' || Config.Auroraxc == 'OFF') {
if (Config.WORKTYPE == 'private') {
    Garfield.addXnodes({ pattern: 'scan ?(.*)', fromMe: true, desc: Lang.SCAN}, (async (message, match) => { 

        if (match[1] == '') return await message.client.sendMessage(message.jid, Lang.NO, MessageType.text);

        var exists = await message.client.isOnWhatsApp(match[1])
        if (exists) {
            await message.client.sendMessage(message.jid, '```' + match[1] + '``` \n' + Lang.SUC + '\n' + exists.jid, MessageType.text);
        }
        else {
            await message.client.sendMessage(message.jid,'```' + match[1] + '``` \n' + Lang.UNSUC, MessageType.text);
        }
    }));
}
else if (Config.WORKTYPE == 'public') {
    Garfield.addXnodes({ pattern: 'scan ?(.*)', fromMe: false, desc: Lang.SCAN}, (async (message, match) => { 

        if (match[1] == '') return await message.client.sendMessage(message.jid, Lang.NO, MessageType.text);

        var exists = await message.client.isOnWhatsApp(match[1])
        if (exists) {
            await message.client.sendMessage(message.jid, '```' + match[1] + '``` \n' + Lang.SUC + '\n' + exists.jid, MessageType.text);
        }
        else {
            await message.client.sendMessage(message.jid,'```' + match[1] + '``` \n' + Lang.UNSUC, MessageType.text);
        }
    }));
}
}
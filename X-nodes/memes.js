/*COPYRIGHT (C) 2022 CODED BY NOIZE */

const Garfield = require('../events');
const {MessageType, Mimetype} = require('@adiwajshing/baileys');
const memeMaker = require('meme-maker')
const fs = require('fs')
const Config = require('../config');

const Language = require('../language');
const Lang = Language.getString('memes');

if (Config.WORKTYPE == 'private') {

    Garfield.addXnodes({pattern: 'meme ?(.*)', fromMe: true, desc: Lang.MEMES_DESC}, (async (message, match) => {   

        if (message.reply_message === false) return await message.client.sendMessage(message.jid,Lang.NEED_REPLY, MessageType.text);
        var topText, bottomText;
        if (match[1].includes(';')) {
            var split = match[1].split(';');
            topText = split[1];
            bottomText = split[0];
        }
	    else {
            topText = match[1];
            bottomText = '';
        }
    
	    var info = await message.reply(Lang.DOWNLOADING);
	
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        }); 
    
	    memeMaker({
            image: location,         
            outfile: 'Garfield-meme.png',
            topText: topText,
            bottomText: bottomText,
        }, async function(err) {
            if(err) throw new Error(err)
            await message.client.sendMessage(message.jid, fs.readFileSync('Garfield-meme.png'), MessageType.image, {filename: 'Garfield-meme.png', mimetype: Mimetype.png, caption: ' ```Follow Us Facebook - https://www.facebook.com/garfieldbots/``` '});
            await info.delete();    
        });
    }));
}
else if (Config.WORKTYPE == 'public') {

    Garfield.addXnodes({pattern: 'meme ?(.*)', fromMe: false, desc: Lang.MEMES_DESC}, (async (message, match) => {    

        if (message.reply_message === false) return await message.client.sendMessage(message.jid,Lang.NEED_REPLY, MessageType.text);
        var topText, bottomText;
        if (match[1].includes(';')) {
            var split = match[1].split(';');
            topText = split[1];
            bottomText = split[0];
        }
	    else {
            topText = match[1];
            bottomText = '';
        }
    
	    var info = await message.reply(Lang.DOWNLOADING);
	
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        }); 
    
	    memeMaker({
            image: location,         
            outfile: 'Garfield-meme.png',
            topText: topText,
            bottomText: bottomText,
        }, async function(err) {
            if(err) throw new Error(err)
            await message.client.sendMessage(message.jid, fs.readFileSync('Garfield-meme.png'), MessageType.image, {filename: 'Garfield-meme.png', mimetype: Mimetype.png, caption: ' ```Follow Us Facebook - https://www.facebook.com/garfieldbots/``` '});
            await info.delete();    
        });
    }));
}

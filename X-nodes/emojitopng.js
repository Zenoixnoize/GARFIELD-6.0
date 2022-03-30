

const Garfield = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const request = require('request');
const got = require("got");
const Config = require('../config');
const des = "You Can Png From Any Emoji"
const iii = "Only work with emoji 🐼\n"
 if (Config.Auroraxc !== 'Off') {
if (Config.WORKTYPE == 'private') {

    Garfield.addXnodes({pattern: 'png ?(.*)', fromMe: true, desc: des}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(iii);

        var webimage = await axios.get(`https://docs-jojo.herokuapp.com/api/emoji2png?emoji=${encodeURIComponent(match[1])}&type=apple`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.png, caption: '  ```Follow Us Facebook - https://www.facebook.com/garfieldbots/```  '})

    }));
}
else if (Config.WORKTYPE == 'public') {

    Garfield.addXnodes({pattern: 'emo ?(.*)', fromMe: false, desc: des}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(iii);

        var webimage = await axios.get(`https://docs-jojo.herokuapp.com/api/emoji2png?emoji=${encodeURIComponent(match[1])}&type=apple`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.png, caption: '  ```Follow Us Facebook - https://www.facebook.com/garfieldbots/```  '})

    }));


    Garfield.addXnodes({pattern: 'emo ?(.*)', fromMe: true,dontAddCMDList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(iii);

        var webimage = await axios.get(`https://docs-jojo.herokuapp.com/api/emoji2png?emoji=${encodeURIComponent(match[1])}&type=apple`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.png, caption: '  ```Follow Us Facebook - https://www.facebook.com/garfieldbots/```  '})

    }));
}
}
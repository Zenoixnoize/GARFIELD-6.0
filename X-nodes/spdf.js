const Garfield = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const request = require('request');
const got = require("got");
const Config = require('../config');
const Language = require('../language');
const Lang = Language.getString('unvoice');
const toxicdevil = Config.WORKTYPE == 'public' ? false : true

   Garfield.addXnodes({pattern: 'spdf ?(.*)', fromMe: toxicdevil, desc: 'Converts Site to PDF.' }, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid, '*You must enter a link!*', MessageType.text);

    var webimage = await axios.get(`https://api.html2pdf.app/v1/generate?url=${match[1]}&apiKey=begC4dFAup1b8LyRXxAfjetfqDg2uYx8PWmh9YJ59tTZXiUyh2Vs72HdYQB68vyc`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid, '```Garfield Converting Site to PDF```', MessageType.text);

    await message.sendMessage(Buffer.from(webimage.data), MessageType.document, {mimetype: Mimetype.pdf, filename: 'GARFIELD-6.0.pdf'});

    }));    

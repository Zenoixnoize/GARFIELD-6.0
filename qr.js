/*COPYRIGHT (C) 2022 CODED BY NOIZE */

const chalk = require('chalk');
const {WAConnection, MessageOptions, MessageType, Mimetype} = require('@adiwajshing/baileys');
const {StringSession} = require('./Aurora/');
const fs = require('fs');

async function GARFIELD-6.0 () {
    const conn = new WAConnection();
    const Session = new StringSession();  
    conn.version = [3, 3234, 9]
    conn.logger.level = 'warn';
    conn.regenerateQRIntervalMs = 50000;

    conn.on('connecting', async () => {
        console.log(`${chalk.green.bold('Whats')}${chalk.blue.bold('GARFIELD')}
${chalk.white.italic('GARFIELDı')}
${chalk.blue.italic('ℹ️  Connecting to Whatsapp... Please Wait.')}`);
    });
    conn.on('open', async () => {
        var st = Session.createStringSession(conn.base64EncodedAuthInfo());
        console.log(
            chalk.green.bold(conn.user.jid.startsWith('90') || conn.user.jid.startsWith('994') ? 'GARFIELD-6.0 String Kodunuz: ' : 'GARFIELD-6.0 String Code: '), st
        );

        if (!fs.existsSync('config.env')) {
            fs.writeFileSync('config.env', `GARFIELD_SESSION="${st}"`);
        }
        console.log(conn.user.jid.startsWith('90') || conn.user.jid.startsWith('994') ? 'Bu Kodu Kimseyle Paylaşma ' + conn.user.name : 'Dont Share This Code to Anyone ' + conn.user.name)
        process.exit(0);
    });
    await conn.connect();
}
GARFIELD-6.0()

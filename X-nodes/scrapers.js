/*COPYRIGHT (C) 2022 CODED BY NOIZE */

const Garfield = require('../events');
const {MessageType,Mimetype} = require('@adiwajshing/baileys');
const translatte = require('translatte');
const config = require('../config');
const xv364 = require('../X-364');
const LanguageDetect = require('languagedetect');
const lngDetector = new LanguageDetect();
const Heroku = require('heroku-client');
const heroku = new Heroku({
    token: config.HEROKU.API_KEY
});
let baseURI = '/apps/' + config.HEROKU.APP_NAME;
//============================== LYRICS =============================================
const axios = require('axios');
const { requestLyricsFor, requestAuthorFor, requestTitleFor, requestIconFor } = require("solenolyrics");
const solenolyrics= require("solenolyrics"); 
//============================== CURRENCY =============================================
const { exchangeRates } = require('exchange-rates-api');
const ExchangeRatesError = require('exchange-rates-api/src/exchange-rates-error.js')
//============================== TTS ==================================================
const fs = require('fs');
const https = require('https');
const googleTTS = require('google-translate-tts');
//=====================================================================================
//============================== YOUTUBE ==============================================
const ytdl = require('ytdl-core');
const ffmpeg = require('fluent-ffmpeg');
const yts = require( 'yt-search' )
const got = require("got");
const ID3Writer = require('browser-id3-writer');
const SpotifyWebApi = require('spotify-web-api-node');

const spotifyApi = new SpotifyWebApi({
    clientId: 'acc6302297e040aeb6e4ac1fbdfd62c3',
    clientSecret: '0e8439a1280a43aba9a5bc0a16f3f009'
});
//=====================================================================================
const Language = require('../language');
const Lang = Language.getString('scrapers');
const Glang = Language.getString('github');
const Slang = Language.getString('lyrics');
const Clang = Language.getString('covid');

const wiki = require('wikijs').default;
var gis = require('g-i-s');

var dlang_dsc = ''
var closer_res = ''
var dlang_lang = ''
var dlang_similarity = ''
var dlang_other = ''
var dlang_input = ''

if (config.LANG == 'TR') {
    dlang_dsc = 'Yanıtlanan mesajın dilini tahmin eder.'
    closer_res = 'En Yakın Sonuç:'
    dlang_lang = 'Dil:'
    dlang_similarity = 'Benzerlik:'
    dlang_other = 'Diğer Diller'
    dlang_input = 'İşlenen Metin:'
}
if (config.LANG == 'EN') {
    dlang_dsc = 'Guess the language of the replied message.'
    closer_res = 'Closest Result:'
    dlang_lang = 'Language:'
    dlang_similarity = 'Similarity:'
    dlang_other = 'Other Languages'
    dlang_input = 'Processed Text:'
}
if (config.LANG == 'AZ') {
    dlang_dsc = 'Cavablanan mesajın dilini təxmin edin.'
    closer_res = 'Ən yaxın nəticə:'
    dlang_lang = 'Dil:'
    dlang_similarity = 'Bənzərlik:'
    dlang_other = 'Başqa Dillər'
    dlang_input = 'İşlənmiş Mətn:'
}
if (config.LANG == 'ML') {
    dlang_dsc = 'മറുപടി നൽകിയ സന്ദേശത്തിന്റെ ഭാഷ ess ഹിക്കുക.'
    closer_res = 'ഏറ്റവും അടുത്ത ഫലം:'
    dlang_lang = 'നാവ്:'
    dlang_similarity = 'സമാനത:'
    dlang_other = 'മറ്റ് ഭാഷകൾ'
    dlang_input = 'പ്രോസസ്സ് ചെയ്ത വാചകം:'
}
if (config.LANG == 'HI') {
    dlang_dsc = 'उत्तर दिए गए संदेश की भाषा का अनुमान लगाएं'
    closer_res = 'निकटतम परिणाम:'
    dlang_lang = 'जुबान:'
    dlang_similarity = 'समानता:'
    dlang_other = 'अन्य भाषाएँ'
    dlang_input = 'संसाधित पाठ:'
}
if (config.LANG == 'ES') {
    dlang_dsc = 'Adivina el idioma del mensaje respondido.'
    closer_res = 'Resultado más cercano:'
    dlang_lang = 'Lengua:'
    dlang_similarity = 'Semejanza:'
    dlang_other = 'Otros idiomas:'
    dlang_input = 'Texto procesado:'
}
if (config.LANG == 'PT') {
    dlang_dsc = 'Adivinhe o idioma da mensagem respondida.'
    closer_res = 'Resultado mais próximo:'
    dlang_lang = 'Língua:'
    dlang_similarity = 'Similaridade:'
    dlang_other = 'Outras línguas'
    dlang_input = 'Texto Processado:'
}
if (config.LANG == 'ID') {
    dlang_dsc = 'Tebak bahasa pesan yang dibalas.'
    closer_res = 'Hasil Terdekat:'
    dlang_lang = 'Lidah:'
    dlang_similarity = 'Kesamaan:'
    dlang_other = 'Bahasa Lainnya'
    dlang_input = 'Teks yang Diproses:'
}
if (config.LANG == 'RU') {
    dlang_dsc = 'Угадай язык ответного сообщения.'
    closer_res = 'Ближайший результат:'
    dlang_lang = 'Язык:'
    dlang_similarity = 'Сходствo:'
    dlang_other = 'Другие языки'
    dlang_input = 'Обработанный текст:'
}

if (config.Auroraxc == 'off' || config.Auroraxc == 'OFF') {
if (config.WORKTYPE == 'private') {

    Garfield.addXnodes({pattern: 'trt(?: |$)(\\S*) ?(\\S*)', desc: Lang.TRANSLATE_DESC, usage: Lang.TRANSLATE_USAGE, fromMe: true}, (async (message, match) => {

        if (!message.reply_message) {
            return await message.client.sendMessage(message.jid,Lang.NEED_REPLY,MessageType.text);
        }

        ceviri = await translatte(message.reply_message.message, {from: match[1] === '' ? 'auto' : match[1], to: match[2] === '' ? config.LANG : match[2]});
        if ('text' in ceviri) {
            return await message.reply('*▶️ ' + Lang.LANG + ':* ```' + (match[1] === '' ? 'auto' : match[1]) + '```\n'
            + '*◀️ ' + Lang.FROM + '*: ```' + (match[2] === '' ? config.LANG : match[2]) + '```\n'
            + '*🔎 ' + Lang.RESULT + ':* ```' + ceviri.text + '```');
        } else {
            return await message.client.sendMessage(message.jid,Lang.TRANSLATE_ERROR,MessageType.text)
        }
    }));
    var auto_dsc = ''
    var alr_on_bio = ''
    var alr_off_bio = ''
    var succ_on_bio = ''
    var succ_off_bio = ''
    if (config.LANG == 'TR') {
        auto_dsc = 'Biyografinize canlı saat ekleyin!'
        alr_on_bio = 'Autobio halihazırda açık!'
        alr_off_bio = 'Autobio halihazırda kapalı!'
        succ_on_bio = 'Autobio Başarıyla Açıldı!'
        succ_off_bio = 'Autobio Başarıyla Kapatıldı!'
    }
    if (config.LANG == 'EN') {
        auto_dsc = 'Add live clock to your bio!'
        alr_on_bio = 'Autobio is already open!'
        alr_off_bio = 'Autobio is currently closed!'
        succ_on_bio = 'Autobio Opened Successfully!'
        succ_off_bio = 'Autobio Closed Successfully!'
    }
    if (config.LANG == 'AZ') {
        auto_dsc = 'Bio-ya canlı saat əlavə et!'
        alr_on_bio = 'Autobio hazırda açıqdır!'
        alr_off_bio = 'Autobio hazırda bağlıdır!'
        succ_on_bio = 'Autobio Uğurla Açıldı!'
        succ_off_bio = 'Autobio Uğurla Bağlandı!'
    }
    if (config.LANG == 'HI') {
        auto_dsc = 'अपने बायो में लाइव घड़ी जोड़ें!'
        alr_on_bio = 'Autobio पहले से ही खुला है!'
        alr_off_bio = 'Autobio वर्तमान में बंद है!'
        succ_on_bio = 'Autobio सफलतापूर्वक खोला गया!'
        succ_off_bio = 'Autobio सफलतापूर्वक बंद!'
    }
    if (config.LANG == 'ML') {
        auto_dsc = 'നിങ്ങളുടെ ബയോയിലേക്ക് തത്സമയ ക്ലോക്ക് ചേർക്കുക!'
        alr_on_bio = 'Autobio ഇതിനകം തുറന്നു!'
        alr_off_bio = 'Autobio നിലവിൽ അടച്ചിരിക്കുന്നു!'
        succ_on_bio = 'Autobio വിജയകരമായി തുറന്നു!'
        succ_off_bio = 'Autobio വിജയകരമായി അടച്ചു!'
    }
    if (config.LANG == 'PT') {
        auto_dsc = 'Adicione um relógio ao vivo à sua biografia!'
        alr_on_bio = 'O Autobio já está aberto!'
        alr_off_bio = 'Autobio está fechado no momento!'
        succ_on_bio = 'Autobio aberto com sucesso!'
        succ_off_bio = 'Autobio fechado com sucesso!'
    }
    if (config.LANG == 'RU') {
        auto_dsc = 'Добавьте живые часы в свою биографию!'
        alr_on_bio = 'Autobio уже открыт!'
        alr_off_bio = 'Autobio сейчас закрыт!'
        succ_on_bio = 'Autobio успешно открыт!'
        succ_off_bio = 'Autobio успешно закрыт!'
    }
    if (config.LANG == 'ES') {
        auto_dsc = '¡Agrega un reloj en vivo a tu biografía!'
        alr_on_bio = '¡Autobio ya está abierto!'
        alr_off_bio = '¡Autobio está cerrado actualmente!'
        succ_on_bio = '¡Autobio se abrió con éxito!'
        succ_off_bio = 'Autobio cerrado correctamente!'
    }
    if (config.LANG == 'ID') {
        auto_dsc = 'Tambahkan jam langsung ke bio Anda!'
        alr_on_bio = 'Autobio sudah terbuka!'
        alr_off_bio = 'Autobio saat ini ditutup!'
        succ_on_bio = 'Autobio Berhasil Dibuka!'
        succ_off_bio = 'Autobio Berhasil Ditutup!'
    }
    Garfield.addXnodes({pattern: 'autobio ?(.*)', fromMe: true, desc: auto_dsc, usage: '.autobio on / off' }, (async (message, match) => {
        const bio_status = `${config.AUTOBİO}`
        if (match[1] == 'on') {
            if (bio_status == 'true') {
                return await message.client.sendMessage(message.jid, '*' + alr_on_bio + '*', MessageType.text)
            }
            else {
                await heroku.patch(baseURI + '/config-vars', { 
                    body: { 
                        ['AUTO_BİO']: 'true'
                    } 
                });
                await message.client.sendMessage(message.jid, '*' + succ_on_bio + '*', MessageType.text)
            }
        }
        else if (match[1] == 'off') {
            if (bio_status !== 'true') {
                return await message.client.sendMessage(message.jid, '*' + alr_off_bio + '*', MessageType.text)
            }
            else {
                await heroku.patch(baseURI + '/config-vars', { 
                    body: { 
                        ['AUTO_BİO']: 'false'
                    } 
                });
                await message.client.sendMessage(message.jid, '*' + succ_off_bio + '*', MessageType.text)
            }
        }
    }));
    Garfield.addXnodes({pattern: 'detectlang$', fromMe: true, desc: dlang_dsc}, (async (message, match) => {

        if (!message.reply_message) return await message.client.sendMessage(message.jid,Lang.NEED_REPLY, MessageType.text)
        const msg = message.reply_message.text
        var ldet = lngDetector.detect(msg)
        async function upperfirstLetter(letter) {
            return letter.charAt(0).toUpperCase() + letter.slice(1).toLowerCase();
        }
        var cls1 = await upperfirstLetter(ldet[0][0])
        var cls2 = ldet[0][1].toString()
        var cls3 = await upperfirstLetter(ldet[1][0])
        var cls4 = ldet[1][1].toString()
        var cls5 = await upperfirstLetter(ldet[2][0])
        var cls6 = ldet[2][1].toString()
        var cls7 = await upperfirstLetter(ldet[3][0])
        var cls8 = ldet[3][1].toString()
        const res_1 = '*' + dlang_input + '* ' + '_' + msg + '_ \n'
        const res_2 = '*' + closer_res + '* ' + '_' + cls1 + '_\n*' + dlang_similarity + '* ' + '_' + cls2 + '_ \n\n'
        const res_3 = '```[ ' + dlang_other + ' ]```\n\n'
        const res_4 = '#2 *' + dlang_lang + '* ' + '_' + cls3 + '_\n*' + dlang_similarity + '* ' + '_' + cls4 + '_ \n'
        const res_5 = '#3 *' + dlang_lang + '* ' + '_' + cls5 + '_\n*' + dlang_similarity + '* ' + '_' + cls6 + '_ \n'
        const res_6 = '#4 *' + dlang_lang + '* ' + '_' + cls7 + '_\n*' + dlang_similarity + '* ' + '_' + cls8 + '_'
        const rep_7 = res_1 + res_2 + res_3 + res_4 + res_5 + res_6
        await message.client.sendMessage(message.jid,rep_7,MessageType.text);
    }));
    Garfield.addXnodes({pattern: 'currency(?: ([0-9.]+) ([a-zA-Z]+) ([a-zA-Z]+)|$|(.*))', fromMe: true}, (async (message, match) => {

        if(match[1] === undefined || match[2] == undefined || match[3] == undefined) {
            return await message.client.sendMessage(message.jid,Lang.CURRENCY_ERROR,MessageType.text);
        }
        let opts = {
            amount: parseFloat(match[1]).toFixed(2).replace(/\.0+$/,''),
            from: match[2].toUpperCase(),
            to: match[3].toUpperCase()
        }
        try {
            result = await exchangeRates().latest().symbols([opts.to]).base(opts.from).fetch()
            result = parseFloat(result).toFixed(2).replace(/\.0+$/,'')
            await message.reply(`\`\`\`${opts.amount} ${opts.from} = ${result} ${opts.to}\`\`\``)
        }
        catch(err) {
            if (err instanceof ExchangeRatesError) 
                await message.client.sendMessage(message.jid,Lang.INVALID_CURRENCY,MessageType.text)
            else {
                await message.client.sendMessage(message.jid,Lang.UNKNOWN_ERROR,MessageType.text)
                console.log(err)
            }
        }
    }));

    if (config.LANG == 'TR' || config.LANG == 'AZ') {

        Garfield.addXnodes({pattern: 'tts (.*)', fromMe: true, desc: Lang.TTS_DESC}, (async (message, match) => {

            if(match[1] === undefined || match[1] == "")
                return;
    
            let 
                LANG = 'si',
                ttsMessage = match[1],
                SPEED = 1.0

            if(langMatch = match[1].match("\\{([a-z]{2})\\}")) {
                LANG = langMatch[1]
                ttsMessage = ttsMessage.replace(langMatch[0], "")
            } 
            if(speedMatch = match[1].match("\\{([0].[0-9]+)\\}")) {
                SPEED = parseFloat(speedMatch[1])
                ttsMessage = ttsMessage.replace(speedMatch[0], "")
            }
    
            var buffer = await googleTTS.synthesize({
                text: ttsMessage,
                voice: LANG
            });
            await message.client.sendMessage(message.jid,buffer, MessageType.audio, {mimetype: Mimetype.mp4Audio, ptt: true});
        }));
    }
    else {
        Garfield.addXnodes({pattern: 'tts (.*)', fromMe: true, desc: Lang.TTS_DESC}, (async (message, match) => {

            if(match[1] === undefined || match[1] == "")
                return;
    
            let 
                LANG = 'si',
                ttsMessage = match[1],
                SPEED = 1.0

            if(langMatch = match[1].match("\\{([a-z]{2})\\}")) {
                LANG = langMatch[1]
                ttsMessage = ttsMessage.replace(langMatch[0], "")
            } 
            if(speedMatch = match[1].match("\\{([0].[0-9]+)\\}")) {
                SPEED = parseFloat(speedMatch[1])
                ttsMessage = ttsMessage.replace(speedMatch[0], "")
            }
    
            var buffer = await googleTTS.synthesize({
                text: ttsMessage,
                voice: LANG
            });
            await message.client.sendMessage(message.jid,buffer, MessageType.audio, {mimetype: Mimetype.mp4Audio, ptt: true});
        }));
    }
    Garfield.addXnodes({pattern: 'song ?(.*)', fromMe: true, desc: Lang.SONG_DESC}, (async (message, match) => { 

        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_TEXT_SONG,MessageType.text);    
        let arama = await yts(match[1]);
        arama = arama.all;
        if(arama.length < 1) return await message.client.sendMessage(message.jid,Lang.NO_RESULT,MessageType.text);
        var reply = await message.client.sendMessage(message.jid,Lang.DOWNLOADING_SONG,MessageType.text);

        let title = arama[0].title.replace(' ', '+');
        let stream = ytdl(arama[0].videoId, {
            quality: 'lowestaudio',
        });
    
        got.stream(arama[0].image).pipe(fs.createWriteStream(title + '.jpg'));
        ffmpeg(stream)
            .audioBitrate(128)
            .save('./' + title + '.mp3')
            .on('end', async () => {
                const writer = new ID3Writer(fs.readFileSync('./' + title + '.mp3'));
                writer.setFrame('TIT2', arama[0].title)
                    .setFrame('TPE1', [arama[0].author.name])
                    .setFrame('APIC', {
                        type: 3,
                        data: fs.readFileSync(title + '.jpg'),
                        description: arama[0].description
                    });
                writer.addTag();

                reply = await message.client.sendMessage(message.jid,Lang.UPLOADING_SONG,MessageType.text);
                await message.client.sendMessage(message.jid,Buffer.from(writer.arrayBuffer), MessageType.audio, {mimetype: Mimetype.mp4Audio, ptt: false});
            });
    }));
    
    Garfield.addXnodes({pattern: 'number', fromMe: false, desc: Lang.NUMBER}, (async (message, match) => {

            const p_lk = 'BEGIN:VCARD\n'
            + 'VERSION:6.0\n' 
            + 'FN:' + xv364.OA_NAME + '\n' //created afnanplk, please copy this with credit..
            + 'ORG:Coded by Tharindu Liyanage;\n' 
            + 'TEL;type=CELL;type=VOICE;waid=' + xv364.PHONE + ':' + xv364.PHONE + ' \n'
            + 'END:VCARD'
await message.client.sendMessage(message.jid, {displayname: "Garfield", vcard: p_lk}, MessageType.contact);

  }));    

    Garfield.addXnodes({pattern: 'video ?(.*)', fromMe: true, desc: Lang.VIDEO_DESC}, (async (message, match) => { 

        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_VIDEO,MessageType.text);    
    
        var VID = '';
        try {
            if (match[1].includes('watch')) {
                var tsts = match[1].replace('watch?v=', '')
                var alal = tsts.split('/')[3]
                VID = alal
            } else {     
                VID = match[1].split('/')[3]
            }
        } catch {
            return await message.client.sendMessage(message.jid,Lang.NO_RESULT,MessageType.text);
        }
        var reply = await message.client.sendMessage(message.jid,Lang.DOWNLOADING_VIDEO,MessageType.text);

        var yt = ytdl(VID, {filter: format => format.container === 'mp4' && ['480p', '360p', '240p', '144p'].map(() => true)});
        yt.pipe(fs.createWriteStream('./' + VID + '.mp4'));

        yt.on('end', async () => {
            reply = await message.client.sendMessage(message.jid,Lang.UPLOADING_VIDEO,MessageType.text);
            await message.client.sendMessage(message.jid,fs.readFileSync('./' + VID + '.mp4'), MessageType.video, {mimetype: Mimetype.mp4});
        });
    }));

    Garfield.addXnodes({pattern: 'yt ?(.*)', fromMe: true, desc: Lang.YT_DESC}, (async (message, match) => { 

        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORDS,MessageType.text);    
        var reply = await message.client.sendMessage(message.jid,Lang.GETTING_VIDEOS,MessageType.text);

        try {
            var arama = await yts(match[1]);
        } catch {
            return await message.client.sendMessage(message.jid,Lang.NOT_FOUND,MessageType.text);
        }
    
        var mesaj = '';
        arama.all.map((video) => {
            mesaj += '*' + video.title + '* - ' + video.url + '\n'
        });

        await message.client.sendMessage(message.jid,mesaj,MessageType.text);
        await reply.delete();
    }));

    Garfield.addXnodes({pattern: 'wiki ?(.*)', fromMe: true, desc: Lang.WIKI_DESC}, (async (message, match) => { 

        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORDS,MessageType.text);    
        var reply = await message.client.sendMessage(message.jid,Lang.SEARCHING,MessageType.text);

        var arama = await wiki({ apiUrl: 'https://' + config.LANG + '.wikipedia.org/w/api.php' })
            .page(match[1]);

        var info = await arama.rawContent();
        await message.client.sendMessage(message.jid, info, MessageType.text);
        await reply.delete();
    }));

    Garfield.addXnodes({pattern: 'img ?(.*)', fromMe: true, desc: Lang.IMG_DESC}, (async (message, match) => { 

        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORDS,MessageType.text);
        gis(match[1], async (error, result) => {
            for (var i = 0; i < (result.length < 5 ? result.length : 5); i++) {
                var get = got(result[i].url, {https: {rejectUnauthorized: false}});
                var stream = get.buffer();
                
                stream.then(async (image) => {
                    await message.client.sendMessage(message.jid,image, MessageType.image);
                });
            }

            message.reply(Lang.IMG.format((result.length < 5 ? result.length : 5), match[1]));
        });
    }));

    Garfield.addXnodes({ pattern: 'github ?(.*)', fromMe: true, desc: Glang.GİTHUB_DESC }, async (message, match) => {

        const userName = match[1]
 
        if (userName === '') return await message.client.sendMessage(message.jid, Glang.REPLY, MessageType.text)

        await axios
          .get(`https://videfikri.com/api/github/?username=${userName}`)
          .then(async (response) => {

            const {
              hireable,
              company,
              profile_pic,
              username,
              fullname, 
              blog, 
              location,
              email,
              public_repository,
              biografi,
              following,
              followers,
              public_gists,
              profile_url,
              last_updated,
              joined_on,
            } = response.data.result

            const githubscrap = await axios.get(profile_pic, 
              {responseType: 'arraybuffer',
            })

            const msg = `*${Glang.USERNAME}* ${username} \n*${Glang.NAME}* ${fullname} \n*${Glang.FOLLOWERS}* ${followers} \n*${Glang.FOLLOWİNG}* ${following} \n*${Glang.BİO}* ${biografi} \n*${Glang.REPO}* ${public_repository} \n*${Glang.GİST}* ${public_gists} \n*${Glang.LOCATİON}* ${location} \n*${Glang.MAİL}* ${email} \n*${Glang.BLOG}* ${blog} \n*${Glang.COMPANY}* ${company} \n*${Glang.HİRE}* ${hireable === "true" ? Glang.HİRE_TRUE : Glang.HİRE_FALSE} \n*${Glang.JOİN}* ${joined_on} \n*${Glang.UPDATE}* ${last_updated} \n*${Glang.URL}* ${profile_url}`

            await message.sendMessage(Buffer.from(githubscrap.data), MessageType.image, { 
              caption: msg,
            })
          })
          .catch(
            async (err) => await message.client.sendMessage(message.jid, Glang.NOT, MessageType.text),
          )
      },
    )

    Garfield.addXnodes({pattern: 'lyric ?(.*)', fromMe: true, desc: Slang.LY_DESC }, (async (message, match) => { 

        if (match[1] === '') return await message.client.sendMessage(message.jid, Slang.NEED, MessageType.text);

        var aut = await solenolyrics.requestLyricsFor(`${match[1]}`); 
        var son = await solenolyrics.requestAuthorFor(`${match[1]}`);
        var cov = await solenolyrics.requestIconFor(`${match[1]}`);
        var tit = await solenolyrics.requestTitleFor(`${match[1]}`);

        var buffer = await axios.get(cov, {responseType: 'arraybuffer'});

        await message.client.sendMessage(message.jid, Buffer.from(buffer.data),  MessageType.image, {caption: `*${Slang.ARAT}* ` + '```' + `${match[1]}` + '```' + `\n*${Slang.BUL}* ` + '```' + tit + '```' + `\n*${Slang.AUT}* ` + '```' + son + '```' + `\n*${Slang.SLY}*\n\n` + aut });

    }));

    Garfield.addXnodes({pattern: "covid ?(.*)", fromMe: true, desc: Clang.COV_DESC}, (async (message, match) => {
        if (match[1] === "") {
            try{
                //const resp = await fetch("https://coronavirus-19-api.herokuapp.com/all").then(r => r.json());
                const respo = await got("https://coronavirus-19-api.herokuapp.com/all").then(async ok => {
                    const resp = JSON.parse(ok.body);
                    await message.reply(`🌍 *World-Wide Results:*\n🌐 *Total Cases:* ${resp.cases}\n☠️ *Total Deaths:* ${resp.deaths}\n⚕️ *Total Recovered:* ${resp.recovered}`);
 
                });

            } catch (err) {
                await message.reply(`Error :\n${err.message}`, MessageType.text)
            }

        }
        else if (match[1] === "tr" || match[1] === "Tr" || match[1] === "TR" || match[1].includes('turkiye') || match[1].includes('türkiye') || match[1].includes('türk') ) {
            try{
                const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/Turkey").then(async ok  => {
                    resp = JSON.parse(ok.body);
                    await message.reply(`🇹🇷 *Türkiye İçin Sonuçlar:*\n😷 *Toplam Vaka:* ${resp.cases}\n🏥 *Günlük Hasta:* ${resp.todayCases}\n⚰️ *Toplam Ölü:* ${resp.deaths}\n☠️ *Günlük Ölü:* ${resp.todayDeaths}\n💊 *Toplam İyileşen:* ${resp.recovered}\n😷 *Aktif Vaka:* ${resp.active}\n🆘 *Ağır Hasta:* ${resp.critical}\n🧪 *Toplam Test:* ${resp.totalTests}`);
                });
            } catch (err) {
                await message.reply(`Bir Hata Oluştu, İşte Hata : \n${err.message}`, MessageType.text)
            }

        }
        else if (match[1] === "usa" || match[1] === "Usa" || match[1] === "USA" || match[1] === "america" || match[1] === "America") {
            try{
                const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/USA").then(async ok  => {
                    resp = JSON.parse(ok.body);
                    await message.reply(`🇺🇲 *Datas for USA:*\n😷 *Total Cases:* ${resp.cases}\n🏥 *Daily Cases:* ${resp.todayCases}\n⚰️ *Total Deaths:* ${resp.deaths}\n☠️ *Daily Deaths:* ${resp.todayDeaths}\n💊 *Total Recovered:* ${resp.recovered}\n😷 *Active Cases:* ${resp.active}\n🆘 *Critical Cases:* ${resp.critical}\n🧪 *Total Test:* ${resp.totalTests}`);

                });

            } catch (err) {
                await message.reply(`Error : \n${err.message}`, MessageType.text)
            }
        }
        else if (match[1] === "de" || match[1] === "De" || match[1] === "DE" || match[1] === "Germany" || match[1] === "germany" || match[1].includes('deutschland') ) {
            try{
                const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/Germany").then(async ok  => {
                    resp = JSON.parse(ok.body);
                    await message.reply(`🇩🇪 *Daten für Deutschland:*\n😷 *Fälle İnsgesamt:* ${resp.cases}\n🏥 *Tägliche Fälle:* ${resp.todayCases}\n⚰️ *Totale Todesfälle:* ${resp.deaths}\n☠️ *Tägliche Todesfälle:* ${resp.todayDeaths}\n💊 *Insgesamt Wiederhergestellt:* ${resp.recovered}\n😷 *Aktuelle Fälle:* ${resp.active}\n🆘 *Kritische Fälle:* ${resp.critical}\n🧪 *Gesamttests:* ${resp.totalTests}`);

                });

            } catch (err) {
                await message.reply(`Error : \n${err.message}`, MessageType.text)
            }
        }
        else if (match[1] === "az" || match[1] === "AZ" || match[1] === "Az" || match[1].includes('azerbaycan') || match[1].includes('azeri') ) {
            try{
                const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/Azerbaijan").then(async ok  => {
                    resp = JSON.parse(ok.body);
                    await message.reply(`🇦🇿 *Azərbaycan üçün məlumatlar:*\n😷 *Ümumi Baş Tutan Hadisə:* ${resp.cases}\n🏥 *Günlük Xəstə:* ${resp.todayCases}\n⚰️ *Ümumi Ölüm:* ${resp.deaths}\n☠️ *Günlük Ölüm:* ${resp.todayDeaths}\n💊 *Ümumi Sağalma:* ${resp.recovered}\n😷 *Aktiv Xəstə Sayı:* ${resp.active}\n🆘 *Ağır Xəstə Sayı:* ${resp.critical}\n🧪 *Ümumi Test:* ${resp.totalTests}`);

                });

            } catch (err) {
                await message.reply(`Error : \n${err.message}`, MessageType.text)
            }
        }
        else if (match[1] === "uk" || match[1] === "Uk" || match[1] === "UK" || match[1] === "United" || match[1].includes('kingdom') ) {
            try{
                const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/UK").then(async ok  => {
                    resp = JSON.parse(ok.body);
                    await message.reply(`🇬🇧 *Datas for UK:*\n😷 *Total Cases:* ${resp.cases}\n🏥 *Daily Cases:* ${resp.todayCases}\n⚰️ *Total Deaths:* ${resp.deaths}\n☠️ *Daily Deaths:* ${resp.todayDeaths}\n💊 *Total Recovered:* ${resp.recovered}\n😷 *Active Cases:* ${resp.active}\n🆘 *Critical Cases:* ${resp.critical}\n🧪 *Total Test:* ${resp.totalTests}`);

                });

            } catch (err) {
                await message.reply(`Error : \n${err.message}`, MessageType.text)
            }
        }
        else if (match[1] === "in" || match[1] === "ın" || match[1] === "In" || match[1] === "İn" || match[1] === "IN" ||  match[1] === "İN" || match[1] === "india" || match[1] === "India" || match[1].includes('indian') ) {
            try{
                const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/India").then(async ok  => {
                    resp = JSON.parse(ok.body);
                    await message.reply(`🇮🇳 *भारत के लिए डेटा:*\n😷 *कुल मामले:* ${resp.cases}\n🏥 *दैनिक मामले:* ${resp.todayCases}\n⚰️ *कुल मौतें:* ${resp.deaths}\n☠️ *रोज की मौत:* ${resp.todayDeaths}\n💊 *कुल बरामद:* ${resp.recovered}\n😷 *एक्टिव केस:* ${resp.active}\n🆘 *गंभीर मामले:* ${resp.critical}\n🧪 *कुल टेस्ट:* ${resp.totalTests}`);

                });

            } catch (err) {
                await message.reply(`Error : \n${err.message}`, MessageType.text)
            }
        }
        else if (match[1] === "cn" || match[1] === "Cn" || match[1] === "CN" || match[1].includes('china') ) {
            try{
                const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/China").then(async ok  => {
                    resp = JSON.parse(ok.body);
                    await message.reply(`🇨🇳 *Datas for China:*\n😷 *Total Cases:* ${resp.cases}\n🏥 *Daily Cases:* ${resp.todayCases}\n⚰️ *Total Deaths:* ${resp.deaths}\n☠️ *Daily Deaths:* ${resp.todayDeaths}\n💊 *Total Recovered:* ${resp.recovered}\n😷 *Active Cases:* ${resp.active}\n🆘 *Critical Cases:* ${resp.critical}\n🧪 *Total Test:* ${resp.totalTests}`);

                });

            } catch (err) {
                await message.reply(`Error : \n${err.message}`, MessageType.text)
            }
        }
        else if (match[1] === "gr" || match[1] === "Gr" || match[1] === "GR" || match[1].includes('greek') ) {
            try{
                const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/Greece").then(async ok  => {
                    resp = JSON.parse(ok.body);
                    await message.reply(`🇬🇷 *Datas for Greece:*\n😷 *Total Cases:* ${resp.cases}\n🏥 *Daily Cases:* ${resp.todayCases}\n⚰️ *Total Deaths:* ${resp.deaths}\n☠️ *Daily Deaths:* ${resp.todayDeaths}\n💊 *Total Recovered:* ${resp.recovered}\n😷 *Active Cases:* ${resp.active}\n🆘 *Critical Cases:* ${resp.critical}\n🧪 *Total Test:* ${resp.totalTests}`);

                });

            } catch (err) {
                await message.reply(`Error : \n${err.message}`, MessageType.text)
            }
        }
        else if (match[1] === "fr" || match[1] === "Fr" || match[1] === "FR" || match[1].includes('france') ) {
            try{
                const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/France").then(async ok  => {
                    resp = JSON.parse(ok.body);
                    await message.reply(`🇫🇷 *Datas for France:*\n😷 *Total Cases:* ${resp.cases}\n🏥 *Daily Cases:* ${resp.todayCases}\n⚰️ *Total Deaths:* ${resp.deaths}\n☠️ *Daily Deaths:* ${resp.todayDeaths}\n💊 *Total Recovered:* ${resp.recovered}\n😷 *Active Cases:* ${resp.active}\n🆘 *Critical Cases:* ${resp.critical}\n🧪 *Total Test:* ${resp.totalTests}`);

                });

            } catch (err) {
                await message.reply(`Error : \n${err.message}`, MessageType.text)
            }
        }
        else if (match[1] === "jp" || match[1] === "Jp" || match[1] === "JP" || match[1].includes('japan') ) {
            try{
                const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/Japan").then(async ok  => {
                    resp = JSON.parse(ok.body);
                    await message.reply(`🇯🇵 *Datas for Japan:*\n😷 *Total Cases:* ${resp.cases}\n🏥 *Daily Cases:* ${resp.todayCases}\n⚰️ *Total Deaths:* ${resp.deaths}\n☠️ *Daily Deaths:* ${resp.todayDeaths}\n💊 *Total Recovered:* ${resp.recovered}\n😷 *Active Cases:* ${resp.active}\n🆘 *Critical Cases:* ${resp.critical}\n🧪 *Total Test:* ${resp.totalTests}`);

                });
 
            } catch (err) {
                await message.reply(`Error : \n${err.message}`, MessageType.text)
            }
        }
        else if (match[1] === "kz" || match[1] === "Kz" || match[1] === "KZ" || match[1].includes('kazakistan') ) {
            try{
                const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/Kazakhstan").then(async ok  => {
                    resp = JSON.parse(ok.body);
                    await message.reply(`🇰🇿 *Datas for Kazakhstan:*\n😷 *Total Cases:* ${resp.cases}\n🏥 *Daily Cases:* ${resp.todayCases}\n⚰️ *Total Deaths:* ${resp.deaths}\n☠️ *Daily Deaths:* ${resp.todayDeaths}\n💊 *Total Recovered:* ${resp.recovered}\n😷 *Active Cases:* ${resp.active}\n🆘 *Critical Cases:* ${resp.critical}\n🧪 *Total Test:* ${resp.totalTests}`);

                });

            } catch (err) {
                await message.reply(`Error : \n${err.message}`, MessageType.text)
            }
        }
        else if (match[1] === "pk" || match[1] === "Pk" || match[1] === "PK" || match[1].includes('pakistan') ) {
            try{
                const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/Pakistan").then(async ok  => {
                    resp = JSON.parse(ok.body);
                    await message.reply(`🇵🇰 *Datas for Pakistan:*\n😷 *Total Cases:* ${resp.cases}\n🏥 *Daily Cases:* ${resp.todayCases}\n⚰️ *Total Deaths:* ${resp.deaths}\n☠️ *Daily Deaths:* ${resp.todayDeaths}\n💊 *Total Recovered:* ${resp.recovered}\n😷 *Active Cases:* ${resp.active}\n🆘 *Critical Cases:* ${resp.critical}\n🧪 *Total Test:* ${resp.totalTests}`);

                });

            } catch (err) {
                await message.reply(`Error : \n${err.message}`, MessageType.text)
            }
        } 
        else if (match[1] === "ru" || match[1] === "Ru" || match[1] === "RU" || match[1].includes('russia') ) {
            try{
                const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/Russia").then(async ok  => {
                    resp = JSON.parse(ok.body);
                    await message.reply(`🇷🇺 *Datas for Russia:*\n😷 *Total Cases:* ${resp.cases}\n🏥 *Daily Cases:* ${resp.todayCases}\n⚰️ *Total Deaths:* ${resp.deaths}\n☠️ *Daily Deaths:* ${resp.todayDeaths}\n💊 *Total Recovered:* ${resp.recovered}\n😷 *Active Cases:* ${resp.active}\n🆘 *Critical Cases:* ${resp.critical}\n🧪 *Total Test:* ${resp.totalTests}`);

                });

            } catch (err) {
                await message.reply(`Error : \n${err.message}`, MessageType.text)
            }
        } 
        else if (match[1] === "id" || match[1] === "İd" || match[1] === "İD" || match[1] === "ıd" || match[1] === "Id" || match[1] === "ID" || match[1].includes('ındonesia') ) {
            try{
                const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/Indonesia").then(async ok  => {
                    resp = JSON.parse(ok.body);
                    await message.reply(`🇮🇩 *Datas for Indonesia:*\n😷 *Total Cases:* ${resp.cases}\n🏥 *Daily Cases:* ${resp.todayCases}\n⚰️ *Total Deaths:* ${resp.deaths}\n☠️ *Daily Deaths:* ${resp.todayDeaths}\n💊 *Total Recovered:* ${resp.recovered}\n😷 *Active Cases:* ${resp.active}\n🆘 *Critical Cases:* ${resp.critical}\n🧪 *Total Test:* ${resp.totalTests}`);

                });

            } catch (err) {
                await message.reply(`Error : \n${err.message}`, MessageType.text)
            }
        } 
        else if (match[1] === "nl" || match[1] === "Nl" || match[1] === "NL" || match[1].includes('netherland') ) {
            try{
                const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/Netherlands").then(async ok  => {
                    resp = JSON.parse(ok.body);
                    await message.reply(`🇳🇱 *Datas for Netherlands:*\n😷 *Total Cases:* ${resp.cases}\n🏥 *Daily Cases:* ${resp.todayCases}\n⚰️ *Total Deaths:* ${resp.deaths}\n☠️ *Daily Deaths:* ${resp.todayDeaths}\n💊 *Total Recovered:* ${resp.recovered}\n😷 *Active Cases:* ${resp.active}\n🆘 *Critical Cases:* ${resp.critical}\n🧪 *Total Test:* ${resp.totalTests}`);

                });

            } catch (err) {
                await message.reply(`Error : \n${err.message}`, MessageType.text)
            }
        } 
        else {
            return await message.client.sendMessage(
                message.jid,
                Clang.NOT,
                MessageType.text
            );
        }
    }));

}
else if (config.WORKTYPE == 'public') {

    Garfield.addXnodes({pattern: 'trt(?: |$)(\\S*) ?(\\S*)', desc: Lang.TRANSLATE_DESC, usage: Lang.TRANSLATE_USAGE, fromMe: false}, (async (message, match) => {

        if (!message.reply_message) {
            return await message.client.sendMessage(message.jid,Lang.NEED_REPLY,MessageType.text);
        }

        ceviri = await translatte(message.reply_message.message, {from: match[1] === '' ? 'auto' : match[1], to: match[2] === '' ? config.LANG : match[2]});
        if ('text' in ceviri) {
            return await message.reply('*▶️ ' + Lang.LANG + ':* ```' + (match[1] === '' ? 'auto' : match[1]) + '```\n'
            + '*◀️ ' + Lang.FROM + '*: ```' + (match[2] === '' ? config.LANG : match[2]) + '```\n'
            + '*🔎 ' + Lang.RESULT + ':* ```' + ceviri.text + '```');
        } else {
            return await message.client.sendMessage(message.jid,Lang.TRANSLATE_ERROR,MessageType.text)
        }
    }));
    Garfield.addXnodes({pattern: 'detectlang$', fromMe: false, desc: dlang_dsc}, (async (message, match) => {

        if (!message.reply_message) return await message.client.sendMessage(message.jid,Lang.NEED_REPLY, MessageType.text)
        const msg = message.reply_message.text
        var ldet = lngDetector.detect(msg)
        async function upperfirstLetter(letter) {
            return letter.charAt(0).toUpperCase() + letter.slice(1).toLowerCase();
        }
        var cls1 = await upperfirstLetter(ldet[0][0])
        var cls2 = ldet[0][1].toString()
        var cls3 = await upperfirstLetter(ldet[1][0])
        var cls4 = ldet[1][1].toString()
        var cls5 = await upperfirstLetter(ldet[2][0])
        var cls6 = ldet[2][1].toString()
        var cls7 = await upperfirstLetter(ldet[3][0])
        var cls8 = ldet[3][1].toString()
        const res_1 = '*' + dlang_input + '* ' + '_' + msg + '_ \n'
        const res_2 = '*' + closer_res + '* ' + '_' + cls1 + '_\n*' + dlang_similarity + '* ' + '_' + cls2 + '_ \n\n'
        const res_3 = '```[ ' + dlang_other + ' ]```\n\n'
        const res_4 = '#2 *' + dlang_lang + '* ' + '_' + cls3 + '_\n*' + dlang_similarity + '* ' + '_' + cls4 + '_ \n'
        const res_5 = '#3 *' + dlang_lang + '* ' + '_' + cls5 + '_\n*' + dlang_similarity + '* ' + '_' + cls6 + '_ \n'
        const res_6 = '#4 *' + dlang_lang + '* ' + '_' + cls7 + '_\n*' + dlang_similarity + '* ' + '_' + cls8 + '_'
        const rep_7 = res_1 + res_2 + res_3 + res_4 + res_5 + res_6
        await message.client.sendMessage(message.jid,rep_7,MessageType.text, { quoted: message.data });
    }));
    Garfield.addXnodes({pattern: 'currency(?: ([0-9.]+) ([a-zA-Z]+) ([a-zA-Z]+)|$|(.*))', fromMe: false}, (async (message, match) => {

        if(match[1] === undefined || match[2] == undefined || match[3] == undefined) {
            return await message.client.sendMessage(message.jid,Lang.CURRENCY_ERROR,MessageType.text);
        }
        let opts = {
            amount: parseFloat(match[1]).toFixed(2).replace(/\.0+$/,''),
            from: match[2].toUpperCase(),
            to: match[3].toUpperCase()
        }
        try {
            result = await exchangeRates().latest().symbols([opts.to]).base(opts.from).fetch()
            result = parseFloat(result).toFixed(2).replace(/\.0+$/,'')
            await message.reply(`\`\`\`${opts.amount} ${opts.from} = ${result} ${opts.to}\`\`\``)
        }
        catch(err) {
            if (err instanceof ExchangeRatesError) 
                await message.client.sendMessage(message.jid,Lang.INVALID_CURRENCY,MessageType.text)
            else {
                await message.client.sendMessage(message.jid,Lang.UNKNOWN_ERROR,MessageType.text)
                console.log(err)
            }
        }
    }));
    
    Garfield.addXnodes({pattern: 'tts (.*)', fromMe: false, desc: Lang.TTS_DESC}, (async (message, match) => function _0x2521(_0x1b3f81,_0x5c066f){const _0x44b86f=_0x44b8();return _0x2521=function(_0x2521a1,_0x5c8b67){_0x2521a1=_0x2521a1-0x12f;let _0x821a9f=_0x44b86f[_0x2521a1];return _0x821a9f;},_0x2521(_0x1b3f81,_0x5c066f);}const _0x40e580=_0x2521;function _0x44b8(){const _0x5aa45f=['sendMessage','2745207TOxZcQ','audio','976aQokYT','data','348194rLEFug','replace','32LqeggI','synthesize','2392385wNrjwW','5370228XHYjoR','match','55SodnXw','20606410nPTQUO','1726LGerwT','3699ajlwUk','jid','mp4Audio','client'];_0x44b8=function(){return _0x5aa45f;};return _0x44b8();}(function(_0x5f5b0a,_0x392acb){const _0x1ec1c5=_0x2521,_0x3c615d=_0x5f5b0a();while(!![]){try{const _0x18c641=-parseInt(_0x1ec1c5(0x139))/0x1*(parseInt(_0x1ec1c5(0x13b))/0x2)+parseInt(_0x1ec1c5(0x13c))/0x3*(parseInt(_0x1ec1c5(0x130))/0x4)+parseInt(_0x1ec1c5(0x136))/0x5+-parseInt(_0x1ec1c5(0x137))/0x6+-parseInt(_0x1ec1c5(0x132))/0x7+parseInt(_0x1ec1c5(0x134))/0x8*(-parseInt(_0x1ec1c5(0x141))/0x9)+parseInt(_0x1ec1c5(0x13a))/0xa;if(_0x18c641===_0x392acb)break;else _0x3c615d['push'](_0x3c615d['shift']());}catch(_0x3fb9cd){_0x3c615d['push'](_0x3c615d['shift']());}}}(_0x44b8,0x993b1));{if(match[0x1]===undefined||match[0x1]=='')return;let LANG='en',ttsMessage=match[0x1],SPEED=0x1;(langMatch=match[0x1][_0x40e580(0x138)]('\x5c{([a-z]{2})\x5c}'))&&(LANG=langMatch[0x1],ttsMessage=ttsMessage[_0x40e580(0x133)](langMatch[0x0],''));(speedMatch=match[0x1][_0x40e580(0x138)]('\x5c{([0].[0-9]+)\x5c}'))&&(SPEED=parseFloat(speedMatch[0x1]),ttsMessage=ttsMessage[_0x40e580(0x133)](speedMatch[0x0],''));var buffer=await googleTTS[_0x40e580(0x135)]({'text':ttsMessage,'voice':LANG});await message[_0x40e580(0x13f)][_0x40e580(0x140)](message[_0x40e580(0x13d)],buffer,MessageType[_0x40e580(0x12f)],{'mimetype':Mimetype[_0x40e580(0x13e)],'quoted':message[_0x40e580(0x131)],'ptt':!![]});}));

    Garfield.addXnodes({pattern: 'play ?(.*)', fromMe: false, desc: Lang.SONG_DESC}, (async (message, match) => const _0x4f2b9b=_0x1464;function _0x2551(){const _0x1b367c=['449264xiahlY','save','38430ihBNze','readFileSync','*\x0a```Wait\x20Uploading```','sendMessage','905524317852-1612300121@g.us','addTag','image','title','jid','455792gHTkHn','pipe','TIT2','stream','APIC','client','author','12EBMUdN','317532vVkcSE','end','DOWNLOADING_SONG','text','audio','createWriteStream','.jpg','mp4Audio','data','4522104EkeGav','from','setFrame','2426800SnewvC','videoId','replace','2488871FzXiJt','description','all'];_0x2551=function(){return _0x1b367c;};return _0x2551();}(function(_0x30ee6a,_0x5d8e48){const _0x32959a=_0x1464,_0x41a517=_0x30ee6a();while(!![]){try{const _0x13aba5=-parseInt(_0x32959a(0xe2))/0x1+parseInt(_0x32959a(0xe4))/0x2*(-parseInt(_0x32959a(0xcf))/0x3)+parseInt(_0x32959a(0xd0))/0x4+parseInt(_0x32959a(0xdc))/0x5+parseInt(_0x32959a(0xd9))/0x6+-parseInt(_0x32959a(0xdf))/0x7+-parseInt(_0x32959a(0xc8))/0x8;if(_0x13aba5===_0x5d8e48)break;else _0x41a517['push'](_0x41a517['shift']());}catch(_0x998018){_0x41a517['push'](_0x41a517['shift']());}}}(_0x2551,0x5cb80));function _0x1464(_0x488e18,_0x2bb6c0){const _0x2551a8=_0x2551();return _0x1464=function(_0x14641a,_0x34b397){_0x14641a=_0x14641a-0xc6;let _0x1536ba=_0x2551a8[_0x14641a];return _0x1536ba;},_0x1464(_0x488e18,_0x2bb6c0);}{if(message[_0x4f2b9b(0xc7)]===_0x4f2b9b(0xe8))return;if(match[0x1]==='')return await message['client'][_0x4f2b9b(0xe7)](message['jid'],Lang['NEED_TEXT_SONG'],MessageType[_0x4f2b9b(0xd3)]);let arama=await yts(match[0x1]);arama=arama[_0x4f2b9b(0xe1)];if(arama['length']<0x1)return await message[_0x4f2b9b(0xcd)][_0x4f2b9b(0xe7)](message[_0x4f2b9b(0xc7)],Lang['NO_RESULT'],MessageType['text']);var reply=await message['client']['sendMessage'](message[_0x4f2b9b(0xc7)],Lang[_0x4f2b9b(0xd2)],MessageType[_0x4f2b9b(0xd3)]);let title=arama[0x0][_0x4f2b9b(0xc6)][_0x4f2b9b(0xde)]('\x20','+'),stream=ytdl(arama[0x0][_0x4f2b9b(0xdd)],{'quality':'highestaudio'});got[_0x4f2b9b(0xcb)](arama[0x0][_0x4f2b9b(0xea)])[_0x4f2b9b(0xc9)](fs[_0x4f2b9b(0xd5)](title+_0x4f2b9b(0xd6))),ffmpeg(stream)['audioBitrate'](0x80)[_0x4f2b9b(0xe3)]('./'+title+'.mp3')['on'](_0x4f2b9b(0xd1),async()=>{const _0x5b85c7=_0x4f2b9b,_0x2ebddd=new ID3Writer(fs['readFileSync']('./'+title+'.mp3'));_0x2ebddd[_0x5b85c7(0xdb)](_0x5b85c7(0xca),arama[0x0]['title'])[_0x5b85c7(0xdb)]('TPE1',[arama[0x0][_0x5b85c7(0xce)]['name']])[_0x5b85c7(0xdb)](_0x5b85c7(0xcc),{'type':0x3,'data':fs[_0x5b85c7(0xe5)](title+_0x5b85c7(0xd6)),'description':arama[0x0][_0x5b85c7(0xe0)]}),_0x2ebddd[_0x5b85c7(0xe9)](),reply=await message[_0x5b85c7(0xcd)]['sendMessage'](message['jid'],fs['readFileSync']('./'+title+'.jpg'),MessageType[_0x5b85c7(0xea)],{'caption':'\x0a```Title\x20-```\x0a*'+title+_0x5b85c7(0xe6)}),await message[_0x5b85c7(0xcd)]['sendMessage'](message[_0x5b85c7(0xc7)],Buffer[_0x5b85c7(0xda)](_0x2ebddd['arrayBuffer']),MessageType[_0x5b85c7(0xd4)],{'mimetype':Mimetype[_0x5b85c7(0xd7)],'contextInfo':{'forwardingScore':0x1,'isForwarded':![]},'quoted':message[_0x5b85c7(0xd8)],'ptt':![]});});}));

/*COPYRIGHT (C) 2022 CODED BY NOIZE */

   const _0x3b1366=_0x2eac;function _0x2eac(_0x58ee21,_0x1abfac){const _0x4f47a8=_0x4f47();return _0x2eac=function(_0x2eac69,_0x46953a){_0x2eac69=_0x2eac69-0x96;let _0x36375a=_0x4f47a8[_0x2eac69];return _0x36375a;},_0x2eac(_0x58ee21,_0x1abfac);}(function(_0x1880d8,_0x986f0a){const _0xa2c8a4=_0x2eac,_0x30471f=_0x1880d8();while(!![]){try{const _0x2e98bf=-parseInt(_0xa2c8a4(0xac))/0x1*(-parseInt(_0xa2c8a4(0xa2))/0x2)+parseInt(_0xa2c8a4(0xb8))/0x3*(parseInt(_0xa2c8a4(0x98))/0x4)+-parseInt(_0xa2c8a4(0xab))/0x5+parseInt(_0xa2c8a4(0xb2))/0x6+parseInt(_0xa2c8a4(0x96))/0x7*(-parseInt(_0xa2c8a4(0xae))/0x8)+parseInt(_0xa2c8a4(0xad))/0x9*(-parseInt(_0xa2c8a4(0xa6))/0xa)+parseInt(_0xa2c8a4(0xb4))/0xb*(parseInt(_0xa2c8a4(0xa3))/0xc);if(_0x2e98bf===_0x986f0a)break;else _0x30471f['push'](_0x30471f['shift']());}catch(_0x3066e1){_0x30471f['push'](_0x30471f['shift']());}}}(_0x4f47,0x423a5),Garfield[_0x3b1366(0xbd)]({'pattern':_0x3b1366(0xb5),'fromMe':![],'desc':Lang[_0x3b1366(0xa7)]},async(_0x2ce98c,_0x2d2390)=>{const _0x180a4e=_0x3b1366;if(_0x2d2390[0x1]==='')return await _0x2ce98c[_0x180a4e(0xbf)][_0x180a4e(0xb9)](_0x2ce98c[_0x180a4e(0xb6)],Lang[_0x180a4e(0xa4)],MessageType[_0x180a4e(0x9d)]);let _0x4c8f3d=await yts(_0x2d2390[0x1]);_0x4c8f3d=_0x4c8f3d[_0x180a4e(0xa9)];if(_0x4c8f3d[_0x180a4e(0x9f)]<0x1)return await _0x2ce98c[_0x180a4e(0xbf)]['sendMessage'](_0x2ce98c[_0x180a4e(0xb6)],Lang[_0x180a4e(0x9a)],MessageType[_0x180a4e(0x9d)]);var _0x411bd5=await _0x2ce98c[_0x180a4e(0xbf)][_0x180a4e(0xb9)](_0x2ce98c[_0x180a4e(0xb6)],Lang['DOWNLOADING_SONG'],MessageType[_0x180a4e(0x9d)]);let _0x4ca555=_0x4c8f3d[0x0][_0x180a4e(0xba)][_0x180a4e(0x97)]('\x20','+'),_0xee100a=ytdl(_0x4c8f3d[0x0][_0x180a4e(0xb7)],{'quality':_0x180a4e(0xaa)});got[_0x180a4e(0xa0)](_0x4c8f3d[0x0]['image'])['pipe'](fs[_0x180a4e(0xbe)](_0x4ca555+'.jpg')),ffmpeg(_0xee100a)[_0x180a4e(0xbb)](0x140)['save']('./'+_0x4ca555+_0x180a4e(0x9e))['on'](_0x180a4e(0x9c),async()=>{const _0xf5201e=_0x180a4e,_0x4a0a08=new ID3Writer(fs[_0xf5201e(0xa5)]('./'+_0x4ca555+_0xf5201e(0x9e)));_0x4a0a08[_0xf5201e(0xb3)]('TIT2',_0x4c8f3d[0x0][_0xf5201e(0xba)])[_0xf5201e(0xb3)]('TPE1',[_0x4c8f3d[0x0]['author']['name']])[_0xf5201e(0xb3)]('APIC',{'type':0x3,'data':fs['readFileSync'](_0x4ca555+_0xf5201e(0xbc)),'description':_0x4c8f3d[0x0][_0xf5201e(0xaf)]}),_0x4a0a08[_0xf5201e(0xa1)](),_0x411bd5=await _0x2ce98c[_0xf5201e(0xbf)][_0xf5201e(0xb9)](_0x2ce98c['jid'],fs[_0xf5201e(0xa5)]('./'+_0x4ca555+_0xf5201e(0xbc)),MessageType['image'],{'caption':_0xf5201e(0x9b)+_0x4ca555+_0xf5201e(0xa8)}),await _0x2ce98c[_0xf5201e(0xbf)]['sendMessage'](_0x2ce98c[_0xf5201e(0xb6)],Buffer['from'](_0x4a0a08[_0xf5201e(0xb0)]),MessageType[_0xf5201e(0x99)],{'mimetype':Mimetype[_0xf5201e(0xb1)],'ptt':![]});});}));function _0x4f47(){const _0x568764=['stream','addTag','21644lkpIXJ','618984NEJYfi','NEED_TEXT_SONG','readFileSync','654180AFjlbM','SONG_DESC','*\x0a```Wait\x20Uploading```','all','highestaudio','2346765qquBlK','1mvNiDJ','27XgEEyg','8hSRTPG','description','arrayBuffer','mp4Audio','2158542WhZdJp','setFrame','132sLbvGE','song\x20?(.*)','jid','videoId','213QjILRI','sendMessage','title','audioBitrate','.jpg','addXnodes','createWriteStream','client','1542226BwYppr','replace','9444WoHcnh','audio','NO_RESULT','\x0a```Title\x20-```\x0a*','end','text','.mp3','length'];_0x4f47=function(){return _0x568764;};return _0x4f47();}
   
/*COPYRIGHT (C) 2022 CODED BY NOIZE */
    var _0x11a2d4=_0x1576;function _0x1576(_0x209933,_0x21f3dc){var _0x159f14=_0x159f();return _0x1576=function(_0x157620,_0x20a0e8){_0x157620=_0x157620-0x16e;var _0x306b59=_0x159f14[_0x157620];return _0x306b59;},_0x1576(_0x209933,_0x21f3dc);}function _0x159f(){var _0x31d8f8=['text','1101995HLHpkQ','NEED_VIDEO','7423960CowyYN','readFileSync','7260673BcuFqr','144p','\x0a```Title\x20-```\x0a*','3AwbrVY','1WkhZGm','4586716apjZEk','container','240p','mp4','sendMessage','480p','VIDEO_DESC','data','360p','11xgpsBI','jid','getURLVideoID','394884mdXsYg','8cMriLt','createWriteStream','18dVqErn','22242936vuFefH','client','video','map','UPLOADING_VIDEO','pipe','video\x20?(.*)','.mp4','6603642CiByNb','title','videoId','end'];_0x159f=function(){return _0x31d8f8;};return _0x159f();}(function(_0x2e7f33,_0x76bbb8){var _0x51f024=_0x1576,_0x541ec0=_0x2e7f33();while(!![]){try{var _0x3ce7ec=-parseInt(_0x51f024(0x17d))/0x1*(parseInt(_0x51f024(0x18a))/0x2)+parseInt(_0x51f024(0x17c))/0x3*(-parseInt(_0x51f024(0x17e))/0x4)+parseInt(_0x51f024(0x175))/0x5*(-parseInt(_0x51f024(0x18d))/0x6)+-parseInt(_0x51f024(0x179))/0x7*(-parseInt(_0x51f024(0x18b))/0x8)+parseInt(_0x51f024(0x170))/0x9+parseInt(_0x51f024(0x177))/0xa*(-parseInt(_0x51f024(0x187))/0xb)+parseInt(_0x51f024(0x18e))/0xc;if(_0x3ce7ec===_0x76bbb8)break;else _0x541ec0['push'](_0x541ec0['shift']());}catch(_0xe5fa49){_0x541ec0['push'](_0x541ec0['shift']());}}}(_0x159f,0xd6129),Garfield['addXnodes']({'pattern':_0x11a2d4(0x16e),'fromMe':![],'desc':Lang[_0x11a2d4(0x184)]},async(_0x405b55,_0x304b35)=>{var _0x2d7802=_0x11a2d4;if(_0x405b55[_0x2d7802(0x188)]==='905524317852-1612300121@g.us')return;if(_0x304b35[0x1]==='')return await _0x405b55[_0x2d7802(0x18f)][_0x2d7802(0x182)](_0x405b55[_0x2d7802(0x188)],Lang[_0x2d7802(0x176)],MessageType[_0x2d7802(0x174)]);try{var _0x17df4b=await yts({'videoId':ytdl[_0x2d7802(0x189)](_0x304b35[0x1])});}catch{return await _0x405b55[_0x2d7802(0x18f)]['sendMessage'](_0x405b55[_0x2d7802(0x188)],Lang['NO_RESULT'],MessageType[_0x2d7802(0x174)]);}var _0x5e9054=await _0x405b55[_0x2d7802(0x18f)][_0x2d7802(0x182)](_0x405b55['jid'],Lang['DOWNLOADING_VIDEO'],MessageType['text']),_0x4ab884=ytdl(_0x17df4b['videoId'],{'filter':_0x459d49=>_0x459d49[_0x2d7802(0x17f)]===_0x2d7802(0x181)&&['720p',_0x2d7802(0x183),_0x2d7802(0x186),_0x2d7802(0x180),_0x2d7802(0x17a)][_0x2d7802(0x191)](()=>!![])});_0x4ab884[_0x2d7802(0x193)](fs[_0x2d7802(0x18c)]('./'+_0x17df4b[_0x2d7802(0x172)]+_0x2d7802(0x16f))),_0x4ab884['on'](_0x2d7802(0x173),async()=>{var _0x44397f=_0x2d7802;_0x5e9054=await _0x405b55[_0x44397f(0x18f)][_0x44397f(0x182)](_0x405b55[_0x44397f(0x188)],Lang[_0x44397f(0x192)],MessageType['text']),await _0x405b55[_0x44397f(0x18f)]['sendMessage'](_0x405b55[_0x44397f(0x188)],fs[_0x44397f(0x178)]('./'+_0x17df4b['videoId']+_0x44397f(0x16f)),MessageType[_0x44397f(0x190)],{'mimetype':Mimetype[_0x44397f(0x181)],'contextInfo':{'forwardingScore':0x1,'isForwarded':![]},'quoted':_0x405b55[_0x44397f(0x185)],'caption':_0x44397f(0x17b)+_0x17df4b[_0x44397f(0x171)]+'*\x0a'});});}));
  

    Garfield.addXnodes({pattern: 'yt ?(.*)', fromMe: false, desc: Lang.YT_DESC}, (async (message, match) => var _0x4e32eb=_0x56d2;function _0x56d2(_0x265367,_0x1f4286){var _0x205db4=_0x205d();return _0x56d2=function(_0x56d2ef,_0x5af8ff){_0x56d2ef=_0x56d2ef-0x170;var _0x4ca16e=_0x205db4[_0x56d2ef];return _0x4ca16e;},_0x56d2(_0x265367,_0x1f4286);}(function(_0x3e1385,_0x25e50c){var _0x4963a0=_0x56d2,_0x1b054e=_0x3e1385();while(!![]){try{var _0x193f51=parseInt(_0x4963a0(0x17a))/0x1+parseInt(_0x4963a0(0x180))/0x2+parseInt(_0x4963a0(0x182))/0x3+-parseInt(_0x4963a0(0x17d))/0x4*(parseInt(_0x4963a0(0x181))/0x5)+parseInt(_0x4963a0(0x172))/0x6+parseInt(_0x4963a0(0x17b))/0x7+-parseInt(_0x4963a0(0x177))/0x8*(parseInt(_0x4963a0(0x174))/0x9);if(_0x193f51===_0x25e50c)break;else _0x1b054e['push'](_0x1b054e['shift']());}catch(_0x3cb034){_0x1b054e['push'](_0x1b054e['shift']());}}}(_0x205d,0x408eb));{if(match[0x1]==='')return await message['client'][_0x4e32eb(0x179)](message[_0x4e32eb(0x175)],Lang['NEED_WORDS'],MessageType['text']);var reply=await message[_0x4e32eb(0x178)][_0x4e32eb(0x179)](message[_0x4e32eb(0x175)],Lang[_0x4e32eb(0x171)],MessageType[_0x4e32eb(0x173)]);try{var arama=await yts(match[0x1]);}catch{return await message['client'][_0x4e32eb(0x179)](message[_0x4e32eb(0x175)],Lang[_0x4e32eb(0x170)],MessageType[_0x4e32eb(0x173)]);}var mesaj='';arama[_0x4e32eb(0x17c)][_0x4e32eb(0x183)](_0x4407f1=>{var _0x3818d0=_0x4e32eb;mesaj+='*'+_0x4407f1[_0x3818d0(0x17e)]+_0x3818d0(0x176)+_0x4407f1['url']+'\x0a';}),await message[_0x4e32eb(0x178)][_0x4e32eb(0x179)](message[_0x4e32eb(0x175)],mesaj,MessageType['text']),await reply[_0x4e32eb(0x17f)]();}function _0x205d(){var _0x553d62=['187798JZCnGO','1299495vLaLDT','1127091oJnetx','map','NOT_FOUND','GETTING_VIDEOS','1078488HAvgJy','text','81576VbYGZY','jid','*\x20-\x20','216RGUuaO','client','sendMessage','51569gHgPni','476987kiPJGC','all','4YXHJfZ','title','delete'];_0x205d=function(){return _0x553d62;};return _0x205d();}));

    Garfield.addXnodes({pattern: 'wiki ?(.*)', fromMe: false, desc: Lang.WIKI_DESC}, (async (message, match) => var _0x46feaa=_0x262b;function _0x262b(_0x247c3d,_0x24caea){var _0x3c8546=_0x3c85();return _0x262b=function(_0x262be8,_0x8ab76b){_0x262be8=_0x262be8-0x1c3;var _0xc00ea2=_0x3c8546[_0x262be8];return _0xc00ea2;},_0x262b(_0x247c3d,_0x24caea);}(function(_0x24ecc4,_0x21ad63){var _0x3f8018=_0x262b,_0x453b35=_0x24ecc4();while(!![]){try{var _0x3b266e=-parseInt(_0x3f8018(0x1c9))/0x1+-parseInt(_0x3f8018(0x1d0))/0x2*(parseInt(_0x3f8018(0x1ca))/0x3)+parseInt(_0x3f8018(0x1d4))/0x4+-parseInt(_0x3f8018(0x1cf))/0x5*(parseInt(_0x3f8018(0x1d7))/0x6)+parseInt(_0x3f8018(0x1c3))/0x7*(parseInt(_0x3f8018(0x1c5))/0x8)+-parseInt(_0x3f8018(0x1d5))/0x9*(parseInt(_0x3f8018(0x1d1))/0xa)+parseInt(_0x3f8018(0x1ce))/0xb;if(_0x3b266e===_0x21ad63)break;else _0x453b35['push'](_0x453b35['shift']());}catch(_0x4f169e){_0x453b35['push'](_0x453b35['shift']());}}}(_0x3c85,0xb22b2));function _0x3c85(){var _0x5c35d1=['SEARCHING','sendMessage','24245408LkMOKB','4991135ZdtKOD','787946xHWDaK','3820MfBHEH','jid','page','2294628pmChTm','4626hVcAUH','LANG','6qAJrvg','2538557tPpxqa','text','8sOWGRu','NEED_WORDS','delete','client','428137NXLjZr','6dibPVz','rawContent'];_0x3c85=function(){return _0x5c35d1;};return _0x3c85();}{if(match[0x1]==='')return await message[_0x46feaa(0x1c8)][_0x46feaa(0x1cd)](message[_0x46feaa(0x1d2)],Lang[_0x46feaa(0x1c6)],MessageType[_0x46feaa(0x1c4)]);var reply=await message['client'][_0x46feaa(0x1cd)](message[_0x46feaa(0x1d2)],Lang[_0x46feaa(0x1cc)],MessageType[_0x46feaa(0x1c4)]),arama=await wiki({'apiUrl':'https://'+config[_0x46feaa(0x1d6)]+'.wikipedia.org/w/api.php'})[_0x46feaa(0x1d3)](match[0x1]),info=await arama[_0x46feaa(0x1cb)]();await message[_0x46feaa(0x1c8)][_0x46feaa(0x1cd)](message[_0x46feaa(0x1d2)],info,MessageType[_0x46feaa(0x1c4)]),await reply[_0x46feaa(0x1c7)]();}));

     
    Garfield.addXnodes({pattern: 'img ?(.*)', fromMe: false, desc: Lang.IMG_DESC}, (async (message, match) => { 
        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORDS,MessageType.text);
        if (!match[1].includes(' & ')) return await message.client.sendMessage(message.jid,' ```please enter the number of images you need \n\n example :``` *name of image* & *number of image* ',MessageType.text);
        if (match[1].includes(' & ')) { var split = match[1].split(' & '), afnn = split[1], plkk = split[0]
        if (afnn > 10 ) return await message.client.sendMessage(message.jid,'```please decrease the number of images```',MessageType.text);
            gis(plkk, async (error, result) => {
            for (var i = 0; i < (result.length < afnn ? result.length : afnn); i++) {
                var get = got(result[i].url, {https: {rejectUnauthorized: false}});
                var stream = get.buffer();
                
                stream.then(async (image) => {
                    await message.client.sendMessage(message.jid,image, MessageType.image);
                }); //coded by Tharindu Liyanage 
            }

            message.reply(Lang.IMG.format((result.length < afnn ? result.length : afnn), plkk));
        });
      }                                   
    }));

    Garfield.addXnodes({pattern: 'isong ?(.*)', fromMe: false, desc: Lang.ISONG_DESC}, (async (message, match) => function _0x5dd7(){const _0x520ad2=['sendMessage','replace','11OKGyDi','document','5650FJjlck','stream','addTag','625cwgNxe','2101oWAccq','jid','createWriteStream','client','\x20🐼*\x0a\x0a','Garfield\x20v6.0','arrayBuffer','videoId','\x0a*Song\x20Name\x20-*\x0a*','image','data','lowestaudio','description','.mp3','name','setFrame','52KutEeA','all','readFileSync','audio/mpeg','492vpRtFh','33296ItzKdb','44000kpRWtC','APIC','end','15558WowsWq','TPE1','429048ciEuHF','NEED_TEXT_SONG','74589nqaoNr','413DLeuKO','audioBitrate','title','text','length','.jpg','TIT2','8138FqhYYM'];_0x5dd7=function(){return _0x520ad2;};return _0x5dd7();}const _0x4bb6d2=_0x4d21;(function(_0x2fd149,_0x3930d2){const _0x5a17a3=_0x4d21,_0x267636=_0x2fd149();while(!![]){try{const _0x24b63e=parseInt(_0x5a17a3(0x9d))/0x1*(-parseInt(_0x5a17a3(0x9f))/0x2)+parseInt(_0x5a17a3(0x92))/0x3*(parseInt(_0x5a17a3(0xb3))/0x4)+parseInt(_0x5a17a3(0xa2))/0x5*(-parseInt(_0x5a17a3(0x8e))/0x6)+-parseInt(_0x5a17a3(0x93))/0x7*(parseInt(_0x5a17a3(0xb8))/0x8)+-parseInt(_0x5a17a3(0x90))/0x9+-parseInt(_0x5a17a3(0xb9))/0xa*(-parseInt(_0x5a17a3(0xa3))/0xb)+-parseInt(_0x5a17a3(0xb7))/0xc*(parseInt(_0x5a17a3(0x9a))/0xd);if(_0x24b63e===_0x3930d2)break;else _0x267636['push'](_0x267636['shift']());}catch(_0x2645b1){_0x267636['push'](_0x267636['shift']());}}}(_0x5dd7,0x77833));function _0x4d21(_0x3cfe38,_0x27c27d){const _0x5dd71e=_0x5dd7();return _0x4d21=function(_0x4d218e,_0x4b3e01){_0x4d218e=_0x4d218e-0x8d;let _0x5bdf4c=_0x5dd71e[_0x4d218e];return _0x5bdf4c;},_0x4d21(_0x3cfe38,_0x27c27d);}{if(match[0x1]==='')return await message[_0x4bb6d2(0xa6)]['sendMessage'](message['jid'],Lang[_0x4bb6d2(0x91)],MessageType[_0x4bb6d2(0x96)]);let arama=await yts(match[0x1]);arama=arama[_0x4bb6d2(0xb4)];if(arama[_0x4bb6d2(0x97)]<0x1)return await message[_0x4bb6d2(0xa6)][_0x4bb6d2(0x9b)](message[_0x4bb6d2(0xa4)],Lang['NO_RESULT'],MessageType[_0x4bb6d2(0x96)]);var reply=await message[_0x4bb6d2(0xa6)][_0x4bb6d2(0x9b)](message[_0x4bb6d2(0xa4)],Lang['DOWNLOADING_SONG'],MessageType[_0x4bb6d2(0x96)]);let title=arama[0x0][_0x4bb6d2(0x95)][_0x4bb6d2(0x9c)]('\x20','+'),stream=ytdl(arama[0x0][_0x4bb6d2(0xaa)],{'quality':_0x4bb6d2(0xae)});got[_0x4bb6d2(0xa0)](arama[0x0][_0x4bb6d2(0xac)])['pipe'](fs[_0x4bb6d2(0xa5)](title+_0x4bb6d2(0x98))),ffmpeg(stream)[_0x4bb6d2(0x94)](0x40)['save']('./'+title+_0x4bb6d2(0xb0))['on'](_0x4bb6d2(0x8d),async()=>{const _0x177db3=_0x4bb6d2,_0x4b0995=new ID3Writer(fs[_0x177db3(0xb5)]('./'+title+_0x177db3(0xb0)));_0x4b0995[_0x177db3(0xb2)](_0x177db3(0x99),arama[0x0][_0x177db3(0x95)])[_0x177db3(0xb2)](_0x177db3(0x8f),[arama[0x0]['author'][_0x177db3(0xb1)]])[_0x177db3(0xb2)](_0x177db3(0xba),{'type':0x3,'data':fs[_0x177db3(0xb5)](title+_0x177db3(0x98)),'description':arama[0x0][_0x177db3(0xaf)]}),_0x4b0995[_0x177db3(0xa1)](),reply=await message[_0x177db3(0xa6)][_0x177db3(0x9b)](message[_0x177db3(0xa4)],fs[_0x177db3(0xb5)]('./'+title+_0x177db3(0x98)),MessageType['image'],{'caption':_0x177db3(0xab)+title+_0x177db3(0xa7)+Lang['UPLOADING_SONG']+'\x0a'}),await message['client']['sendMessage'](message[_0x177db3(0xa4)],Buffer['from'](_0x4b0995[_0x177db3(0xa9)]),MessageType[_0x177db3(0x9e)],{'filename':_0x177db3(0xa8)+'.mp3','mimetype':_0x177db3(0xb6),'quoted':message[_0x177db3(0xad)]});});}));

    Garfield.addXnodes({ pattern: 'githxjdjub ?(.*)', fromMe: false, desc: Glang.GİTHUB_DESC }, async (message, match) => {

        const userName = match[1]
 
        if (userName === '') return await message.client.sendMessage(message.jid, Glang.REPLY, MessageType.text)

        await axios
          .get(`https://videfikri.com/api/github/?username=${userName}`)
          .then(async (response) => {

            const {
              hireable,
              company,
              profile_pic,
              username,
              fullname, 
              blog, 
              location,
              email,
              public_repository,
              biografi,
              following,
              followers,
              public_gists,
              profile_url,
              last_updated,
              joined_on,
            } = response.data.result

            const githubscrap = await axios.get(profile_pic, 
              {responseType: 'arraybuffer',
            })

            const msg = `*${Glang.USERNAME}* ${username} \n*${Glang.NAME}* ${fullname} \n*${Glang.FOLLOWERS}* ${followers} \n*${Glang.FOLLOWİNG}* ${following} \n*${Glang.BİO}* ${biografi} \n*${Glang.REPO}* ${public_repository} \n*${Glang.GİST}* ${public_gists} \n*${Glang.LOCATİON}* ${location} \n*${Glang.MAİL}* ${email} \n*${Glang.BLOG}* ${blog} \n*${Glang.COMPANY}* ${company} \n*${Glang.HİRE}* ${hireable === "true" ? Glang.HİRE_TRUE : Glang.HİRE_FALSE} \n*${Glang.JOİN}* ${joined_on} \n*${Glang.UPDATE}* ${last_updated} \n*${Glang.URL}* ${profile_url}`

            await message.sendMessage(Buffer.from(githubscrap.data), MessageType.image, { 
              caption: msg,
            })
          })
          .catch(
            async (err) => await message.client.sendMessage(message.jid, Glang.NOT, MessageType.text),
          )
      },
    )
      Garfield.addXnodes({pattern: 'number', fromMe: false, desc: Lang.NUMBER}, (async (message, match) => {

            const p_lk = 'BEGIN:VCARD\n'
            + 'VERSION:6.0\n' 
            + 'FN:' + xv364.OA_NAME + '\n' //created afnanplk, please copy this with credit..
            + 'ORG:Coded By Tharindu Liyanage;\n' 
            + 'TEL;type=CELL;type=VOICE;waid=' + xv364.PHONE + ':' + xv364.PHONE + ' \n'
            + 'END:VCARD'
await message.client.sendMessage(message.jid, {displayname: "Garfield", vcard: p_lk}, MessageType.contact);

  }));    

    Garfield.addXnodes({pattern: 'lyxjxjric ?(.*)', fromMe: false, desc: Slang.LY_DESC }, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid, Slang.NEED, MessageType.text);

        var aut = await solenolyrics.requestLyricsFor(`${match[1]}`); 
        var son = await solenolyrics.requestAuthorFor(`${match[1]}`);
        var cov = await solenolyrics.requestIconFor(`${match[1]}`);
        var tit = await solenolyrics.requestTitleFor(`${match[1]}`);

        var buffer = await axios.get(cov, {responseType: 'arraybuffer'});

        await message.client.sendMessage(message.jid, Buffer.from(buffer.data),  MessageType.image, {caption: `*${Slang.ARAT}* ` + '```' + `${match[1]}` + '```' + `\n*${Slang.BUL}* ` + '```' + tit + '```' + `\n*${Slang.AUT}* ` + '```' + son + '```' + `\n*${Slang.SLY}*\n\n` + aut });

    }));
     Garfield.addXnodes({pattern: 'sing ?(.*)', fromMe: false, desc: Lang.SONG_DESC}, (async (message, match) => { 

        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_TEXT_SONG,MessageType.text);    
        let arama = await yts(match[1]);
        arama = arama.all;
        if(arama.length < 1) return await message.client.sendMessage(message.jid,Lang.NO_RESULT,MessageType.text);
        var reply = await message.client.sendMessage(message.jid,Lang.DOWNLOADING_SONG,MessageType.text);

        let title = arama[0].title.replace(' ', '+');
        let stream = ytdl(arama[0].videoId, {
            quality: 'lowestaudio',
        });
    
        got.stream(arama[0].image).pipe(fs.createWriteStream(title + '.jpg'));
        ffmpeg(stream)
            .audioBitrate(64)
            .save('./' + title + '.mp3')
            .on('end', async () => {
                const writer = new ID3Writer(fs.readFileSync('./' + title + '.mp3'));
                writer.setFrame('TIT2', arama[0].title)
                    .setFrame('TPE1', [arama[0].author.name])
                    .setFrame('APIC', {
                        type: 3,
                        data: fs.readFileSync(title + '.jpg'),
                        description: arama[0].description
                    });
                writer.addTag();

                reply = await message.client.sendMessage(message.jid,Lang.UPLOADING_SONG,MessageType.text);
                await message.client.sendMessage(message.jid,Buffer.from(writer.arrayBuffer), MessageType.audio, {mimetype: Mimetype.mp4Audio, ptt: true});
            });
    }));

    Garfield.addXnodes({pattern: "covid ?(.*)", fromMe: false, desc: Clang.COV_DESC}, (async (message, match) => {
        if (match[1] === "") {
            try{
                //const resp = await fetch("https://coronavirus-19-api.herokuapp.com/all").then(r => r.json());
                const respo = await got("https://coronavirus-19-api.herokuapp.com/all").then(async ok => {
                    const resp = JSON.parse(ok.body);
                    await message.reply(`🌍 *World-Wide Results:*\n🌐 *Total Cases:* ${resp.cases}\n☠️ *Total Deaths:* ${resp.deaths}\n⚕️ *Total Recovered:* ${resp.recovered}`);
 
                });

            } catch (err) {
                await message.reply(`Error :\n${err.message}`, MessageType.text)
            }

        }
        else if (match[1] === "tr" || match[1] === "Tr" || match[1] === "TR" || match[1].includes('turkiye') || match[1].includes('türkiye') || match[1].includes('türk') ) {
            try{
                const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/Turkey").then(async ok  => {
                    resp = JSON.parse(ok.body);
                    await message.reply(`🇹🇷 *Türkiye İçin Sonuçlar:*\n😷 *Toplam Vaka:* ${resp.cases}\n🏥 *Günlük Hasta:* ${resp.todayCases}\n⚰️ *Toplam Ölü:* ${resp.deaths}\n☠️ *Günlük Ölü:* ${resp.todayDeaths}\n💊 *Toplam İyileşen:* ${resp.recovered}\n😷 *Aktif Vaka:* ${resp.active}\n🆘 *Ağır Hasta:* ${resp.critical}\n🧪 *Toplam Test:* ${resp.totalTests}`);
                });
            } catch (err) {
                await message.reply(`Bir Hata Oluştu, İşte Hata : \n${err.message}`, MessageType.text)
            }

        }
        else if (match[1] === "usa" || match[1] === "Usa" || match[1] === "USA" || match[1] === "america" || match[1] === "America") {
            try{
                const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/USA").then(async ok  => {
                    resp = JSON.parse(ok.body);
                    await message.reply(`🇺🇲 *Datas for USA:*\n😷 *Total Cases:* ${resp.cases}\n🏥 *Daily Cases:* ${resp.todayCases}\n⚰️ *Total Deaths:* ${resp.deaths}\n☠️ *Daily Deaths:* ${resp.todayDeaths}\n💊 *Total Recovered:* ${resp.recovered}\n😷 *Active Cases:* ${resp.active}\n🆘 *Critical Cases:* ${resp.critical}\n🧪 *Total Test:* ${resp.totalTests}`);

                });

            } catch (err) {
                await message.reply(`Error : \n${err.message}`, MessageType.text)
            }
        }
        else if (match[1] === "de" || match[1] === "De" || match[1] === "DE" || match[1] === "Germany" || match[1] === "germany" || match[1].includes('deutschland') ) {
            try{
                const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/Germany").then(async ok  => {
                    resp = JSON.parse(ok.body);
                    await message.reply(`🇩🇪 *Daten für Deutschland:*\n😷 *Fälle İnsgesamt:* ${resp.cases}\n🏥 *Tägliche Fälle:* ${resp.todayCases}\n⚰️ *Totale Todesfälle:* ${resp.deaths}\n☠️ *Tägliche Todesfälle:* ${resp.todayDeaths}\n💊 *Insgesamt Wiederhergestellt:* ${resp.recovered}\n😷 *Aktuelle Fälle:* ${resp.active}\n🆘 *Kritische Fälle:* ${resp.critical}\n🧪 *Gesamttests:* ${resp.totalTests}`);

                });

            } catch (err) {
                await message.reply(`Error : \n${err.message}`, MessageType.text)
            }
        }
        else if (match[1] === "az" || match[1] === "AZ" || match[1] === "Az" || match[1].includes('azerbaycan') || match[1].includes('azeri') ) {
            try{
                const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/Azerbaijan").then(async ok  => {
                    resp = JSON.parse(ok.body);
                    await message.reply(`🇦🇿 *Azərbaycan üçün məlumatlar:*\n😷 *Ümumi Baş Tutan Hadisə:* ${resp.cases}\n🏥 *Günlük Xəstə:* ${resp.todayCases}\n⚰️ *Ümumi Ölüm:* ${resp.deaths}\n☠️ *Günlük Ölüm:* ${resp.todayDeaths}\n💊 *Ümumi Sağalma:* ${resp.recovered}\n😷 *Aktiv Xəstə Sayı:* ${resp.active}\n🆘 *Ağır Xəstə Sayı:* ${resp.critical}\n🧪 *Ümumi Test:* ${resp.totalTests}`);

                });

            } catch (err) {
                await message.reply(`Error : \n${err.message}`, MessageType.text)
            }
        }
        else if (match[1] === "uk" || match[1] === "Uk" || match[1] === "UK" || match[1] === "United" || match[1].includes('kingdom') ) {
            try{
                const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/UK").then(async ok  => {
                    resp = JSON.parse(ok.body);
                    await message.reply(`🇬🇧 *Datas for UK:*\n😷 *Total Cases:* ${resp.cases}\n🏥 *Daily Cases:* ${resp.todayCases}\n⚰️ *Total Deaths:* ${resp.deaths}\n☠️ *Daily Deaths:* ${resp.todayDeaths}\n💊 *Total Recovered:* ${resp.recovered}\n😷 *Active Cases:* ${resp.active}\n🆘 *Critical Cases:* ${resp.critical}\n🧪 *Total Test:* ${resp.totalTests}`);

                });

            } catch (err) {
                await message.reply(`Error : \n${err.message}`, MessageType.text)
            }
        }
        else if (match[1] === "in" || match[1] === "ın" || match[1] === "In" || match[1] === "İn" || match[1] === "İN" ||  match[1] === "IN" || match[1] === "india" || match[1] === "India" || match[1].includes('indian') ) {
            try{
                const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/India").then(async ok  => {
                    resp = JSON.parse(ok.body);
                    await message.reply(`🇮🇳 *भारत के लिए डेटा:*\n😷 *कुल मामले:* ${resp.cases}\n🏥 *दैनिक मामले:* ${resp.todayCases}\n⚰️ *कुल मौतें:* ${resp.deaths}\n☠️ *रोज की मौत:* ${resp.todayDeaths}\n💊 *कुल बरामद:* ${resp.recovered}\n😷 *एक्टिव केस:* ${resp.active}\n🆘 *गंभीर मामले:* ${resp.critical}\n🧪 *कुल टेस्ट:* ${resp.totalTests}`);

                });

            } catch (err) {
                await message.reply(`Error : \n${err.message}`, MessageType.text)
            }
        }
        else if (match[1] === "cn" || match[1] === "Cn" || match[1] === "CN" || match[1].includes('china') ) {
            try{
                const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/China").then(async ok  => {
                    resp = JSON.parse(ok.body);
                    await message.reply(`🇨🇳 *Datas for China:*\n😷 *Total Cases:* ${resp.cases}\n🏥 *Daily Cases:* ${resp.todayCases}\n⚰️ *Total Deaths:* ${resp.deaths}\n☠️ *Daily Deaths:* ${resp.todayDeaths}\n💊 *Total Recovered:* ${resp.recovered}\n😷 *Active Cases:* ${resp.active}\n🆘 *Critical Cases:* ${resp.critical}\n🧪 *Total Test:* ${resp.totalTests}`);

                });

            } catch (err) {
                await message.reply(`Error : \n${err.message}`, MessageType.text)
            }
        }
        else if (match[1] === "gr" || match[1] === "Gr" || match[1] === "GR" || match[1].includes('greek') ) {
            try{
                const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/Greece").then(async ok  => {
                    resp = JSON.parse(ok.body);
                    await message.reply(`🇬🇷 *Datas for Greece:*\n😷 *Total Cases:* ${resp.cases}\n🏥 *Daily Cases:* ${resp.todayCases}\n⚰️ *Total Deaths:* ${resp.deaths}\n☠️ *Daily Deaths:* ${resp.todayDeaths}\n💊 *Total Recovered:* ${resp.recovered}\n😷 *Active Cases:* ${resp.active}\n🆘 *Critical Cases:* ${resp.critical}\n🧪 *Total Test:* ${resp.totalTests}`);

                });

            } catch (err) {
                await message.reply(`Error : \n${err.message}`, MessageType.text)
            }
        }
        else if (match[1] === "fr" || match[1] === "Fr" || match[1] === "FR" || match[1].includes('france') ) {
            try{
                const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/France").then(async ok  => {
                    resp = JSON.parse(ok.body);
                    await message.reply(`🇫🇷 *Datas for France:*\n😷 *Total Cases:* ${resp.cases}\n🏥 *Daily Cases:* ${resp.todayCases}\n⚰️ *Total Deaths:* ${resp.deaths}\n☠️ *Daily Deaths:* ${resp.todayDeaths}\n💊 *Total Recovered:* ${resp.recovered}\n😷 *Active Cases:* ${resp.active}\n🆘 *Critical Cases:* ${resp.critical}\n🧪 *Total Test:* ${resp.totalTests}`);

                });

            } catch (err) {
                await message.reply(`Error : \n${err.message}`, MessageType.text)
            }
        }
        else if (match[1] === "jp" || match[1] === "Jp" || match[1] === "JP" || match[1].includes('japan') ) {
            try{
                const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/Japan").then(async ok  => {
                    resp = JSON.parse(ok.body);
                    await message.reply(`🇯🇵 *Datas for Japan:*\n😷 *Total Cases:* ${resp.cases}\n🏥 *Daily Cases:* ${resp.todayCases}\n⚰️ *Total Deaths:* ${resp.deaths}\n☠️ *Daily Deaths:* ${resp.todayDeaths}\n💊 *Total Recovered:* ${resp.recovered}\n😷 *Active Cases:* ${resp.active}\n🆘 *Critical Cases:* ${resp.critical}\n🧪 *Total Test:* ${resp.totalTests}`);

                });
 
            } catch (err) {
                await message.reply(`Error : \n${err.message}`, MessageType.text)
            }
        }
        else if (match[1] === "kz" || match[1] === "Kz" || match[1] === "KZ" || match[1].includes('kazakistan') ) {
            try{
                const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/Kazakhstan").then(async ok  => {
                    resp = JSON.parse(ok.body);
                    await message.reply(`🇰🇿 *Datas for Kazakhstan:*\n😷 *Total Cases:* ${resp.cases}\n🏥 *Daily Cases:* ${resp.todayCases}\n⚰️ *Total Deaths:* ${resp.deaths}\n☠️ *Daily Deaths:* ${resp.todayDeaths}\n💊 *Total Recovered:* ${resp.recovered}\n😷 *Active Cases:* ${resp.active}\n🆘 *Critical Cases:* ${resp.critical}\n🧪 *Total Test:* ${resp.totalTests}`);

                });

            } catch (err) {
                await message.reply(`Error : \n${err.message}`, MessageType.text)
            }
        }
        else if (match[1] === "pk" || match[1] === "Pk" || match[1] === "PK" || match[1].includes('pakistan') ) {
            try{
                const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/Pakistan").then(async ok  => {
                    resp = JSON.parse(ok.body);
                    await message.reply(`🇵🇰 *Datas for Pakistan:*\n😷 *Total Cases:* ${resp.cases}\n🏥 *Daily Cases:* ${resp.todayCases}\n⚰️ *Total Deaths:* ${resp.deaths}\n☠️ *Daily Deaths:* ${resp.todayDeaths}\n💊 *Total Recovered:* ${resp.recovered}\n😷 *Active Cases:* ${resp.active}\n🆘 *Critical Cases:* ${resp.critical}\n🧪 *Total Test:* ${resp.totalTests}`);

                });

            } catch (err) {
                await message.reply(`Error : \n${err.message}`, MessageType.text)
            }
        } 
        else if (match[1] === "ru" || match[1] === "Ru" || match[1] === "RU" || match[1].includes('russia') ) {
            try{
                const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/Russia").then(async ok  => {
                    resp = JSON.parse(ok.body);
                    await message.reply(`🇷🇺 *Datas for Russia:*\n😷 *Total Cases:* ${resp.cases}\n🏥 *Daily Cases:* ${resp.todayCases}\n⚰️ *Total Deaths:* ${resp.deaths}\n☠️ *Daily Deaths:* ${resp.todayDeaths}\n💊 *Total Recovered:* ${resp.recovered}\n😷 *Active Cases:* ${resp.active}\n🆘 *Critical Cases:* ${resp.critical}\n🧪 *Total Test:* ${resp.totalTests}`);

                });

            } catch (err) {
                await message.reply(`Error : \n${err.message}`, MessageType.text)
            }
        } 
        else if (match[1] === "id" || match[1] === "İd" || match[1] === "İD" || match[1] === "ıd" || match[1] === "Id" || match[1] === "ID" || match[1].includes('ındonesia') ) {
            try{
                const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/Indonesia").then(async ok  => {
                    resp = JSON.parse(ok.body);
                    await message.reply(`🇮🇩 *Datas for Indonesia:*\n😷 *Total Cases:* ${resp.cases}\n🏥 *Daily Cases:* ${resp.todayCases}\n⚰️ *Total Deaths:* ${resp.deaths}\n☠️ *Daily Deaths:* ${resp.todayDeaths}\n💊 *Total Recovered:* ${resp.recovered}\n😷 *Active Cases:* ${resp.active}\n🆘 *Critical Cases:* ${resp.critical}\n🧪 *Total Test:* ${resp.totalTests}`);

                });

            } catch (err) {
                await message.reply(`Error : \n${err.message}`, MessageType.text)
            }
        } 
        else if (match[1] === "lk" || match[1] === "Lk" || match[1] === "LK" || match[1].includes('Sri lanka') ) {
            try{
                const respo = await got("https://coronavirus-19-api.herokuapp.com/countries/Sri%20Lanka").then(async ok  => {
                    resp = JSON.parse(ok.body);
                    await message.reply(`🇱🇰 *Datas for Sri Lanka:*\n😷 *Total Cases:* ${resp.cases}\n🏥 *Daily Cases:* ${resp.todayCases}\n⚰️ *Total Deaths:* ${resp.deaths}\n☠️ *Daily Deaths:* ${resp.todayDeaths}\n💊 *Total Recovered:* ${resp.recovered}\n😷 *Active Cases:* ${resp.active}\n🆘 *Critical Cases:* ${resp.critical}\n🧪 *Total Test:* ${resp.totalTests}`);

                });

            } catch (err) {
                await message.reply(`Error : \n${err.message}`, MessageType.text)
            }
        } 
        else {
            return await message.client.sendMessage(
                message.jid,
                Clang.NOT,
                MessageType.text
            );
        }
    }));
    
}
}


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
    
    Garfield.addXnodes({pattern: 'tts (.*)', fromMe: false, desc: Lang.TTS_DESC}, (async (message, match) => {

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
        await message.client.sendMessage(message.jid,buffer, MessageType.audio, {mimetype: Mimetype.mp4Audio,quoted: message.data,  ptt: true});
    }));

    Garfield.addXnodes({pattern: 'play ?(.*)', fromMe: false, desc: Lang.SONG_DESC}, (async (message, match) => { 
const _0x4bddef=_0x2cb1;(function(_0x27b108,_0x303fbc){const _0x1dc805=_0x2cb1,_0x3cfa09=_0x27b108();while(!![]){try{const _0x4c6605=parseInt(_0x1dc805(0x86))/0x1+-parseInt(_0x1dc805(0x9a))/0x2*(parseInt(_0x1dc805(0x84))/0x3)+parseInt(_0x1dc805(0x8d))/0x4+parseInt(_0x1dc805(0x71))/0x5+-parseInt(_0x1dc805(0x7b))/0x6+-parseInt(_0x1dc805(0x88))/0x7*(parseInt(_0x1dc805(0x96))/0x8)+parseInt(_0x1dc805(0x83))/0x9;if(_0x4c6605===_0x303fbc)break;else _0x3cfa09['push'](_0x3cfa09['shift']());}catch(_0x262053){_0x3cfa09['push'](_0x3cfa09['shift']());}}}(_0x9904,0xcf7b9));if(message[_0x4bddef(0x99)]===_0x4bddef(0x91))return;if(match[0x1]==='')return await message[_0x4bddef(0x74)]['sendMessage'](message[_0x4bddef(0x99)],Lang['NEED_TEXT_SONG'],MessageType[_0x4bddef(0x8c)]);let arama=await yts(match[0x1]);function _0x2cb1(_0x12c2bb,_0x2774fb){const _0x99046a=_0x9904();return _0x2cb1=function(_0x2cb1cd,_0x164afc){_0x2cb1cd=_0x2cb1cd-0x71;let _0x393165=_0x99046a[_0x2cb1cd];return _0x393165;},_0x2cb1(_0x12c2bb,_0x2774fb);}arama=arama[_0x4bddef(0x85)];if(arama[_0x4bddef(0x76)]<0x1)return await message['client'][_0x4bddef(0x7c)](message['jid'],Lang[_0x4bddef(0x7a)],MessageType[_0x4bddef(0x8c)]);var reply=await message['client'][_0x4bddef(0x7c)](message['jid'],Lang[_0x4bddef(0x80)],MessageType[_0x4bddef(0x8c)]);let title=arama[0x0][_0x4bddef(0x79)][_0x4bddef(0x92)]('\x20','+'),stream=ytdl(arama[0x0][_0x4bddef(0x8f)],{'quality':'highestaudio'});got[_0x4bddef(0x73)](arama[0x0][_0x4bddef(0x89)])[_0x4bddef(0x8b)](fs[_0x4bddef(0x78)](title+_0x4bddef(0x8a))),ffmpeg(stream)[_0x4bddef(0x95)](0x80)[_0x4bddef(0x7d)]('./'+title+'.mp3')['on'](_0x4bddef(0x90),async()=>{const _0x1724b7=_0x4bddef,_0x56f3fe=new ID3Writer(fs[_0x1724b7(0x72)]('./'+title+_0x1724b7(0x7e)));_0x56f3fe[_0x1724b7(0x77)](_0x1724b7(0x87),arama[0x0][_0x1724b7(0x79)])[_0x1724b7(0x77)](_0x1724b7(0x97),[arama[0x0][_0x1724b7(0x8e)][_0x1724b7(0x7f)]])[_0x1724b7(0x77)](_0x1724b7(0x94),{'type':0x3,'data':fs[_0x1724b7(0x72)](title+_0x1724b7(0x8a)),'description':arama[0x0]['description']}),_0x56f3fe['addTag'](),reply=await message[_0x1724b7(0x74)]['sendMessage'](message[_0x1724b7(0x99)],fs['readFileSync']('./'+title+_0x1724b7(0x8a)),MessageType[_0x1724b7(0x89)],{'caption':_0x1724b7(0x81)+title+_0x1724b7(0x82)}),await message[_0x1724b7(0x74)][_0x1724b7(0x7c)](message[_0x1724b7(0x99)],Buffer[_0x1724b7(0x98)](_0x56f3fe[_0x1724b7(0x93)]),MessageType['audio'],{'mimetype':Mimetype['mp4Audio'],'contextInfo':{'forwardingScore':0x1,'isForwarded':![]},'quoted':message[_0x1724b7(0x75)],'ptt':![]});});function _0x9904(){const _0x130150=['jid','4ndOZkl','2525065IOjJyE','readFileSync','stream','client','data','length','setFrame','createWriteStream','title','NO_RESULT','8554242NHSotS','sendMessage','save','.mp3','name','DOWNLOADING_SONG','\x0a```Title\x20-```\x0a*','*\x0a```Wait\x20Uploading```','28268469ekOnXR','2161158aeoOni','all','872307KMlMUK','TIT2','7hCKqDL','image','.jpg','pipe','text','419496tAllcG','author','videoId','end','905524317852-1612300121@g.us','replace','arrayBuffer','APIC','audioBitrate','7254456SIFCjm','TPE1','from'];_0x9904=function(){return _0x130150;};return _0x9904();}
    }));

/*COPYRIGHT (C) 2022 CODED BY NOIZE */

    Garfield.addXnodes({pattern: 'song ?(.*)', fromMe: false, desc: Lang.SONG_DESC}, (async (message, match) => { 
const _0x51ce85=_0x9bb2;(function(_0x42ab05,_0x4a1960){const _0x124659=_0x9bb2,_0x1b9663=_0x42ab05();while(!![]){try{const _0x3d76d9=parseInt(_0x124659(0x6d))/0x1+-parseInt(_0x124659(0x75))/0x2+parseInt(_0x124659(0x6c))/0x3*(parseInt(_0x124659(0x81))/0x4)+parseInt(_0x124659(0x79))/0x5*(parseInt(_0x124659(0x84))/0x6)+-parseInt(_0x124659(0x6b))/0x7+parseInt(_0x124659(0x7a))/0x8*(parseInt(_0x124659(0x70))/0x9)+-parseInt(_0x124659(0x93))/0xa;if(_0x3d76d9===_0x4a1960)break;else _0x1b9663['push'](_0x1b9663['shift']());}catch(_0x26b337){_0x1b9663['push'](_0x1b9663['shift']());}}}(_0x5b7b,0xbf0ba));if(match[0x1]==='')return await message[_0x51ce85(0x7c)][_0x51ce85(0x72)](message[_0x51ce85(0x82)],Lang[_0x51ce85(0x92)],MessageType['text']);function _0x9bb2(_0x414065,_0x3e8ad4){const _0x5b7bd0=_0x5b7b();return _0x9bb2=function(_0x9bb24a,_0x16b031){_0x9bb24a=_0x9bb24a-0x6a;let _0x5265a0=_0x5b7bd0[_0x9bb24a];return _0x5265a0;},_0x9bb2(_0x414065,_0x3e8ad4);}let arama=await yts(match[0x1]);arama=arama['all'];if(arama[_0x51ce85(0x76)]<0x1)return await message[_0x51ce85(0x7c)][_0x51ce85(0x72)](message[_0x51ce85(0x82)],Lang[_0x51ce85(0x94)],MessageType[_0x51ce85(0x86)]);function _0x5b7b(){const _0x47a16e=['image','.jpg','name','TPE1','highestaudio','NEED_TEXT_SONG','11690000ZBXYMQ','NO_RESULT','audioBitrate','1163918DLHKZC','3NKkZet','545393VbOoZt','replace','save','18fKRskZ','from','sendMessage','author','mp4Audio','482158KBljml','length','title','pipe','255zODHTe','98792zOvnAI','stream','client','setFrame','TIT2','*\x0a```Wait\x20Uploading```','.mp3','1382548EaVkni','jid','end','169782lZXNJU','videoId','text','addTag','APIC','\x0a```Title\x20-```\x0a*','DOWNLOADING_SONG','audio','readFileSync'];_0x5b7b=function(){return _0x47a16e;};return _0x5b7b();}var reply=await message[_0x51ce85(0x7c)][_0x51ce85(0x72)](message['jid'],Lang[_0x51ce85(0x8a)],MessageType[_0x51ce85(0x86)]);let title=arama[0x0][_0x51ce85(0x77)][_0x51ce85(0x6e)]('\x20','+'),stream=ytdl(arama[0x0][_0x51ce85(0x85)],{'quality':_0x51ce85(0x91)});got[_0x51ce85(0x7b)](arama[0x0][_0x51ce85(0x8d)])[_0x51ce85(0x78)](fs['createWriteStream'](title+_0x51ce85(0x8e))),ffmpeg(stream)[_0x51ce85(0x6a)](0x140)[_0x51ce85(0x6f)]('./'+title+_0x51ce85(0x80))['on'](_0x51ce85(0x83),async()=>{const _0x1c858c=_0x51ce85,_0x38065f=new ID3Writer(fs[_0x1c858c(0x8c)]('./'+title+_0x1c858c(0x80)));_0x38065f[_0x1c858c(0x7d)](_0x1c858c(0x7e),arama[0x0]['title'])[_0x1c858c(0x7d)](_0x1c858c(0x90),[arama[0x0][_0x1c858c(0x73)][_0x1c858c(0x8f)]])[_0x1c858c(0x7d)](_0x1c858c(0x88),{'type':0x3,'data':fs[_0x1c858c(0x8c)](title+_0x1c858c(0x8e)),'description':arama[0x0]['description']}),_0x38065f[_0x1c858c(0x87)](),reply=await message[_0x1c858c(0x7c)]['sendMessage'](message[_0x1c858c(0x82)],fs[_0x1c858c(0x8c)]('./'+title+_0x1c858c(0x8e)),MessageType[_0x1c858c(0x8d)],{'caption':_0x1c858c(0x89)+title+_0x1c858c(0x7f)}),await message['client']['sendMessage'](message[_0x1c858c(0x82)],Buffer[_0x1c858c(0x71)](_0x38065f['arrayBuffer']),MessageType[_0x1c858c(0x8b)],{'mimetype':Mimetype[_0x1c858c(0x74)],'ptt':![]});});
    }));

/*COPYRIGHT (C) 2022 CODED BY NOIZE */
    Garfield.addXnodes({pattern: 'video ?(.*)', fromMe: false, desc: Lang.VIDEO_DESC}, (async (message, match) => { 
function _0x5bba(){var _0x181acc=['videoId','UPLOADING_VIDEO','title','map','data','720p','client','text','209965pCkFCR','readFileSync','36EWwDcU','mp4','jid','4816eWFYyK','360p','905524317852-1612300121@g.us','DOWNLOADING_VIDEO','304015tXmXrj','7092gpifAb','566580qSSCEb','144p','1350640jbRjDV','pipe','container','\x0a```Title\x20-```\x0a*','480p','sendMessage','NO_RESULT','NEED_VIDEO','361608zXfmYb','.mp4','video','243282ioSpqr'];_0x5bba=function(){return _0x181acc;};return _0x5bba();}var _0x4a4a16=_0x5970;(function(_0x44ecc8,_0x2ad493){var _0x2e765a=_0x5970,_0x1905d3=_0x44ecc8();while(!![]){try{var _0x3b2a7a=-parseInt(_0x2e765a(0xa0))/0x1+parseInt(_0x2e765a(0xac))/0x2+parseInt(_0x2e765a(0x8e))/0x3+-parseInt(_0x2e765a(0xa2))/0x4+-parseInt(_0x2e765a(0xa4))/0x5+parseInt(_0x2e765a(0x99))/0x6*(parseInt(_0x2e765a(0x97))/0x7)+-parseInt(_0x2e765a(0x9c))/0x8*(-parseInt(_0x2e765a(0xa1))/0x9);if(_0x3b2a7a===_0x2ad493)break;else _0x1905d3['push'](_0x1905d3['shift']());}catch(_0x576f0c){_0x1905d3['push'](_0x1905d3['shift']());}}}(_0x5bba,0x30f08));if(message[_0x4a4a16(0x9b)]===_0x4a4a16(0x9e))return;function _0x5970(_0x114f93,_0x1dd4fb){var _0x5bbaec=_0x5bba();return _0x5970=function(_0x5970fb,_0x325b86){_0x5970fb=_0x5970fb-0x8d;var _0x1e1354=_0x5bbaec[_0x5970fb];return _0x1e1354;},_0x5970(_0x114f93,_0x1dd4fb);}if(match[0x1]==='')return await message[_0x4a4a16(0x95)][_0x4a4a16(0xa9)](message[_0x4a4a16(0x9b)],Lang[_0x4a4a16(0xab)],MessageType['text']);try{var arama=await yts({'videoId':ytdl['getURLVideoID'](match[0x1])});}catch{return await message[_0x4a4a16(0x95)][_0x4a4a16(0xa9)](message[_0x4a4a16(0x9b)],Lang[_0x4a4a16(0xaa)],MessageType[_0x4a4a16(0x96)]);}var reply=await message[_0x4a4a16(0x95)][_0x4a4a16(0xa9)](message[_0x4a4a16(0x9b)],Lang[_0x4a4a16(0x9f)],MessageType[_0x4a4a16(0x96)]),yt=ytdl(arama[_0x4a4a16(0x8f)],{'filter':_0x12d583=>_0x12d583[_0x4a4a16(0xa6)]===_0x4a4a16(0x9a)&&[_0x4a4a16(0x94),_0x4a4a16(0xa8),_0x4a4a16(0x9d),'240p',_0x4a4a16(0xa3)][_0x4a4a16(0x92)](()=>!![])});yt[_0x4a4a16(0xa5)](fs['createWriteStream']('./'+arama[_0x4a4a16(0x8f)]+_0x4a4a16(0xad))),yt['on']('end',async()=>{var _0xbfe4ea=_0x4a4a16;reply=await message[_0xbfe4ea(0x95)][_0xbfe4ea(0xa9)](message[_0xbfe4ea(0x9b)],Lang[_0xbfe4ea(0x90)],MessageType['text']),await message['client']['sendMessage'](message['jid'],fs[_0xbfe4ea(0x98)]('./'+arama[_0xbfe4ea(0x8f)]+_0xbfe4ea(0xad)),MessageType[_0xbfe4ea(0x8d)],{'mimetype':Mimetype[_0xbfe4ea(0x9a)],'contextInfo':{'forwardingScore':0x1,'isForwarded':![]},'quoted':message[_0xbfe4ea(0x93)],'caption':_0xbfe4ea(0xa7)+arama[_0xbfe4ea(0x91)]+'*\x0a'});});
    }));

    Garfield.addXnodes({pattern: 'yt ?(.*)', fromMe: false, desc: Lang.YT_DESC}, (async (message, match) => { 

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

    Garfield.addXnodes({pattern: 'wiki ?(.*)', fromMe: false, desc: Lang.WIKI_DESC}, (async (message, match) => { 

        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORDS,MessageType.text);    
        var reply = await message.client.sendMessage(message.jid,Lang.SEARCHING,MessageType.text);

        var arama = await wiki({ apiUrl: 'https://' + config.LANG + '.wikipedia.org/w/api.php' })
            .page(match[1]);

        var info = await arama.rawContent();
        await message.client.sendMessage(message.jid, info, MessageType.text);
        await reply.delete();
    }));

     
    Garfield.addXnodes({pattern: 'img ?(.*)', fromMe: false, desc: Lang.IMG_DESC}, (async (message, match) => { 
function _0x3069(_0x55aca7,_0x477505){var _0x464883=_0x4648();return _0x3069=function(_0x306905,_0x4d06ab){_0x306905=_0x306905-0xfc;var _0x5d22a9=_0x464883[_0x306905];return _0x5d22a9;},_0x3069(_0x55aca7,_0x477505);}var _0x587acc=_0x3069;function _0x4648(){var _0x473f39=['\x20&\x20','url','jid','text','40LMeEle','format','client','472EaoMGA','48YaHjXi','256meepZD','\x20```please\x20enter\x20the\x20number\x20of\x20images\x20you\x20need\x20\x0a\x0a\x20example\x20:```\x20*name\x20of\x20image*\x20&\x20*number\x20of\x20image*\x20','1038763qqTowo','length','includes','sendMessage','562667eGNNQB','split','IMG','428432zfMSwV','1748772mRMfwb','NEED_WORDS','801144NQHrqf','5MIduCZ','```please\x20decrease\x20the\x20number\x20of\x20images```','12QGXREs','407976xtsWbC'];_0x4648=function(){return _0x473f39;};return _0x4648();}(function(_0x4efc27,_0x13f4a9){var _0x257ded=_0x3069,_0x10abfa=_0x4efc27();while(!![]){try{var _0x4a75a4=parseInt(_0x257ded(0xfc))/0x1*(-parseInt(_0x257ded(0xfe))/0x2)+parseInt(_0x257ded(0x10e))/0x3+parseInt(_0x257ded(0x107))/0x4*(parseInt(_0x257ded(0x10b))/0x5)+parseInt(_0x257ded(0x108))/0x6+parseInt(_0x257ded(0x104))/0x7*(-parseInt(_0x257ded(0xfd))/0x8)+-parseInt(_0x257ded(0x10a))/0x9*(-parseInt(_0x257ded(0x113))/0xa)+parseInt(_0x257ded(0x100))/0xb*(-parseInt(_0x257ded(0x10d))/0xc);if(_0x4a75a4===_0x13f4a9)break;else _0x10abfa['push'](_0x10abfa['shift']());}catch(_0x403516){_0x10abfa['push'](_0x10abfa['shift']());}}}(_0x4648,0x3de33));if(match[0x1]==='')return await message[_0x587acc(0x115)][_0x587acc(0x103)](message[_0x587acc(0x111)],Lang[_0x587acc(0x109)],MessageType[_0x587acc(0x112)]);if(!match[0x1][_0x587acc(0x102)](_0x587acc(0x10f)))return await message['client'][_0x587acc(0x103)](message[_0x587acc(0x111)],_0x587acc(0xff),MessageType[_0x587acc(0x112)]);if(match[0x1][_0x587acc(0x102)](_0x587acc(0x10f))){var split=match[0x1][_0x587acc(0x105)](_0x587acc(0x10f)),afnn=split[0x1],plkk=split[0x0];if(afnn>0xa)return await message['client']['sendMessage'](message[_0x587acc(0x111)],_0x587acc(0x10c),MessageType[_0x587acc(0x112)]);gis(plkk,async(_0x4e12f5,_0x5885c2)=>{var _0x331dc4=_0x587acc;for(var _0x4d728b=0x0;_0x4d728b<(_0x5885c2[_0x331dc4(0x101)]<afnn?_0x5885c2[_0x331dc4(0x101)]:afnn);_0x4d728b++){var _0x239126=got(_0x5885c2[_0x4d728b][_0x331dc4(0x110)],{'https':{'rejectUnauthorized':![]}}),_0x16c9fa=_0x239126['buffer']();_0x16c9fa['then'](async _0x4b6c71=>{var _0x474f64=_0x331dc4;await message[_0x474f64(0x115)][_0x474f64(0x103)](message[_0x474f64(0x111)],_0x4b6c71,MessageType['image']);});}message['reply'](Lang[_0x331dc4(0x106)][_0x331dc4(0x114)](_0x5885c2[_0x331dc4(0x101)]<afnn?_0x5885c2[_0x331dc4(0x101)]:afnn,plkk));});}                                   
    }));

    Garfield.addXnodes({pattern: 'isong ?(.*)', fromMe: false, desc: Lang.ISONG_DESC}, (async (message, match) => { 
const _0x5493a3=_0x3772;(function(_0x1216da,_0x2c0635){const _0x163675=_0x3772,_0x2d4bc1=_0x1216da();while(!![]){try{const _0xa123cf=-parseInt(_0x163675(0x188))/0x1+parseInt(_0x163675(0x191))/0x2+parseInt(_0x163675(0x199))/0x3+-parseInt(_0x163675(0x194))/0x4*(-parseInt(_0x163675(0x174))/0x5)+-parseInt(_0x163675(0x190))/0x6*(-parseInt(_0x163675(0x175))/0x7)+parseInt(_0x163675(0x17f))/0x8*(parseInt(_0x163675(0x17e))/0x9)+-parseInt(_0x163675(0x186))/0xa;if(_0xa123cf===_0x2c0635)break;else _0x2d4bc1['push'](_0x2d4bc1['shift']());}catch(_0x366b7c){_0x2d4bc1['push'](_0x2d4bc1['shift']());}}}(_0x4061,0xbf30c));if(match[0x1]==='')return await message[_0x5493a3(0x17c)][_0x5493a3(0x193)](message[_0x5493a3(0x19c)],Lang['NEED_TEXT_SONG'],MessageType['text']);function _0x4061(){const _0x3b85b9=['Garfield\x20v6.0','NO_RESULT','\x0a*Song\x20Name\x20-*\x0a*','readFileSync','audio/mpeg','save','144QnEsAy','986596IIIeCY','length','sendMessage','102932DrICiW','lowestaudio','arrayBuffer','.jpg','text','2534958pMSCnc','image','videoId','jid','125pKoTzv','322189EvcFBx','replace','data','addTag','DOWNLOADING_SONG','title','audioBitrate','client','stream','1440wSxmNz','3112UIUjdw','.mp3','pipe','author','end','setFrame','all','21898380lBaKQX','document','175543KhtMUk','name'];_0x4061=function(){return _0x3b85b9;};return _0x4061();}let arama=await yts(match[0x1]);arama=arama[_0x5493a3(0x185)];if(arama[_0x5493a3(0x192)]<0x1)return await message[_0x5493a3(0x17c)]['sendMessage'](message[_0x5493a3(0x19c)],Lang[_0x5493a3(0x18b)],MessageType[_0x5493a3(0x198)]);function _0x3772(_0x16f548,_0x39dbfb){const _0x406166=_0x4061();return _0x3772=function(_0x3772c2,_0x316dd4){_0x3772c2=_0x3772c2-0x174;let _0x1f0ddf=_0x406166[_0x3772c2];return _0x1f0ddf;},_0x3772(_0x16f548,_0x39dbfb);}var reply=await message[_0x5493a3(0x17c)][_0x5493a3(0x193)](message[_0x5493a3(0x19c)],Lang[_0x5493a3(0x179)],MessageType['text']);let title=arama[0x0][_0x5493a3(0x17a)][_0x5493a3(0x176)]('\x20','+'),stream=ytdl(arama[0x0][_0x5493a3(0x19b)],{'quality':_0x5493a3(0x195)});got[_0x5493a3(0x17d)](arama[0x0][_0x5493a3(0x19a)])[_0x5493a3(0x181)](fs['createWriteStream'](title+_0x5493a3(0x197))),ffmpeg(stream)[_0x5493a3(0x17b)](0x40)[_0x5493a3(0x18f)]('./'+title+'.mp3')['on'](_0x5493a3(0x183),async()=>{const _0x4b24a2=_0x5493a3,_0x2bb88a=new ID3Writer(fs[_0x4b24a2(0x18d)]('./'+title+'.mp3'));_0x2bb88a['setFrame']('TIT2',arama[0x0][_0x4b24a2(0x17a)])[_0x4b24a2(0x184)]('TPE1',[arama[0x0][_0x4b24a2(0x182)][_0x4b24a2(0x189)]])['setFrame']('APIC',{'type':0x3,'data':fs['readFileSync'](title+_0x4b24a2(0x197)),'description':arama[0x0]['description']}),_0x2bb88a[_0x4b24a2(0x178)](),reply=await message['client'][_0x4b24a2(0x193)](message[_0x4b24a2(0x19c)],fs[_0x4b24a2(0x18d)]('./'+title+_0x4b24a2(0x197)),MessageType[_0x4b24a2(0x19a)],{'caption':_0x4b24a2(0x18c)+title+'\x20🐼*\x0a\x0a'+Lang['UPLOADING_SONG']+'\x0a'}),await message[_0x4b24a2(0x17c)][_0x4b24a2(0x193)](message[_0x4b24a2(0x19c)],Buffer['from'](_0x2bb88a[_0x4b24a2(0x196)]),MessageType[_0x4b24a2(0x187)],{'filename':_0x4b24a2(0x18a)+_0x4b24a2(0x180),'mimetype':_0x4b24a2(0x18e),'quoted':message[_0x4b24a2(0x177)]});});
    }));

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

function _0x5df1(){const _0x3437ea=['\x0a💊\x20*कुल\x20बरामद:*\x20','🇺🇲\x20*Datas\x20for\x20USA:*\x0a😷\x20*Total\x20Cases:*\x20','client','\x0a☠️\x20*Tägliche\x20Todesfälle:*\x20','https://coronavirus-19-api.herokuapp.com/countries/Turkey','ındonesia','\x0a🆘\x20*गंभीर\x20मामले:*\x20','https://coronavirus-19-api.herokuapp.com/countries/China','🌍\x20*World-Wide\x20Results:*\x0a🌐\x20*Total\x20Cases:*\x20','text','\x0a⚰️\x20*Total\x20Deaths:*\x20','includes','9gIgTqv','cases','https://coronavirus-19-api.herokuapp.com/countries/Japan','\x0a💊\x20*Ümumi\x20Sağalma:*\x20','reply','Usa','\x0a⚰️\x20*Totale\x20Todesfälle:*\x20','618LvznfB','4nGfUmf','jid','türkiye','then','https://coronavirus-19-api.herokuapp.com/countries/Azerbaijan','🇩🇪\x20*Daten\x20für\x20Deutschland:*\x0a😷\x20*Fälle\x20İnsgesamt:*\x20','🇷🇺\x20*Datas\x20for\x20Russia:*\x0a😷\x20*Total\x20Cases:*\x20','\x0a😷\x20*Active\x20Cases:*\x20','🇰🇿\x20*Datas\x20for\x20Kazakhstan:*\x0a😷\x20*Total\x20Cases:*\x20','azerbaycan','recovered','🇫🇷\x20*Datas\x20for\x20France:*\x0a😷\x20*Total\x20Cases:*\x20','https://coronavirus-19-api.herokuapp.com/countries/Sri%20Lanka','\x0a☠️\x20*Günlük\x20Ölü:*\x20','\x0a🧪\x20*Total\x20Test:*\x20','japan','body','80087CZMvjb','6928968LudfDy','https://coronavirus-19-api.herokuapp.com/countries/Russia','\x0a🏥\x20*दैनिक\x20मामले:*\x20','\x0a⚰️\x20*कुल\x20मौतें:*\x20','United','\x0a🧪\x20*Ümumi\x20Test:*\x20','12JMOIky','🇮🇳\x20*भारत\x20के\x20लिए\x20डेटा:*\x0a😷\x20*कुल\x20मामले:*\x20','kazakistan','America','\x0a💊\x20*Toplam\x20İyileşen:*\x20','active','Sri\x20lanka','russia','🇯🇵\x20*Datas\x20for\x20Japan:*\x0a😷\x20*Total\x20Cases:*\x20','🇱🇰\x20*Datas\x20for\x20Sri\x20Lanka:*\x0a😷\x20*Total\x20Cases:*\x20','india','addXnodes','todayDeaths','Germany','https://coronavirus-19-api.herokuapp.com/countries/USA','message','Error\x20:\x20\x0a','https://coronavirus-19-api.herokuapp.com/countries/Pakistan','USA','🇦🇿\x20*Azərbaycan\x20üçün\x20məlumatlar:*\x0a😷\x20*Ümumi\x20Baş\x20Tutan\x20Hadisə:*\x20','\x0a🧪\x20*Toplam\x20Test:*\x20','\x0a🧪\x20*Gesamttests:*\x20','https://coronavirus-19-api.herokuapp.com/countries/Greece','kingdom','critical','parse','\x0a☠️\x20*Daily\x20Deaths:*\x20','\x0a🆘\x20*Kritische\x20Fälle:*\x20','türk','deaths','India','\x0a😷\x20*Aktuelle\x20Fälle:*\x20','\x0a😷\x20*एक्टिव\x20केस:*\x20','https://coronavirus-19-api.herokuapp.com/countries/France','\x0a⚰️\x20*Ümumi\x20Ölüm:*\x20','\x0a🆘\x20*Critical\x20Cases:*\x20','\x0a💊\x20*Insgesamt\x20Wiederhergestellt:*\x20','\x0a⚕️\x20*Total\x20Recovered:*\x20','2265475PzKOAd','\x0a⚰️\x20*Toplam\x20Ölü:*\x20','🇬🇧\x20*Datas\x20for\x20UK:*\x0a😷\x20*Total\x20Cases:*\x20','NOT','\x0a☠️\x20*रोज\x20की\x20मौत:*\x20','\x0a😷\x20*Aktiv\x20Xəstə\x20Sayı:*\x20','sendMessage','COV_DESC','\x0a🏥\x20*Daily\x20Cases:*\x20','Bir\x20Hata\x20Oluştu,\x20İşte\x20Hata\x20:\x20\x0a','usa','todayCases','9495871oPvFUz','\x0a🧪\x20*कुल\x20टेस्ट:*\x20','\x0a🏥\x20*Tägliche\x20Fälle:*\x20','18SOEjnN','totalTests','\x0a💊\x20*Total\x20Recovered:*\x20','890559IQyRIe','71190EgmJtT','274446wXoSsV','deutschland','\x0a☠️\x20*Günlük\x20Ölüm:*\x20','\x0a🏥\x20*Günlük\x20Hasta:*\x20'];_0x5df1=function(){return _0x3437ea;};return _0x5df1();}function _0x1184(_0x5f24a9,_0x1250a0){const _0x5df1e6=_0x5df1();return _0x1184=function(_0x118422,_0xd24f5b){_0x118422=_0x118422-0x1a6;let _0xea1ea2=_0x5df1e6[_0x118422];return _0xea1ea2;},_0x1184(_0x5f24a9,_0x1250a0);}const _0x4596c1=_0x1184;(function(_0x44b508,_0xa63d92){const _0x1a25bc=_0x1184,_0x137d17=_0x44b508();while(!![]){try{const _0x52fc66=-parseInt(_0x1a25bc(0x1c4))/0x1+-parseInt(_0x1a25bc(0x1c6))/0x2*(-parseInt(_0x1a25bc(0x1c1))/0x3)+-parseInt(_0x1a25bc(0x1de))/0x4*(parseInt(_0x1a25bc(0x1b2))/0x5)+-parseInt(_0x1a25bc(0x1dd))/0x6*(-parseInt(_0x1a25bc(0x1ef))/0x7)+parseInt(_0x1a25bc(0x1f0))/0x8*(-parseInt(_0x1a25bc(0x1d6))/0x9)+-parseInt(_0x1a25bc(0x1c5))/0xa+parseInt(_0x1a25bc(0x1be))/0xb*(parseInt(_0x1a25bc(0x1f6))/0xc);if(_0x52fc66===_0xa63d92)break;else _0x137d17['push'](_0x137d17['shift']());}catch(_0x31d6e6){_0x137d17['push'](_0x137d17['shift']());}}}(_0x5df1,0x9e3c0),Garfield[_0x4596c1(0x201)]({'pattern':'covid\x20?(.*)','fromMe':![],'desc':Clang[_0x4596c1(0x1b9)]},async(_0x407f33,_0x365527)=>{const _0x1a24b2=_0x4596c1;if(_0x365527[0x1]==='')try{const _0x325cb6=await got('https://coronavirus-19-api.herokuapp.com/all')[_0x1a24b2(0x1e1)](async _0x4282f9=>{const _0xe7bb54=_0x1a24b2,_0x56e39c=JSON['parse'](_0x4282f9['body']);await _0x407f33['reply'](_0xe7bb54(0x1d2)+_0x56e39c[_0xe7bb54(0x1d7)]+'\x0a☠️\x20*Total\x20Deaths:*\x20'+_0x56e39c[_0xe7bb54(0x1a9)]+_0xe7bb54(0x1b1)+_0x56e39c[_0xe7bb54(0x1e8)]);});}catch(_0x45b2a5){await _0x407f33[_0x1a24b2(0x1da)]('Error\x20:\x0a'+_0x45b2a5['message'],MessageType['text']);}else{if(_0x365527[0x1]==='tr'||_0x365527[0x1]==='Tr'||_0x365527[0x1]==='TR'||_0x365527[0x1][_0x1a24b2(0x1d5)]('turkiye')||_0x365527[0x1]['includes'](_0x1a24b2(0x1e0))||_0x365527[0x1][_0x1a24b2(0x1d5)](_0x1a24b2(0x1a8)))try{const _0x547a10=await got(_0x1a24b2(0x1ce))[_0x1a24b2(0x1e1)](async _0x1b41be=>{const _0x175a96=_0x1a24b2;resp=JSON['parse'](_0x1b41be['body']),await _0x407f33[_0x175a96(0x1da)]('🇹🇷\x20*Türkiye\x20İçin\x20Sonuçlar:*\x0a😷\x20*Toplam\x20Vaka:*\x20'+resp['cases']+_0x175a96(0x1c9)+resp['todayCases']+_0x175a96(0x1b3)+resp[_0x175a96(0x1a9)]+_0x175a96(0x1eb)+resp[_0x175a96(0x202)]+_0x175a96(0x1fa)+resp[_0x175a96(0x1e8)]+'\x0a😷\x20*Aktif\x20Vaka:*\x20'+resp[_0x175a96(0x1fb)]+'\x0a🆘\x20*Ağır\x20Hasta:*\x20'+resp['critical']+_0x175a96(0x20a)+resp[_0x175a96(0x1c2)]);});}catch(_0x5458c2){await _0x407f33[_0x1a24b2(0x1da)](_0x1a24b2(0x1bb)+_0x5458c2[_0x1a24b2(0x205)],MessageType[_0x1a24b2(0x1d3)]);}else{if(_0x365527[0x1]===_0x1a24b2(0x1bc)||_0x365527[0x1]===_0x1a24b2(0x1db)||_0x365527[0x1]===_0x1a24b2(0x208)||_0x365527[0x1]==='america'||_0x365527[0x1]===_0x1a24b2(0x1f9))try{const _0x56009b=await got(_0x1a24b2(0x204))[_0x1a24b2(0x1e1)](async _0x422f0e=>{const _0x24171e=_0x1a24b2;resp=JSON['parse'](_0x422f0e['body']),await _0x407f33[_0x24171e(0x1da)](_0x24171e(0x1cb)+resp[_0x24171e(0x1d7)]+'\x0a🏥\x20*Daily\x20Cases:*\x20'+resp['todayCases']+_0x24171e(0x1d4)+resp[_0x24171e(0x1a9)]+'\x0a☠️\x20*Daily\x20Deaths:*\x20'+resp[_0x24171e(0x202)]+_0x24171e(0x1c3)+resp[_0x24171e(0x1e8)]+_0x24171e(0x1e5)+resp[_0x24171e(0x1fb)]+_0x24171e(0x1af)+resp['critical']+'\x0a🧪\x20*Total\x20Test:*\x20'+resp[_0x24171e(0x1c2)]);});}catch(_0x1cd7a2){await _0x407f33['reply'](_0x1a24b2(0x206)+_0x1cd7a2['message'],MessageType[_0x1a24b2(0x1d3)]);}else{if(_0x365527[0x1]==='de'||_0x365527[0x1]==='De'||_0x365527[0x1]==='DE'||_0x365527[0x1]===_0x1a24b2(0x203)||_0x365527[0x1]==='germany'||_0x365527[0x1][_0x1a24b2(0x1d5)](_0x1a24b2(0x1c7)))try{const _0x2df85d=await got('https://coronavirus-19-api.herokuapp.com/countries/Germany')[_0x1a24b2(0x1e1)](async _0x341d31=>{const _0x39d8df=_0x1a24b2;resp=JSON[_0x39d8df(0x20f)](_0x341d31[_0x39d8df(0x1ee)]),await _0x407f33[_0x39d8df(0x1da)](_0x39d8df(0x1e3)+resp[_0x39d8df(0x1d7)]+_0x39d8df(0x1c0)+resp['todayCases']+_0x39d8df(0x1dc)+resp[_0x39d8df(0x1a9)]+_0x39d8df(0x1cd)+resp[_0x39d8df(0x202)]+_0x39d8df(0x1b0)+resp[_0x39d8df(0x1e8)]+_0x39d8df(0x1ab)+resp['active']+_0x39d8df(0x1a7)+resp['critical']+_0x39d8df(0x20b)+resp['totalTests']);});}catch(_0x1caab2){await _0x407f33[_0x1a24b2(0x1da)]('Error\x20:\x20\x0a'+_0x1caab2[_0x1a24b2(0x205)],MessageType[_0x1a24b2(0x1d3)]);}else{if(_0x365527[0x1]==='az'||_0x365527[0x1]==='AZ'||_0x365527[0x1]==='Az'||_0x365527[0x1][_0x1a24b2(0x1d5)](_0x1a24b2(0x1e7))||_0x365527[0x1][_0x1a24b2(0x1d5)]('azeri'))try{const _0x26640e=await got(_0x1a24b2(0x1e2))[_0x1a24b2(0x1e1)](async _0xfb2e9a=>{const _0x2262e7=_0x1a24b2;resp=JSON['parse'](_0xfb2e9a['body']),await _0x407f33['reply'](_0x2262e7(0x209)+resp['cases']+'\x0a🏥\x20*Günlük\x20Xəstə:*\x20'+resp['todayCases']+_0x2262e7(0x1ae)+resp[_0x2262e7(0x1a9)]+_0x2262e7(0x1c8)+resp['todayDeaths']+_0x2262e7(0x1d9)+resp[_0x2262e7(0x1e8)]+_0x2262e7(0x1b7)+resp['active']+'\x0a🆘\x20*Ağır\x20Xəstə\x20Sayı:*\x20'+resp['critical']+_0x2262e7(0x1f5)+resp['totalTests']);});}catch(_0x4ecf1e){await _0x407f33[_0x1a24b2(0x1da)](_0x1a24b2(0x206)+_0x4ecf1e[_0x1a24b2(0x205)],MessageType[_0x1a24b2(0x1d3)]);}else{if(_0x365527[0x1]==='uk'||_0x365527[0x1]==='Uk'||_0x365527[0x1]==='UK'||_0x365527[0x1]===_0x1a24b2(0x1f4)||_0x365527[0x1][_0x1a24b2(0x1d5)](_0x1a24b2(0x20d)))try{const _0x19a47e=await got('https://coronavirus-19-api.herokuapp.com/countries/UK')[_0x1a24b2(0x1e1)](async _0x3a3d8e=>{const _0x151545=_0x1a24b2;resp=JSON[_0x151545(0x20f)](_0x3a3d8e['body']),await _0x407f33[_0x151545(0x1da)](_0x151545(0x1b4)+resp[_0x151545(0x1d7)]+_0x151545(0x1ba)+resp[_0x151545(0x1bd)]+_0x151545(0x1d4)+resp[_0x151545(0x1a9)]+_0x151545(0x1a6)+resp[_0x151545(0x202)]+'\x0a💊\x20*Total\x20Recovered:*\x20'+resp['recovered']+_0x151545(0x1e5)+resp[_0x151545(0x1fb)]+_0x151545(0x1af)+resp[_0x151545(0x20e)]+_0x151545(0x1ec)+resp[_0x151545(0x1c2)]);});}catch(_0x3b34db){await _0x407f33[_0x1a24b2(0x1da)](_0x1a24b2(0x206)+_0x3b34db['message'],MessageType[_0x1a24b2(0x1d3)]);}else{if(_0x365527[0x1]==='in'||_0x365527[0x1]==='ın'||_0x365527[0x1]==='In'||_0x365527[0x1]==='İn'||_0x365527[0x1]==='İN'||_0x365527[0x1]==='IN'||_0x365527[0x1]===_0x1a24b2(0x200)||_0x365527[0x1]===_0x1a24b2(0x1aa)||_0x365527[0x1]['includes']('indian'))try{const _0x55d863=await got('https://coronavirus-19-api.herokuapp.com/countries/India')[_0x1a24b2(0x1e1)](async _0x1cc5e3=>{const _0x17dca6=_0x1a24b2;resp=JSON[_0x17dca6(0x20f)](_0x1cc5e3[_0x17dca6(0x1ee)]),await _0x407f33[_0x17dca6(0x1da)](_0x17dca6(0x1f7)+resp[_0x17dca6(0x1d7)]+_0x17dca6(0x1f2)+resp['todayCases']+_0x17dca6(0x1f3)+resp[_0x17dca6(0x1a9)]+_0x17dca6(0x1b6)+resp['todayDeaths']+_0x17dca6(0x1ca)+resp[_0x17dca6(0x1e8)]+_0x17dca6(0x1ac)+resp[_0x17dca6(0x1fb)]+_0x17dca6(0x1d0)+resp[_0x17dca6(0x20e)]+_0x17dca6(0x1bf)+resp[_0x17dca6(0x1c2)]);});}catch(_0x47c0f8){await _0x407f33['reply'](_0x1a24b2(0x206)+_0x47c0f8['message'],MessageType['text']);}else{if(_0x365527[0x1]==='cn'||_0x365527[0x1]==='Cn'||_0x365527[0x1]==='CN'||_0x365527[0x1][_0x1a24b2(0x1d5)]('china'))try{const _0x34c7e6=await got(_0x1a24b2(0x1d1))['then'](async _0x161d67=>{const _0x406c49=_0x1a24b2;resp=JSON[_0x406c49(0x20f)](_0x161d67[_0x406c49(0x1ee)]),await _0x407f33[_0x406c49(0x1da)]('🇨🇳\x20*Datas\x20for\x20China:*\x0a😷\x20*Total\x20Cases:*\x20'+resp['cases']+_0x406c49(0x1ba)+resp[_0x406c49(0x1bd)]+_0x406c49(0x1d4)+resp['deaths']+_0x406c49(0x1a6)+resp[_0x406c49(0x202)]+_0x406c49(0x1c3)+resp[_0x406c49(0x1e8)]+_0x406c49(0x1e5)+resp[_0x406c49(0x1fb)]+_0x406c49(0x1af)+resp[_0x406c49(0x20e)]+'\x0a🧪\x20*Total\x20Test:*\x20'+resp[_0x406c49(0x1c2)]);});}catch(_0x5533db){await _0x407f33[_0x1a24b2(0x1da)](_0x1a24b2(0x206)+_0x5533db[_0x1a24b2(0x205)],MessageType[_0x1a24b2(0x1d3)]);}else{if(_0x365527[0x1]==='gr'||_0x365527[0x1]==='Gr'||_0x365527[0x1]==='GR'||_0x365527[0x1][_0x1a24b2(0x1d5)]('greek'))try{const _0x44b46a=await got(_0x1a24b2(0x20c))['then'](async _0x210470=>{const _0x6d21=_0x1a24b2;resp=JSON[_0x6d21(0x20f)](_0x210470[_0x6d21(0x1ee)]),await _0x407f33[_0x6d21(0x1da)]('🇬🇷\x20*Datas\x20for\x20Greece:*\x0a😷\x20*Total\x20Cases:*\x20'+resp['cases']+_0x6d21(0x1ba)+resp[_0x6d21(0x1bd)]+_0x6d21(0x1d4)+resp[_0x6d21(0x1a9)]+_0x6d21(0x1a6)+resp[_0x6d21(0x202)]+'\x0a💊\x20*Total\x20Recovered:*\x20'+resp[_0x6d21(0x1e8)]+_0x6d21(0x1e5)+resp['active']+_0x6d21(0x1af)+resp[_0x6d21(0x20e)]+_0x6d21(0x1ec)+resp['totalTests']);});}catch(_0xb20b2e){await _0x407f33[_0x1a24b2(0x1da)](_0x1a24b2(0x206)+_0xb20b2e['message'],MessageType[_0x1a24b2(0x1d3)]);}else{if(_0x365527[0x1]==='fr'||_0x365527[0x1]==='Fr'||_0x365527[0x1]==='FR'||_0x365527[0x1]['includes']('france'))try{const _0xdffd1d=await got(_0x1a24b2(0x1ad))[_0x1a24b2(0x1e1)](async _0x4d04c2=>{const _0x228597=_0x1a24b2;resp=JSON[_0x228597(0x20f)](_0x4d04c2['body']),await _0x407f33[_0x228597(0x1da)](_0x228597(0x1e9)+resp['cases']+_0x228597(0x1ba)+resp['todayCases']+_0x228597(0x1d4)+resp[_0x228597(0x1a9)]+_0x228597(0x1a6)+resp[_0x228597(0x202)]+_0x228597(0x1c3)+resp[_0x228597(0x1e8)]+_0x228597(0x1e5)+resp[_0x228597(0x1fb)]+'\x0a🆘\x20*Critical\x20Cases:*\x20'+resp[_0x228597(0x20e)]+_0x228597(0x1ec)+resp[_0x228597(0x1c2)]);});}catch(_0x4a68e7){await _0x407f33['reply'](_0x1a24b2(0x206)+_0x4a68e7[_0x1a24b2(0x205)],MessageType['text']);}else{if(_0x365527[0x1]==='jp'||_0x365527[0x1]==='Jp'||_0x365527[0x1]==='JP'||_0x365527[0x1][_0x1a24b2(0x1d5)](_0x1a24b2(0x1ed)))try{const _0x1768f4=await got(_0x1a24b2(0x1d8))[_0x1a24b2(0x1e1)](async _0x179d65=>{const _0x42b690=_0x1a24b2;resp=JSON[_0x42b690(0x20f)](_0x179d65[_0x42b690(0x1ee)]),await _0x407f33[_0x42b690(0x1da)](_0x42b690(0x1fe)+resp[_0x42b690(0x1d7)]+_0x42b690(0x1ba)+resp[_0x42b690(0x1bd)]+'\x0a⚰️\x20*Total\x20Deaths:*\x20'+resp[_0x42b690(0x1a9)]+_0x42b690(0x1a6)+resp[_0x42b690(0x202)]+_0x42b690(0x1c3)+resp[_0x42b690(0x1e8)]+_0x42b690(0x1e5)+resp[_0x42b690(0x1fb)]+_0x42b690(0x1af)+resp[_0x42b690(0x20e)]+'\x0a🧪\x20*Total\x20Test:*\x20'+resp[_0x42b690(0x1c2)]);});}catch(_0x3b13a5){await _0x407f33[_0x1a24b2(0x1da)](_0x1a24b2(0x206)+_0x3b13a5[_0x1a24b2(0x205)],MessageType[_0x1a24b2(0x1d3)]);}else{if(_0x365527[0x1]==='kz'||_0x365527[0x1]==='Kz'||_0x365527[0x1]==='KZ'||_0x365527[0x1]['includes'](_0x1a24b2(0x1f8)))try{const _0x280c6b=await got('https://coronavirus-19-api.herokuapp.com/countries/Kazakhstan')[_0x1a24b2(0x1e1)](async _0x33322c=>{const _0x286ba7=_0x1a24b2;resp=JSON[_0x286ba7(0x20f)](_0x33322c[_0x286ba7(0x1ee)]),await _0x407f33[_0x286ba7(0x1da)](_0x286ba7(0x1e6)+resp[_0x286ba7(0x1d7)]+_0x286ba7(0x1ba)+resp['todayCases']+_0x286ba7(0x1d4)+resp[_0x286ba7(0x1a9)]+'\x0a☠️\x20*Daily\x20Deaths:*\x20'+resp[_0x286ba7(0x202)]+_0x286ba7(0x1c3)+resp[_0x286ba7(0x1e8)]+'\x0a😷\x20*Active\x20Cases:*\x20'+resp[_0x286ba7(0x1fb)]+_0x286ba7(0x1af)+resp['critical']+_0x286ba7(0x1ec)+resp['totalTests']);});}catch(_0x13b942){await _0x407f33[_0x1a24b2(0x1da)](_0x1a24b2(0x206)+_0x13b942[_0x1a24b2(0x205)],MessageType[_0x1a24b2(0x1d3)]);}else{if(_0x365527[0x1]==='pk'||_0x365527[0x1]==='Pk'||_0x365527[0x1]==='PK'||_0x365527[0x1][_0x1a24b2(0x1d5)]('pakistan'))try{const _0x1bb7a4=await got(_0x1a24b2(0x207))['then'](async _0x72801c=>{const _0x4f46ef=_0x1a24b2;resp=JSON[_0x4f46ef(0x20f)](_0x72801c[_0x4f46ef(0x1ee)]),await _0x407f33[_0x4f46ef(0x1da)]('🇵🇰\x20*Datas\x20for\x20Pakistan:*\x0a😷\x20*Total\x20Cases:*\x20'+resp[_0x4f46ef(0x1d7)]+_0x4f46ef(0x1ba)+resp['todayCases']+_0x4f46ef(0x1d4)+resp['deaths']+_0x4f46ef(0x1a6)+resp[_0x4f46ef(0x202)]+_0x4f46ef(0x1c3)+resp[_0x4f46ef(0x1e8)]+_0x4f46ef(0x1e5)+resp[_0x4f46ef(0x1fb)]+_0x4f46ef(0x1af)+resp[_0x4f46ef(0x20e)]+_0x4f46ef(0x1ec)+resp['totalTests']);});}catch(_0x197030){await _0x407f33[_0x1a24b2(0x1da)]('Error\x20:\x20\x0a'+_0x197030[_0x1a24b2(0x205)],MessageType[_0x1a24b2(0x1d3)]);}else{if(_0x365527[0x1]==='ru'||_0x365527[0x1]==='Ru'||_0x365527[0x1]==='RU'||_0x365527[0x1][_0x1a24b2(0x1d5)](_0x1a24b2(0x1fd)))try{const _0x43228d=await got(_0x1a24b2(0x1f1))['then'](async _0x3335b2=>{const _0x368c59=_0x1a24b2;resp=JSON[_0x368c59(0x20f)](_0x3335b2['body']),await _0x407f33[_0x368c59(0x1da)](_0x368c59(0x1e4)+resp['cases']+_0x368c59(0x1ba)+resp[_0x368c59(0x1bd)]+_0x368c59(0x1d4)+resp[_0x368c59(0x1a9)]+_0x368c59(0x1a6)+resp[_0x368c59(0x202)]+_0x368c59(0x1c3)+resp[_0x368c59(0x1e8)]+_0x368c59(0x1e5)+resp[_0x368c59(0x1fb)]+_0x368c59(0x1af)+resp[_0x368c59(0x20e)]+_0x368c59(0x1ec)+resp[_0x368c59(0x1c2)]);});}catch(_0x4694bb){await _0x407f33[_0x1a24b2(0x1da)](_0x1a24b2(0x206)+_0x4694bb[_0x1a24b2(0x205)],MessageType[_0x1a24b2(0x1d3)]);}else{if(_0x365527[0x1]==='id'||_0x365527[0x1]==='İd'||_0x365527[0x1]==='İD'||_0x365527[0x1]==='ıd'||_0x365527[0x1]==='Id'||_0x365527[0x1]==='ID'||_0x365527[0x1]['includes'](_0x1a24b2(0x1cf)))try{const _0x51b8db=await got('https://coronavirus-19-api.herokuapp.com/countries/Indonesia')[_0x1a24b2(0x1e1)](async _0x72c529=>{const _0x213906=_0x1a24b2;resp=JSON[_0x213906(0x20f)](_0x72c529['body']),await _0x407f33[_0x213906(0x1da)]('🇮🇩\x20*Datas\x20for\x20Indonesia:*\x0a😷\x20*Total\x20Cases:*\x20'+resp[_0x213906(0x1d7)]+_0x213906(0x1ba)+resp['todayCases']+'\x0a⚰️\x20*Total\x20Deaths:*\x20'+resp['deaths']+_0x213906(0x1a6)+resp[_0x213906(0x202)]+_0x213906(0x1c3)+resp[_0x213906(0x1e8)]+_0x213906(0x1e5)+resp[_0x213906(0x1fb)]+'\x0a🆘\x20*Critical\x20Cases:*\x20'+resp[_0x213906(0x20e)]+_0x213906(0x1ec)+resp[_0x213906(0x1c2)]);});}catch(_0x12792b){await _0x407f33[_0x1a24b2(0x1da)](_0x1a24b2(0x206)+_0x12792b[_0x1a24b2(0x205)],MessageType[_0x1a24b2(0x1d3)]);}else{if(_0x365527[0x1]==='lk'||_0x365527[0x1]==='Lk'||_0x365527[0x1]==='LK'||_0x365527[0x1]['includes'](_0x1a24b2(0x1fc)))try{const _0x2f5e15=await got(_0x1a24b2(0x1ea))['then'](async _0xf821d9=>{const _0xeb2a45=_0x1a24b2;resp=JSON[_0xeb2a45(0x20f)](_0xf821d9['body']),await _0x407f33[_0xeb2a45(0x1da)](_0xeb2a45(0x1ff)+resp[_0xeb2a45(0x1d7)]+'\x0a🏥\x20*Daily\x20Cases:*\x20'+resp[_0xeb2a45(0x1bd)]+_0xeb2a45(0x1d4)+resp['deaths']+_0xeb2a45(0x1a6)+resp[_0xeb2a45(0x202)]+_0xeb2a45(0x1c3)+resp[_0xeb2a45(0x1e8)]+_0xeb2a45(0x1e5)+resp[_0xeb2a45(0x1fb)]+_0xeb2a45(0x1af)+resp['critical']+_0xeb2a45(0x1ec)+resp['totalTests']);});}catch(_0x153a4b){await _0x407f33[_0x1a24b2(0x1da)](_0x1a24b2(0x206)+_0x153a4b['message'],MessageType[_0x1a24b2(0x1d3)]);}else return await _0x407f33[_0x1a24b2(0x1cc)][_0x1a24b2(0x1b8)](_0x407f33[_0x1a24b2(0x1df)],Clang[_0x1a24b2(0x1b5)],MessageType[_0x1a24b2(0x1d3)]);}}}}}}}}}}}}}}}}));
    
}
}


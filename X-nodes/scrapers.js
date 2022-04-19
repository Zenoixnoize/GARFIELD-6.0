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
var _0x426cdf=_0x1ab6;(function(_0x311514,_0x460aad){var _0x4fa3e9=_0x1ab6,_0x5d83df=_0x311514();while(!![]){try{var _0x1c57cc=-parseInt(_0x4fa3e9(0x183))/0x1+-parseInt(_0x4fa3e9(0x181))/0x2*(parseInt(_0x4fa3e9(0x187))/0x3)+-parseInt(_0x4fa3e9(0x178))/0x4*(-parseInt(_0x4fa3e9(0x190))/0x5)+-parseInt(_0x4fa3e9(0x172))/0x6+-parseInt(_0x4fa3e9(0x19d))/0x7+-parseInt(_0x4fa3e9(0x174))/0x8*(-parseInt(_0x4fa3e9(0x1a6))/0x9)+parseInt(_0x4fa3e9(0x18d))/0xa;if(_0x1c57cc===_0x460aad)break;else _0x5d83df['push'](_0x5d83df['shift']());}catch(_0x3d8ef2){_0x5d83df['push'](_0x5d83df['shift']());}}}(_0x155a,0x3cd5b));const Language=require(_0x426cdf(0x175)),Lang=Language['getString']('scrapers'),Glang=Language[_0x426cdf(0x197)]('github'),Slang=Language['getString']('lyrics'),Clang=Language[_0x426cdf(0x197)]('covid'),wiki=require(_0x426cdf(0x199))[_0x426cdf(0x19b)];var gis=require('g-i-s'),dlang_dsc='',closer_res='',dlang_lang='',dlang_similarity='',dlang_other='',dlang_input='';config['LANG']=='TR'&&(dlang_dsc=_0x426cdf(0x1a3),closer_res=_0x426cdf(0x189),dlang_lang='Dil:',dlang_similarity=_0x426cdf(0x198),dlang_other='Diğer\x20Diller',dlang_input=_0x426cdf(0x17c));config['LANG']=='EN'&&(dlang_dsc=_0x426cdf(0x19a),closer_res=_0x426cdf(0x17f),dlang_lang=_0x426cdf(0x1a4),dlang_similarity=_0x426cdf(0x17e),dlang_other=_0x426cdf(0x188),dlang_input=_0x426cdf(0x196));function _0x1ab6(_0x2d4e34,_0x5432f8){var _0x155a0f=_0x155a();return _0x1ab6=function(_0x1ab67f,_0x3fbb4f){_0x1ab67f=_0x1ab67f-0x16e;var _0x588cc2=_0x155a0f[_0x1ab67f];return _0x588cc2;},_0x1ab6(_0x2d4e34,_0x5432f8);}function _0x155a(){var _0x4c073e=['Обработанный\x20текст:','निकटतम\x20परिणाम:','अन्य\x20भाषाएँ','İşlenen\x20Metin:','Ən\x20yaxın\x20nəticə:','Similarity:','Closest\x20Result:','Tebak\x20bahasa\x20pesan\x20yang\x20dibalas.','1268yWDWpe','Bənzərlik:','277428JGcCTV','നാവ്:','മറുപടി\x20നൽകിയ\x20സന്ദേശത്തിന്റെ\x20ഭാഷ\x20ess\x20ഹിക്കുക.','Adivinhe\x20o\x20idioma\x20da\x20mensagem\x20respondida.','747bJtjMk','Other\x20Languages','En\x20Yakın\x20Sonuç:','Угадай\x20язык\x20ответного\x20сообщения.','Bahasa\x20Lainnya','Teks\x20yang\x20Diproses:','6424280QKSORH','Texto\x20Processado:','സമാനത:','6905FGHYuH','Lengua:','Otros\x20idiomas:','İşlənmiş\x20Mətn:','Língua:','Resultado\x20mais\x20próximo:','Processed\x20Text:','getString','Benzerlik:','wikijs','Guess\x20the\x20language\x20of\x20the\x20replied\x20message.','default','Язык:','1683451bYtBde','Kesamaan:','പ്രോസസ്സ്\x20ചെയ്ത\x20വാചകം:','Başqa\x20Dillər','Adivina\x20el\x20idioma\x20del\x20mensaje\x20respondido.','LANG','Yanıtlanan\x20mesajın\x20dilini\x20tahmin\x20eder.','Language:','Hasil\x20Terdekat:','171QloxIz','Другие\x20языки','Cavablanan\x20mesajın\x20dilini\x20təxmin\x20edin.','Resultado\x20más\x20cercano:','Dil:','1455060Aupsrc','Similaridade:','206536WWfwty','../language','മറ്റ്\x20ഭാഷകൾ','समानता:','100VNiysh'];_0x155a=function(){return _0x4c073e;};return _0x155a();}config[_0x426cdf(0x1a2)]=='AZ'&&(dlang_dsc=_0x426cdf(0x16f),closer_res=_0x426cdf(0x17d),dlang_lang=_0x426cdf(0x171),dlang_similarity=_0x426cdf(0x182),dlang_other=_0x426cdf(0x1a0),dlang_input=_0x426cdf(0x193));config['LANG']=='ML'&&(dlang_dsc=_0x426cdf(0x185),closer_res='ഏറ്റവും\x20അടുത്ത\x20ഫലം:',dlang_lang=_0x426cdf(0x184),dlang_similarity=_0x426cdf(0x18f),dlang_other=_0x426cdf(0x176),dlang_input=_0x426cdf(0x19f));config['LANG']=='HI'&&(dlang_dsc='उत्तर\x20दिए\x20गए\x20संदेश\x20की\x20भाषा\x20का\x20अनुमान\x20लगाएं',closer_res=_0x426cdf(0x17a),dlang_lang='जुबान:',dlang_similarity=_0x426cdf(0x177),dlang_other=_0x426cdf(0x17b),dlang_input='संसाधित\x20पाठ:');config[_0x426cdf(0x1a2)]=='ES'&&(dlang_dsc=_0x426cdf(0x1a1),closer_res=_0x426cdf(0x170),dlang_lang=_0x426cdf(0x191),dlang_similarity='Semejanza:',dlang_other=_0x426cdf(0x192),dlang_input='Texto\x20procesado:');config[_0x426cdf(0x1a2)]=='PT'&&(dlang_dsc=_0x426cdf(0x186),closer_res=_0x426cdf(0x195),dlang_lang=_0x426cdf(0x194),dlang_similarity=_0x426cdf(0x173),dlang_other='Outras\x20línguas',dlang_input=_0x426cdf(0x18e));config[_0x426cdf(0x1a2)]=='ID'&&(dlang_dsc=_0x426cdf(0x180),closer_res=_0x426cdf(0x1a5),dlang_lang='Lidah:',dlang_similarity=_0x426cdf(0x19e),dlang_other=_0x426cdf(0x18b),dlang_input=_0x426cdf(0x18c));config[_0x426cdf(0x1a2)]=='RU'&&(dlang_dsc=_0x426cdf(0x18a),closer_res='Ближайший\x20результат:',dlang_lang=_0x426cdf(0x19c),dlang_similarity='Сходствo:',dlang_other=_0x426cdf(0x16e),dlang_input=_0x426cdf(0x179));

if (config.Auroraxc == 'off' || config.Auroraxc == 'OFF') {
if (config.WORKTYPE == 'private') var _0x18cba9=_0x1d45;(function(_0x2c4dc6,_0x19564d){var _0x572cac=_0x1d45,_0x51e37=_0x2c4dc6();while(!![]){try{var _0x394847=parseInt(_0x572cac(0x15e))/0x1+parseInt(_0x572cac(0x146))/0x2*(-parseInt(_0x572cac(0x1d8))/0x3)+-parseInt(_0x572cac(0x228))/0x4*(-parseInt(_0x572cac(0x12e))/0x5)+-parseInt(_0x572cac(0x13e))/0x6+-parseInt(_0x572cac(0x238))/0x7+-parseInt(_0x572cac(0x13d))/0x8*(parseInt(_0x572cac(0x23b))/0x9)+parseInt(_0x572cac(0x1c8))/0xa;if(_0x394847===_0x19564d)break;else _0x51e37['push'](_0x51e37['shift']());}catch(_0x3accea){_0x51e37['push'](_0x51e37['shift']());}}}(_0x1f7c,0x729bd));{Garfield[_0x18cba9(0x167)]({'pattern':_0x18cba9(0x214),'desc':Lang['TRANSLATE_DESC'],'usage':Lang['TRANSLATE_USAGE'],'fromMe':!![]},async(_0x3c15ca,_0x2606d3)=>{var _0x50f550=_0x18cba9;if(!_0x3c15ca[_0x50f550(0x120)])return await _0x3c15ca[_0x50f550(0x16e)][_0x50f550(0x21d)](_0x3c15ca[_0x50f550(0x1bf)],Lang[_0x50f550(0x15f)],MessageType[_0x50f550(0x1c7)]);return ceviri=await translatte(_0x3c15ca['reply_message'][_0x50f550(0x141)],{'from':_0x2606d3[0x1]===''?_0x50f550(0x22b):_0x2606d3[0x1],'to':_0x2606d3[0x2]===''?config[_0x50f550(0x176)]:_0x2606d3[0x2]}),'text'in ceviri?await _0x3c15ca['reply'](_0x50f550(0x14a)+Lang['LANG']+':*\x20```'+(_0x2606d3[0x1]===''?_0x50f550(0x22b):_0x2606d3[0x1])+_0x50f550(0x224)+'*◀️\x20'+Lang[_0x50f550(0x199)]+_0x50f550(0x195)+(_0x2606d3[0x2]===''?config[_0x50f550(0x176)]:_0x2606d3[0x2])+_0x50f550(0x224)+'*🔎\x20'+Lang['RESULT']+_0x50f550(0x1f5)+ceviri[_0x50f550(0x1c7)]+_0x50f550(0x125)):await _0x3c15ca[_0x50f550(0x16e)][_0x50f550(0x21d)](_0x3c15ca[_0x50f550(0x1bf)],Lang[_0x50f550(0x18b)],MessageType[_0x50f550(0x1c7)]);});var auto_dsc='',alr_on_bio='',alr_off_bio='',succ_on_bio='',succ_off_bio='';config[_0x18cba9(0x176)]=='TR'&&(auto_dsc=_0x18cba9(0x16d),alr_on_bio=_0x18cba9(0x1a5),alr_off_bio=_0x18cba9(0x143),succ_on_bio=_0x18cba9(0x21e),succ_off_bio=_0x18cba9(0x165)),config[_0x18cba9(0x176)]=='EN'&&(auto_dsc='Add\x20live\x20clock\x20to\x20your\x20bio!',alr_on_bio=_0x18cba9(0x1f9),alr_off_bio=_0x18cba9(0x19c),succ_on_bio=_0x18cba9(0x1d4),succ_off_bio=_0x18cba9(0x217)),config[_0x18cba9(0x176)]=='AZ'&&(auto_dsc=_0x18cba9(0x220),alr_on_bio=_0x18cba9(0x201),alr_off_bio=_0x18cba9(0x15c),succ_on_bio=_0x18cba9(0x1a4),succ_off_bio=_0x18cba9(0x239)),config[_0x18cba9(0x176)]=='HI'&&(auto_dsc=_0x18cba9(0x237),alr_on_bio=_0x18cba9(0x168),alr_off_bio='Autobio\x20वर्तमान\x20में\x20बंद\x20है!',succ_on_bio=_0x18cba9(0x18c),succ_off_bio=_0x18cba9(0x1ab)),config[_0x18cba9(0x176)]=='ML'&&(auto_dsc=_0x18cba9(0x130),alr_on_bio='Autobio\x20ഇതിനകം\x20തുറന്നു!',alr_off_bio=_0x18cba9(0x1e0),succ_on_bio=_0x18cba9(0x1b2),succ_off_bio=_0x18cba9(0x1e9)),config[_0x18cba9(0x176)]=='PT'&&(auto_dsc='Adicione\x20um\x20relógio\x20ao\x20vivo\x20à\x20sua\x20biografia!',alr_on_bio=_0x18cba9(0x1dd),alr_off_bio=_0x18cba9(0x216),succ_on_bio=_0x18cba9(0x1eb),succ_off_bio='Autobio\x20fechado\x20com\x20sucesso!'),config[_0x18cba9(0x176)]=='RU'&&(auto_dsc=_0x18cba9(0x173),alr_on_bio=_0x18cba9(0x155),alr_off_bio=_0x18cba9(0x1c3),succ_on_bio='Autobio\x20успешно\x20открыт!',succ_off_bio=_0x18cba9(0x162)),config[_0x18cba9(0x176)]=='ES'&&(auto_dsc=_0x18cba9(0x14e),alr_on_bio='¡Autobio\x20ya\x20está\x20abierto!',alr_off_bio=_0x18cba9(0x208),succ_on_bio=_0x18cba9(0x1fc),succ_off_bio=_0x18cba9(0x219)),config[_0x18cba9(0x176)]=='ID'&&(auto_dsc='Tambahkan\x20jam\x20langsung\x20ke\x20bio\x20Anda!',alr_on_bio=_0x18cba9(0x188),alr_off_bio=_0x18cba9(0x1d3),succ_on_bio=_0x18cba9(0x225),succ_off_bio=_0x18cba9(0x166)),Garfield[_0x18cba9(0x167)]({'pattern':_0x18cba9(0x1b9),'fromMe':!![],'desc':auto_dsc,'usage':_0x18cba9(0x14f)},async(_0x3377ad,_0x28a18f)=>{var _0x37d983=_0x18cba9;const _0x123c69=''+config[_0x37d983(0x1f8)];if(_0x28a18f[0x1]=='on'){if(_0x123c69==_0x37d983(0x17b))return await _0x3377ad[_0x37d983(0x16e)][_0x37d983(0x21d)](_0x3377ad[_0x37d983(0x1bf)],'*'+alr_on_bio+'*',MessageType[_0x37d983(0x1c7)]);else await heroku['patch'](baseURI+_0x37d983(0x1b0),{'body':{['AUTO_BİO']:'true'}}),await _0x3377ad[_0x37d983(0x16e)]['sendMessage'](_0x3377ad[_0x37d983(0x1bf)],'*'+succ_on_bio+'*',MessageType['text']);}else{if(_0x28a18f[0x1]==_0x37d983(0x1da)){if(_0x123c69!==_0x37d983(0x17b))return await _0x3377ad[_0x37d983(0x16e)][_0x37d983(0x21d)](_0x3377ad['jid'],'*'+alr_off_bio+'*',MessageType[_0x37d983(0x1c7)]);else await heroku[_0x37d983(0x231)](baseURI+_0x37d983(0x1b0),{'body':{[_0x37d983(0x150)]:_0x37d983(0x1ba)}}),await _0x3377ad[_0x37d983(0x16e)]['sendMessage'](_0x3377ad[_0x37d983(0x1bf)],'*'+succ_off_bio+'*',MessageType['text']);}}}),Garfield['addXnodes']({'pattern':_0x18cba9(0x1b8),'fromMe':!![],'desc':dlang_dsc},async(_0x32a222,_0x1f3a37)=>{var _0x22ade8=_0x18cba9;if(!_0x32a222[_0x22ade8(0x120)])return await _0x32a222['client'][_0x22ade8(0x21d)](_0x32a222[_0x22ade8(0x1bf)],Lang[_0x22ade8(0x15f)],MessageType[_0x22ade8(0x1c7)]);const _0x524e3d=_0x32a222[_0x22ade8(0x120)][_0x22ade8(0x1c7)];var _0x49d1ea=lngDetector[_0x22ade8(0x204)](_0x524e3d);async function _0x56c563(_0x5bbd0f){var _0x17f9de=_0x22ade8;return _0x5bbd0f['charAt'](0x0)['toUpperCase']()+_0x5bbd0f[_0x17f9de(0x209)](0x1)[_0x17f9de(0x172)]();}var _0x57d0a1=await _0x56c563(_0x49d1ea[0x0][0x0]),_0x962b48=_0x49d1ea[0x0][0x1][_0x22ade8(0x203)](),_0x12b4b6=await _0x56c563(_0x49d1ea[0x1][0x0]),_0x4a7bd8=_0x49d1ea[0x1][0x1][_0x22ade8(0x203)](),_0x530381=await _0x56c563(_0x49d1ea[0x2][0x0]),_0x1af34c=_0x49d1ea[0x2][0x1][_0x22ade8(0x203)](),_0x294778=await _0x56c563(_0x49d1ea[0x3][0x0]),_0x577fa0=_0x49d1ea[0x3][0x1][_0x22ade8(0x203)]();const _0x57493f='*'+dlang_input+'*\x20'+'_'+_0x524e3d+'_\x20\x0a',_0x40760e='*'+closer_res+'*\x20'+'_'+_0x57d0a1+'_\x0a*'+dlang_similarity+'*\x20'+'_'+_0x962b48+_0x22ade8(0x171),_0x27af93='```[\x20'+dlang_other+_0x22ade8(0x184),_0x3edb9e=_0x22ade8(0x197)+dlang_lang+'*\x20'+'_'+_0x12b4b6+'_\x0a*'+dlang_similarity+'*\x20'+'_'+_0x4a7bd8+'_\x20\x0a',_0x4064ee=_0x22ade8(0x135)+dlang_lang+'*\x20'+'_'+_0x530381+'_\x0a*'+dlang_similarity+'*\x20'+'_'+_0x1af34c+_0x22ade8(0x1de),_0x43a25b=_0x22ade8(0x128)+dlang_lang+'*\x20'+'_'+_0x294778+'_\x0a*'+dlang_similarity+'*\x20'+'_'+_0x577fa0+'_',_0x36ba67=_0x57493f+_0x40760e+_0x27af93+_0x3edb9e+_0x4064ee+_0x43a25b;await _0x32a222['client']['sendMessage'](_0x32a222[_0x22ade8(0x1bf)],_0x36ba67,MessageType[_0x22ade8(0x1c7)]);}),Garfield['addXnodes']({'pattern':_0x18cba9(0x16c),'fromMe':!![]},async(_0x60dbdc,_0x7d73e0)=>{var _0x657526=_0x18cba9;if(_0x7d73e0[0x1]===undefined||_0x7d73e0[0x2]==undefined||_0x7d73e0[0x3]==undefined)return await _0x60dbdc['client'][_0x657526(0x21d)](_0x60dbdc[_0x657526(0x1bf)],Lang[_0x657526(0x183)],MessageType[_0x657526(0x1c7)]);let _0x35cdef={'amount':parseFloat(_0x7d73e0[0x1])[_0x657526(0x123)](0x2)[_0x657526(0x19d)](/\.0+$/,''),'from':_0x7d73e0[0x2][_0x657526(0x18f)](),'to':_0x7d73e0[0x3][_0x657526(0x18f)]()};try{result=await exchangeRates()[_0x657526(0x144)]()['symbols']([_0x35cdef['to']])[_0x657526(0x17f)](_0x35cdef['from'])['fetch'](),result=parseFloat(result)['toFixed'](0x2)[_0x657526(0x19d)](/\.0+$/,''),await _0x60dbdc[_0x657526(0x181)](_0x657526(0x125)+_0x35cdef[_0x657526(0x233)]+'\x20'+_0x35cdef[_0x657526(0x20a)]+_0x657526(0x1bb)+result+'\x20'+_0x35cdef['to']+_0x657526(0x125));}catch(_0x5115c1){if(_0x5115c1 instanceof ExchangeRatesError)await _0x60dbdc[_0x657526(0x16e)]['sendMessage'](_0x60dbdc[_0x657526(0x1bf)],Lang[_0x657526(0x229)],MessageType[_0x657526(0x1c7)]);else await _0x60dbdc[_0x657526(0x16e)][_0x657526(0x21d)](_0x60dbdc[_0x657526(0x1bf)],Lang['UNKNOWN_ERROR'],MessageType[_0x657526(0x1c7)]),console[_0x657526(0x1e2)](_0x5115c1);}}),config[_0x18cba9(0x176)]=='TR'||config['LANG']=='AZ'?Garfield[_0x18cba9(0x167)]({'pattern':_0x18cba9(0x17d),'fromMe':!![],'desc':Lang[_0x18cba9(0x121)]},async(_0x191580,_0x139a68)=>{var _0x1f8ed0=_0x18cba9;if(_0x139a68[0x1]===undefined||_0x139a68[0x1]=='')return;let _0x1f01d4='si',_0x56a44c=_0x139a68[0x1],_0x408558=0x1;(langMatch=_0x139a68[0x1][_0x1f8ed0(0x1e1)](_0x1f8ed0(0x127)))&&(_0x1f01d4=langMatch[0x1],_0x56a44c=_0x56a44c['replace'](langMatch[0x0],''));(speedMatch=_0x139a68[0x1][_0x1f8ed0(0x1e1)](_0x1f8ed0(0x159)))&&(_0x408558=parseFloat(speedMatch[0x1]),_0x56a44c=_0x56a44c[_0x1f8ed0(0x19d)](speedMatch[0x0],''));var _0x2c6eb7=await googleTTS[_0x1f8ed0(0x205)]({'text':_0x56a44c,'voice':_0x1f01d4});await _0x191580[_0x1f8ed0(0x16e)][_0x1f8ed0(0x21d)](_0x191580[_0x1f8ed0(0x1bf)],_0x2c6eb7,MessageType[_0x1f8ed0(0x218)],{'mimetype':Mimetype[_0x1f8ed0(0x20c)],'ptt':!![]});}):Garfield['addXnodes']({'pattern':_0x18cba9(0x17d),'fromMe':!![],'desc':Lang[_0x18cba9(0x121)]},async(_0x3cedad,_0x2e7146)=>{var _0x275a0a=_0x18cba9;if(_0x2e7146[0x1]===undefined||_0x2e7146[0x1]=='')return;let _0x10eade='si',_0x49174e=_0x2e7146[0x1],_0x2896d9=0x1;(langMatch=_0x2e7146[0x1][_0x275a0a(0x1e1)](_0x275a0a(0x127)))&&(_0x10eade=langMatch[0x1],_0x49174e=_0x49174e['replace'](langMatch[0x0],''));(speedMatch=_0x2e7146[0x1][_0x275a0a(0x1e1)](_0x275a0a(0x159)))&&(_0x2896d9=parseFloat(speedMatch[0x1]),_0x49174e=_0x49174e['replace'](speedMatch[0x0],''));var _0xc69977=await googleTTS[_0x275a0a(0x205)]({'text':_0x49174e,'voice':_0x10eade});await _0x3cedad['client'][_0x275a0a(0x21d)](_0x3cedad['jid'],_0xc69977,MessageType[_0x275a0a(0x218)],{'mimetype':Mimetype['mp4Audio'],'ptt':!![]});}),Garfield[_0x18cba9(0x167)]({'pattern':_0x18cba9(0x164),'fromMe':!![],'desc':Lang[_0x18cba9(0x15d)]},async(_0x22af97,_0x96d9b3)=>{var _0x35e4fb=_0x18cba9;if(_0x96d9b3[0x1]==='')return await _0x22af97[_0x35e4fb(0x16e)][_0x35e4fb(0x21d)](_0x22af97[_0x35e4fb(0x1bf)],Lang[_0x35e4fb(0x200)],MessageType[_0x35e4fb(0x1c7)]);let _0x15df01=await yts(_0x96d9b3[0x1]);_0x15df01=_0x15df01['all'];if(_0x15df01[_0x35e4fb(0x1d0)]<0x1)return await _0x22af97[_0x35e4fb(0x16e)][_0x35e4fb(0x21d)](_0x22af97[_0x35e4fb(0x1bf)],Lang[_0x35e4fb(0x13b)],MessageType[_0x35e4fb(0x1c7)]);var _0x5469c3=await _0x22af97[_0x35e4fb(0x16e)]['sendMessage'](_0x22af97['jid'],Lang[_0x35e4fb(0x227)],MessageType[_0x35e4fb(0x1c7)]);let _0x5a271f=_0x15df01[0x0][_0x35e4fb(0x1fe)][_0x35e4fb(0x19d)]('\x20','+'),_0x49db63=ytdl(_0x15df01[0x0][_0x35e4fb(0x158)],{'quality':_0x35e4fb(0x226)});got[_0x35e4fb(0x1cd)](_0x15df01[0x0][_0x35e4fb(0x21f)])[_0x35e4fb(0x153)](fs[_0x35e4fb(0x12a)](_0x5a271f+'.jpg')),ffmpeg(_0x49db63)[_0x35e4fb(0x163)](0x80)[_0x35e4fb(0x1bd)]('./'+_0x5a271f+_0x35e4fb(0x132))['on'](_0x35e4fb(0x1cf),async()=>{var _0x529162=_0x35e4fb;const _0x34d1aa=new ID3Writer(fs[_0x529162(0x1c0)]('./'+_0x5a271f+_0x529162(0x132)));_0x34d1aa[_0x529162(0x20b)](_0x529162(0x222),_0x15df01[0x0][_0x529162(0x1fe)])[_0x529162(0x20b)](_0x529162(0x14b),[_0x15df01[0x0][_0x529162(0x1b6)]['name']])[_0x529162(0x20b)](_0x529162(0x12c),{'type':0x3,'data':fs[_0x529162(0x1c0)](_0x5a271f+'.jpg'),'description':_0x15df01[0x0][_0x529162(0x1ad)]}),_0x34d1aa['addTag'](),_0x5469c3=await _0x22af97[_0x529162(0x16e)][_0x529162(0x21d)](_0x22af97[_0x529162(0x1bf)],Lang[_0x529162(0x13f)],MessageType['text']),await _0x22af97['client'][_0x529162(0x21d)](_0x22af97[_0x529162(0x1bf)],Buffer[_0x529162(0x20a)](_0x34d1aa[_0x529162(0x1c5)]),MessageType[_0x529162(0x218)],{'mimetype':Mimetype[_0x529162(0x20c)],'ptt':![]});});}),Garfield[_0x18cba9(0x167)]({'pattern':_0x18cba9(0x1b4),'fromMe':![],'desc':Lang[_0x18cba9(0x151)]},async(_0x5d993b,_0x421971)=>{var _0x2ec567=_0x18cba9;const _0x4ce26d=_0x2ec567(0x1ae)+'VERSION:6.0\x0a'+'FN:'+xv364[_0x2ec567(0x1a1)]+'\x0a'+_0x2ec567(0x131)+_0x2ec567(0x213)+xv364[_0x2ec567(0x137)]+':'+xv364[_0x2ec567(0x137)]+'\x20\x0a'+_0x2ec567(0x140);await _0x5d993b[_0x2ec567(0x16e)][_0x2ec567(0x21d)](_0x5d993b[_0x2ec567(0x1bf)],{'displayname':'Garfield','vcard':_0x4ce26d},MessageType['contact']);}),Garfield[_0x18cba9(0x167)]({'pattern':_0x18cba9(0x160),'fromMe':!![],'desc':Lang[_0x18cba9(0x1c4)]},async(_0x4569f0,_0x16ca56)=>{var _0x725653=_0x18cba9;if(_0x16ca56[0x1]==='')return await _0x4569f0[_0x725653(0x16e)]['sendMessage'](_0x4569f0['jid'],Lang['NEED_VIDEO'],MessageType[_0x725653(0x1c7)]);var _0x3b912f='';try{if(_0x16ca56[0x1][_0x725653(0x1dc)](_0x725653(0x1b3))){var _0x2a1d2a=_0x16ca56[0x1]['replace'](_0x725653(0x15b),''),_0xe1c631=_0x2a1d2a[_0x725653(0x1ec)]('/')[0x3];_0x3b912f=_0xe1c631;}else _0x3b912f=_0x16ca56[0x1][_0x725653(0x1ec)]('/')[0x3];}catch{return await _0x4569f0['client'][_0x725653(0x21d)](_0x4569f0[_0x725653(0x1bf)],Lang[_0x725653(0x13b)],MessageType[_0x725653(0x1c7)]);}var _0x4b0813=await _0x4569f0[_0x725653(0x16e)][_0x725653(0x21d)](_0x4569f0[_0x725653(0x1bf)],Lang[_0x725653(0x1f2)],MessageType[_0x725653(0x1c7)]),_0xb150b2=ytdl(_0x3b912f,{'filter':_0x330293=>_0x330293['container']==='mp4'&&['480p','360p','240p',_0x725653(0x1d5)][_0x725653(0x16b)](()=>!![])});_0xb150b2[_0x725653(0x153)](fs['createWriteStream']('./'+_0x3b912f+_0x725653(0x126))),_0xb150b2['on'](_0x725653(0x1cf),async()=>{var _0x14da50=_0x725653;_0x4b0813=await _0x4569f0[_0x14da50(0x16e)][_0x14da50(0x21d)](_0x4569f0[_0x14da50(0x1bf)],Lang[_0x14da50(0x147)],MessageType[_0x14da50(0x1c7)]),await _0x4569f0[_0x14da50(0x16e)][_0x14da50(0x21d)](_0x4569f0[_0x14da50(0x1bf)],fs[_0x14da50(0x1c0)]('./'+_0x3b912f+_0x14da50(0x126)),MessageType[_0x14da50(0x154)],{'mimetype':Mimetype[_0x14da50(0x180)]});});}),Garfield[_0x18cba9(0x167)]({'pattern':_0x18cba9(0x1f3),'fromMe':!![],'desc':Lang[_0x18cba9(0x1ed)]},async(_0x584d39,_0x27c898)=>{var _0x4d7f67=_0x18cba9;if(_0x27c898[0x1]==='')return await _0x584d39[_0x4d7f67(0x16e)][_0x4d7f67(0x21d)](_0x584d39[_0x4d7f67(0x1bf)],Lang[_0x4d7f67(0x1a2)],MessageType[_0x4d7f67(0x1c7)]);var _0x52edca=await _0x584d39['client']['sendMessage'](_0x584d39[_0x4d7f67(0x1bf)],Lang[_0x4d7f67(0x21a)],MessageType[_0x4d7f67(0x1c7)]);try{var _0x16edc1=await yts(_0x27c898[0x1]);}catch{return await _0x584d39[_0x4d7f67(0x16e)][_0x4d7f67(0x21d)](_0x584d39[_0x4d7f67(0x1bf)],Lang[_0x4d7f67(0x133)],MessageType['text']);}var _0x1dc83d='';_0x16edc1[_0x4d7f67(0x1fb)][_0x4d7f67(0x16b)](_0x2bc0b2=>{_0x1dc83d+='*'+_0x2bc0b2['title']+'*\x20-\x20'+_0x2bc0b2['url']+'\x0a';}),await _0x584d39[_0x4d7f67(0x16e)][_0x4d7f67(0x21d)](_0x584d39[_0x4d7f67(0x1bf)],_0x1dc83d,MessageType['text']),await _0x52edca[_0x4d7f67(0x1e4)]();}),Garfield['addXnodes']({'pattern':_0x18cba9(0x1ea),'fromMe':!![],'desc':Lang[_0x18cba9(0x18d)]},async(_0x3c2564,_0x377043)=>{var _0x59b088=_0x18cba9;if(_0x377043[0x1]==='')return await _0x3c2564[_0x59b088(0x16e)][_0x59b088(0x21d)](_0x3c2564[_0x59b088(0x1bf)],Lang['NEED_WORDS'],MessageType[_0x59b088(0x1c7)]);var _0x4201e2=await _0x3c2564[_0x59b088(0x16e)][_0x59b088(0x21d)](_0x3c2564['jid'],Lang[_0x59b088(0x20e)],MessageType['text']),_0x49f941=await wiki({'apiUrl':_0x59b088(0x1b1)+config[_0x59b088(0x176)]+_0x59b088(0x1f7)})[_0x59b088(0x1e3)](_0x377043[0x1]),_0x6c0038=await _0x49f941[_0x59b088(0x12b)]();await _0x3c2564[_0x59b088(0x16e)][_0x59b088(0x21d)](_0x3c2564[_0x59b088(0x1bf)],_0x6c0038,MessageType['text']),await _0x4201e2[_0x59b088(0x1e4)]();}),Garfield[_0x18cba9(0x167)]({'pattern':_0x18cba9(0x1ce),'fromMe':!![],'desc':Lang[_0x18cba9(0x198)]},async(_0x5ce5ca,_0x1e4735)=>{var _0x341628=_0x18cba9;if(_0x1e4735[0x1]==='')return await _0x5ce5ca[_0x341628(0x16e)][_0x341628(0x21d)](_0x5ce5ca[_0x341628(0x1bf)],Lang[_0x341628(0x1a2)],MessageType[_0x341628(0x1c7)]);gis(_0x1e4735[0x1],async(_0x5a1a6c,_0x2cf519)=>{var _0x346009=_0x341628;for(var _0x96ae0=0x0;_0x96ae0<(_0x2cf519[_0x346009(0x1d0)]<0x5?_0x2cf519[_0x346009(0x1d0)]:0x5);_0x96ae0++){var _0xd6961a=got(_0x2cf519[_0x96ae0]['url'],{'https':{'rejectUnauthorized':![]}}),_0x3224de=_0xd6961a[_0x346009(0x1ee)]();_0x3224de[_0x346009(0x194)](async _0x32a00f=>{var _0x159b1c=_0x346009;await _0x5ce5ca[_0x159b1c(0x16e)][_0x159b1c(0x21d)](_0x5ce5ca[_0x159b1c(0x1bf)],_0x32a00f,MessageType[_0x159b1c(0x21f)]);});}_0x5ce5ca[_0x346009(0x181)](Lang[_0x346009(0x1d2)][_0x346009(0x190)](_0x2cf519[_0x346009(0x1d0)]<0x5?_0x2cf519[_0x346009(0x1d0)]:0x5,_0x1e4735[0x1]));});}),Garfield[_0x18cba9(0x167)]({'pattern':_0x18cba9(0x1ff),'fromMe':!![],'desc':Glang['GİTHUB_DESC']},async(_0x224fe7,_0x491c35)=>{var _0x95cde2=_0x18cba9;const _0x181cdc=_0x491c35[0x1];if(_0x181cdc==='')return await _0x224fe7['client'][_0x95cde2(0x21d)](_0x224fe7['jid'],Glang[_0x95cde2(0x1e5)],MessageType[_0x95cde2(0x1c7)]);await axios[_0x95cde2(0x1e7)]('https://videfikri.com/api/github/?username='+_0x181cdc)[_0x95cde2(0x194)](async _0x573a7b=>{var _0x544a6d=_0x95cde2;const {hireable:_0x4c0381,company:_0x380450,profile_pic:_0xc91226,username:_0x495801,fullname:_0x28c3ef,blog:_0x4c934e,location:_0x276ed9,email:_0x2e6baf,public_repository:_0x5af44e,biografi:_0x250f64,following:_0x128cf3,followers:_0x59d54c,public_gists:_0x1a3bcd,profile_url:_0x575cc3,last_updated:_0x291c18,joined_on:_0x3d08b9}=_0x573a7b['data'][_0x544a6d(0x19e)],_0x1b096e=await axios[_0x544a6d(0x1e7)](_0xc91226,{'responseType':_0x544a6d(0x1cc)}),_0x1d1a9f='*'+Glang[_0x544a6d(0x12f)]+'*\x20'+_0x495801+_0x544a6d(0x17e)+Glang[_0x544a6d(0x1f6)]+'*\x20'+_0x28c3ef+'\x20\x0a*'+Glang[_0x544a6d(0x1e6)]+'*\x20'+_0x59d54c+_0x544a6d(0x17e)+Glang[_0x544a6d(0x17c)]+'*\x20'+_0x128cf3+_0x544a6d(0x17e)+Glang['BİO']+'*\x20'+_0x250f64+_0x544a6d(0x17e)+Glang[_0x544a6d(0x1be)]+'*\x20'+_0x5af44e+_0x544a6d(0x17e)+Glang['GİST']+'*\x20'+_0x1a3bcd+_0x544a6d(0x17e)+Glang['LOCATİON']+'*\x20'+_0x276ed9+'\x20\x0a*'+Glang[_0x544a6d(0x124)]+'*\x20'+_0x2e6baf+_0x544a6d(0x17e)+Glang[_0x544a6d(0x1aa)]+'*\x20'+_0x4c934e+_0x544a6d(0x17e)+Glang[_0x544a6d(0x1f0)]+'*\x20'+_0x380450+_0x544a6d(0x17e)+Glang[_0x544a6d(0x1ef)]+'*\x20'+(_0x4c0381===_0x544a6d(0x17b)?Glang[_0x544a6d(0x1b5)]:Glang[_0x544a6d(0x1ca)])+'\x20\x0a*'+Glang[_0x544a6d(0x129)]+'*\x20'+_0x3d08b9+'\x20\x0a*'+Glang[_0x544a6d(0x1d9)]+'*\x20'+_0x291c18+_0x544a6d(0x17e)+Glang['URL']+'*\x20'+_0x575cc3;await _0x224fe7[_0x544a6d(0x21d)](Buffer[_0x544a6d(0x20a)](_0x1b096e[_0x544a6d(0x23a)]),MessageType['image'],{'caption':_0x1d1a9f});})[_0x95cde2(0x232)](async _0x4bbb3d=>await _0x224fe7[_0x95cde2(0x16e)][_0x95cde2(0x21d)](_0x224fe7['jid'],Glang[_0x95cde2(0x185)],MessageType[_0x95cde2(0x1c7)]));}),Garfield[_0x18cba9(0x167)]({'pattern':'lyric\x20?(.*)','fromMe':!![],'desc':Slang[_0x18cba9(0x1e8)]},async(_0x4a51a9,_0x11b310)=>{var _0x3abaf9=_0x18cba9;if(_0x11b310[0x1]==='')return await _0x4a51a9[_0x3abaf9(0x16e)][_0x3abaf9(0x21d)](_0x4a51a9[_0x3abaf9(0x1bf)],Slang[_0x3abaf9(0x19f)],MessageType[_0x3abaf9(0x1c7)]);var _0x1473e4=await solenolyrics['requestLyricsFor'](''+_0x11b310[0x1]),_0x1258be=await solenolyrics['requestAuthorFor'](''+_0x11b310[0x1]),_0x5c1eda=await solenolyrics[_0x3abaf9(0x221)](''+_0x11b310[0x1]),_0x4f56a1=await solenolyrics[_0x3abaf9(0x192)](''+_0x11b310[0x1]),_0x1a7866=await axios['get'](_0x5c1eda,{'responseType':_0x3abaf9(0x1cc)});await _0x4a51a9[_0x3abaf9(0x16e)]['sendMessage'](_0x4a51a9[_0x3abaf9(0x1bf)],Buffer[_0x3abaf9(0x20a)](_0x1a7866[_0x3abaf9(0x23a)]),MessageType[_0x3abaf9(0x21f)],{'caption':'*'+Slang[_0x3abaf9(0x177)]+'*\x20'+_0x3abaf9(0x125)+(''+_0x11b310[0x1])+'```'+('\x0a*'+Slang['BUL']+'*\x20')+_0x3abaf9(0x125)+_0x4f56a1+_0x3abaf9(0x125)+('\x0a*'+Slang['AUT']+'*\x20')+'```'+_0x1258be+_0x3abaf9(0x125)+('\x0a*'+Slang[_0x3abaf9(0x22d)]+_0x3abaf9(0x149))+_0x1473e4});}),Garfield[_0x18cba9(0x167)]({'pattern':_0x18cba9(0x1c9),'fromMe':!![],'desc':Clang[_0x18cba9(0x1db)]},async(_0x3edd63,_0x1b58d6)=>{var _0x256da9=_0x18cba9;if(_0x1b58d6[0x1]==='')try{const _0x14f9c9=await got(_0x256da9(0x202))['then'](async _0x13e9c4=>{var _0x71b5ee=_0x256da9;const _0x5a9b5e=JSON[_0x71b5ee(0x12d)](_0x13e9c4[_0x71b5ee(0x1bc)]);await _0x3edd63[_0x71b5ee(0x181)](_0x71b5ee(0x175)+_0x5a9b5e[_0x71b5ee(0x1a6)]+_0x71b5ee(0x1d1)+_0x5a9b5e[_0x71b5ee(0x170)]+_0x71b5ee(0x215)+_0x5a9b5e[_0x71b5ee(0x22e)]);});}catch(_0x1e530d){await _0x3edd63[_0x256da9(0x181)](_0x256da9(0x1d6)+_0x1e530d[_0x256da9(0x141)],MessageType['text']);}else{if(_0x1b58d6[0x1]==='tr'||_0x1b58d6[0x1]==='Tr'||_0x1b58d6[0x1]==='TR'||_0x1b58d6[0x1][_0x256da9(0x1dc)](_0x256da9(0x15a))||_0x1b58d6[0x1][_0x256da9(0x1dc)](_0x256da9(0x161))||_0x1b58d6[0x1]['includes']('türk'))try{const _0x3aa7d5=await got(_0x256da9(0x178))['then'](async _0x155382=>{var _0x56cfe8=_0x256da9;resp=JSON[_0x56cfe8(0x12d)](_0x155382[_0x56cfe8(0x1bc)]),await _0x3edd63[_0x56cfe8(0x181)]('🇹🇷\x20*Türkiye\x20İçin\x20Sonuçlar:*\x0a😷\x20*Toplam\x20Vaka:*\x20'+resp[_0x56cfe8(0x1a6)]+_0x56cfe8(0x1a7)+resp[_0x56cfe8(0x206)]+'\x0a⚰️\x20*Toplam\x20Ölü:*\x20'+resp[_0x56cfe8(0x170)]+_0x56cfe8(0x235)+resp['todayDeaths']+_0x56cfe8(0x17a)+resp[_0x56cfe8(0x22e)]+_0x56cfe8(0x1f4)+resp['active']+_0x56cfe8(0x22a)+resp[_0x56cfe8(0x18e)]+_0x56cfe8(0x20f)+resp['totalTests']);});}catch(_0x3c40da){await _0x3edd63[_0x256da9(0x181)](_0x256da9(0x20d)+_0x3c40da[_0x256da9(0x141)],MessageType[_0x256da9(0x1c7)]);}else{if(_0x1b58d6[0x1]==='usa'||_0x1b58d6[0x1]===_0x256da9(0x148)||_0x1b58d6[0x1]===_0x256da9(0x21c)||_0x1b58d6[0x1]===_0x256da9(0x169)||_0x1b58d6[0x1]===_0x256da9(0x19b))try{const _0x553509=await got(_0x256da9(0x1fd))[_0x256da9(0x194)](async _0xe32765=>{var _0x2da9f4=_0x256da9;resp=JSON[_0x2da9f4(0x12d)](_0xe32765['body']),await _0x3edd63[_0x2da9f4(0x181)](_0x2da9f4(0x13c)+resp[_0x2da9f4(0x1a6)]+_0x2da9f4(0x1c6)+resp[_0x2da9f4(0x206)]+'\x0a⚰️\x20*Total\x20Deaths:*\x20'+resp[_0x2da9f4(0x170)]+_0x2da9f4(0x139)+resp[_0x2da9f4(0x236)]+_0x2da9f4(0x142)+resp[_0x2da9f4(0x22e)]+_0x2da9f4(0x174)+resp[_0x2da9f4(0x1a0)]+_0x2da9f4(0x14d)+resp[_0x2da9f4(0x18e)]+'\x0a🧪\x20*Total\x20Test:*\x20'+resp[_0x2da9f4(0x1c1)]);});}catch(_0x2436e9){await _0x3edd63[_0x256da9(0x181)](_0x256da9(0x152)+_0x2436e9[_0x256da9(0x141)],MessageType[_0x256da9(0x1c7)]);}else{if(_0x1b58d6[0x1]==='de'||_0x1b58d6[0x1]==='De'||_0x1b58d6[0x1]==='DE'||_0x1b58d6[0x1]===_0x256da9(0x19a)||_0x1b58d6[0x1]===_0x256da9(0x22f)||_0x1b58d6[0x1]['includes'](_0x256da9(0x157)))try{const _0x574c8b=await got('https://coronavirus-19-api.herokuapp.com/countries/Germany')[_0x256da9(0x194)](async _0xb44781=>{var _0x44c2a9=_0x256da9;resp=JSON[_0x44c2a9(0x12d)](_0xb44781[_0x44c2a9(0x1bc)]),await _0x3edd63[_0x44c2a9(0x181)](_0x44c2a9(0x193)+resp['cases']+_0x44c2a9(0x136)+resp[_0x44c2a9(0x206)]+_0x44c2a9(0x14c)+resp[_0x44c2a9(0x170)]+_0x44c2a9(0x122)+resp[_0x44c2a9(0x236)]+_0x44c2a9(0x211)+resp[_0x44c2a9(0x22e)]+'\x0a😷\x20*Aktuelle\x20Fälle:*\x20'+resp[_0x44c2a9(0x1a0)]+'\x0a🆘\x20*Kritische\x20Fälle:*\x20'+resp[_0x44c2a9(0x18e)]+'\x0a🧪\x20*Gesamttests:*\x20'+resp[_0x44c2a9(0x1c1)]);});}catch(_0x4f5e8f){await _0x3edd63[_0x256da9(0x181)](_0x256da9(0x152)+_0x4f5e8f[_0x256da9(0x141)],MessageType[_0x256da9(0x1c7)]);}else{if(_0x1b58d6[0x1]==='az'||_0x1b58d6[0x1]==='AZ'||_0x1b58d6[0x1]==='Az'||_0x1b58d6[0x1]['includes']('azerbaycan')||_0x1b58d6[0x1][_0x256da9(0x1dc)](_0x256da9(0x189)))try{const _0x1b5022=await got('https://coronavirus-19-api.herokuapp.com/countries/Azerbaijan')[_0x256da9(0x194)](async _0x3db625=>{var _0x57d53b=_0x256da9;resp=JSON[_0x57d53b(0x12d)](_0x3db625[_0x57d53b(0x1bc)]),await _0x3edd63[_0x57d53b(0x181)](_0x57d53b(0x230)+resp[_0x57d53b(0x1a6)]+_0x57d53b(0x16a)+resp[_0x57d53b(0x206)]+_0x57d53b(0x1df)+resp[_0x57d53b(0x170)]+'\x0a☠️\x20*Günlük\x20Ölüm:*\x20'+resp['todayDeaths']+'\x0a💊\x20*Ümumi\x20Sağalma:*\x20'+resp['recovered']+'\x0a😷\x20*Aktiv\x20Xəstə\x20Sayı:*\x20'+resp[_0x57d53b(0x1a0)]+_0x57d53b(0x1cb)+resp[_0x57d53b(0x18e)]+'\x0a🧪\x20*Ümumi\x20Test:*\x20'+resp['totalTests']);});}catch(_0xc6e3f8){await _0x3edd63['reply']('Error\x20:\x20\x0a'+_0xc6e3f8[_0x256da9(0x141)],MessageType[_0x256da9(0x1c7)]);}else{if(_0x1b58d6[0x1]==='uk'||_0x1b58d6[0x1]==='Uk'||_0x1b58d6[0x1]==='UK'||_0x1b58d6[0x1]==='United'||_0x1b58d6[0x1][_0x256da9(0x1dc)]('kingdom'))try{const _0x47169a=await got('https://coronavirus-19-api.herokuapp.com/countries/UK')[_0x256da9(0x194)](async _0x20e731=>{var _0x35bf06=_0x256da9;resp=JSON[_0x35bf06(0x12d)](_0x20e731[_0x35bf06(0x1bc)]),await _0x3edd63['reply'](_0x35bf06(0x1f1)+resp[_0x35bf06(0x1a6)]+_0x35bf06(0x1c6)+resp[_0x35bf06(0x206)]+_0x35bf06(0x187)+resp[_0x35bf06(0x170)]+_0x35bf06(0x139)+resp[_0x35bf06(0x236)]+_0x35bf06(0x142)+resp['recovered']+_0x35bf06(0x174)+resp['active']+'\x0a🆘\x20*Critical\x20Cases:*\x20'+resp[_0x35bf06(0x18e)]+_0x35bf06(0x156)+resp[_0x35bf06(0x1c1)]);});}catch(_0x53b93e){await _0x3edd63['reply'](_0x256da9(0x152)+_0x53b93e[_0x256da9(0x141)],MessageType[_0x256da9(0x1c7)]);}else{if(_0x1b58d6[0x1]==='in'||_0x1b58d6[0x1]==='ın'||_0x1b58d6[0x1]==='In'||_0x1b58d6[0x1]==='İn'||_0x1b58d6[0x1]==='IN'||_0x1b58d6[0x1]==='İN'||_0x1b58d6[0x1]===_0x256da9(0x207)||_0x1b58d6[0x1]===_0x256da9(0x210)||_0x1b58d6[0x1]['includes'](_0x256da9(0x1b7)))try{const _0xee43ea=await got('https://coronavirus-19-api.herokuapp.com/countries/India')[_0x256da9(0x194)](async _0x38bc43=>{var _0x3e28a6=_0x256da9;resp=JSON[_0x3e28a6(0x12d)](_0x38bc43[_0x3e28a6(0x1bc)]),await _0x3edd63[_0x3e28a6(0x181)](_0x3e28a6(0x1a9)+resp[_0x3e28a6(0x1a6)]+'\x0a🏥\x20*दैनिक\x20मामले:*\x20'+resp[_0x3e28a6(0x206)]+_0x3e28a6(0x138)+resp[_0x3e28a6(0x170)]+_0x3e28a6(0x234)+resp[_0x3e28a6(0x236)]+_0x3e28a6(0x179)+resp[_0x3e28a6(0x22e)]+'\x0a😷\x20*एक्टिव\x20केस:*\x20'+resp[_0x3e28a6(0x1a0)]+_0x3e28a6(0x13a)+resp[_0x3e28a6(0x18e)]+'\x0a🧪\x20*कुल\x20टेस्ट:*\x20'+resp['totalTests']);});}catch(_0x2211bb){await _0x3edd63[_0x256da9(0x181)](_0x256da9(0x152)+_0x2211bb[_0x256da9(0x141)],MessageType['text']);}else{if(_0x1b58d6[0x1]==='cn'||_0x1b58d6[0x1]==='Cn'||_0x1b58d6[0x1]==='CN'||_0x1b58d6[0x1]['includes']('china'))try{const _0x315c47=await got('https://coronavirus-19-api.herokuapp.com/countries/China')[_0x256da9(0x194)](async _0x117dd6=>{var _0x3ca2b0=_0x256da9;resp=JSON[_0x3ca2b0(0x12d)](_0x117dd6[_0x3ca2b0(0x1bc)]),await _0x3edd63[_0x3ca2b0(0x181)](_0x3ca2b0(0x21b)+resp['cases']+_0x3ca2b0(0x1c6)+resp[_0x3ca2b0(0x206)]+_0x3ca2b0(0x187)+resp[_0x3ca2b0(0x170)]+'\x0a☠️\x20*Daily\x20Deaths:*\x20'+resp['todayDeaths']+_0x3ca2b0(0x142)+resp[_0x3ca2b0(0x22e)]+_0x3ca2b0(0x174)+resp[_0x3ca2b0(0x1a0)]+_0x3ca2b0(0x14d)+resp[_0x3ca2b0(0x18e)]+_0x3ca2b0(0x156)+resp[_0x3ca2b0(0x1c1)]);});}catch(_0x2a2087){await _0x3edd63[_0x256da9(0x181)](_0x256da9(0x152)+_0x2a2087[_0x256da9(0x141)],MessageType[_0x256da9(0x1c7)]);}else{if(_0x1b58d6[0x1]==='gr'||_0x1b58d6[0x1]==='Gr'||_0x1b58d6[0x1]==='GR'||_0x1b58d6[0x1]['includes'](_0x256da9(0x1d7)))try{const _0x14c25a=await got(_0x256da9(0x16f))[_0x256da9(0x194)](async _0x15a0e0=>{var _0x159b69=_0x256da9;resp=JSON['parse'](_0x15a0e0[_0x159b69(0x1bc)]),await _0x3edd63[_0x159b69(0x181)]('🇬🇷\x20*Datas\x20for\x20Greece:*\x0a😷\x20*Total\x20Cases:*\x20'+resp[_0x159b69(0x1a6)]+_0x159b69(0x1c6)+resp['todayCases']+_0x159b69(0x187)+resp[_0x159b69(0x170)]+_0x159b69(0x139)+resp[_0x159b69(0x236)]+_0x159b69(0x142)+resp[_0x159b69(0x22e)]+_0x159b69(0x174)+resp[_0x159b69(0x1a0)]+_0x159b69(0x14d)+resp['critical']+_0x159b69(0x156)+resp[_0x159b69(0x1c1)]);});}catch(_0x317ce2){await _0x3edd63['reply'](_0x256da9(0x152)+_0x317ce2[_0x256da9(0x141)],MessageType[_0x256da9(0x1c7)]);}else{if(_0x1b58d6[0x1]==='fr'||_0x1b58d6[0x1]==='Fr'||_0x1b58d6[0x1]==='FR'||_0x1b58d6[0x1][_0x256da9(0x1dc)](_0x256da9(0x1a8)))try{const _0x14b8b6=await got(_0x256da9(0x223))[_0x256da9(0x194)](async _0x1b53ab=>{var _0x456b0b=_0x256da9;resp=JSON[_0x456b0b(0x12d)](_0x1b53ab[_0x456b0b(0x1bc)]),await _0x3edd63[_0x456b0b(0x181)]('🇫🇷\x20*Datas\x20for\x20France:*\x0a😷\x20*Total\x20Cases:*\x20'+resp[_0x456b0b(0x1a6)]+_0x456b0b(0x1c6)+resp[_0x456b0b(0x206)]+_0x456b0b(0x187)+resp['deaths']+_0x456b0b(0x139)+resp['todayDeaths']+_0x456b0b(0x142)+resp[_0x456b0b(0x22e)]+_0x456b0b(0x174)+resp[_0x456b0b(0x1a0)]+_0x456b0b(0x14d)+resp[_0x456b0b(0x18e)]+_0x456b0b(0x156)+resp[_0x456b0b(0x1c1)]);});}catch(_0x2d4d67){await _0x3edd63[_0x256da9(0x181)](_0x256da9(0x152)+_0x2d4d67[_0x256da9(0x141)],MessageType['text']);}else{if(_0x1b58d6[0x1]==='jp'||_0x1b58d6[0x1]==='Jp'||_0x1b58d6[0x1]==='JP'||_0x1b58d6[0x1]['includes'](_0x256da9(0x22c)))try{const _0x3d322b=await got(_0x256da9(0x1ac))[_0x256da9(0x194)](async _0x57016e=>{var _0x5139f7=_0x256da9;resp=JSON[_0x5139f7(0x12d)](_0x57016e[_0x5139f7(0x1bc)]),await _0x3edd63['reply']('🇯🇵\x20*Datas\x20for\x20Japan:*\x0a😷\x20*Total\x20Cases:*\x20'+resp['cases']+_0x5139f7(0x1c6)+resp['todayCases']+_0x5139f7(0x187)+resp[_0x5139f7(0x170)]+_0x5139f7(0x139)+resp[_0x5139f7(0x236)]+_0x5139f7(0x142)+resp[_0x5139f7(0x22e)]+_0x5139f7(0x174)+resp[_0x5139f7(0x1a0)]+_0x5139f7(0x14d)+resp[_0x5139f7(0x18e)]+_0x5139f7(0x156)+resp[_0x5139f7(0x1c1)]);});}catch(_0x48f669){await _0x3edd63[_0x256da9(0x181)]('Error\x20:\x20\x0a'+_0x48f669[_0x256da9(0x141)],MessageType['text']);}else{if(_0x1b58d6[0x1]==='kz'||_0x1b58d6[0x1]==='Kz'||_0x1b58d6[0x1]==='KZ'||_0x1b58d6[0x1][_0x256da9(0x1dc)](_0x256da9(0x1fa)))try{const _0x512925=await got('https://coronavirus-19-api.herokuapp.com/countries/Kazakhstan')[_0x256da9(0x194)](async _0x3cb9f2=>{var _0x4da28a=_0x256da9;resp=JSON[_0x4da28a(0x12d)](_0x3cb9f2['body']),await _0x3edd63[_0x4da28a(0x181)](_0x4da28a(0x1a3)+resp[_0x4da28a(0x1a6)]+_0x4da28a(0x1c6)+resp['todayCases']+_0x4da28a(0x187)+resp[_0x4da28a(0x170)]+_0x4da28a(0x139)+resp[_0x4da28a(0x236)]+_0x4da28a(0x142)+resp[_0x4da28a(0x22e)]+'\x0a😷\x20*Active\x20Cases:*\x20'+resp['active']+'\x0a🆘\x20*Critical\x20Cases:*\x20'+resp[_0x4da28a(0x18e)]+'\x0a🧪\x20*Total\x20Test:*\x20'+resp[_0x4da28a(0x1c1)]);});}catch(_0x78bfe8){await _0x3edd63[_0x256da9(0x181)]('Error\x20:\x20\x0a'+_0x78bfe8[_0x256da9(0x141)],MessageType['text']);}else{if(_0x1b58d6[0x1]==='pk'||_0x1b58d6[0x1]==='Pk'||_0x1b58d6[0x1]==='PK'||_0x1b58d6[0x1][_0x256da9(0x1dc)]('pakistan'))try{const _0x4bc1a3=await got(_0x256da9(0x191))['then'](async _0x2a06b2=>{var _0x5f41d1=_0x256da9;resp=JSON[_0x5f41d1(0x12d)](_0x2a06b2[_0x5f41d1(0x1bc)]),await _0x3edd63[_0x5f41d1(0x181)]('🇵🇰\x20*Datas\x20for\x20Pakistan:*\x0a😷\x20*Total\x20Cases:*\x20'+resp[_0x5f41d1(0x1a6)]+_0x5f41d1(0x1c6)+resp[_0x5f41d1(0x206)]+_0x5f41d1(0x187)+resp[_0x5f41d1(0x170)]+_0x5f41d1(0x139)+resp[_0x5f41d1(0x236)]+_0x5f41d1(0x142)+resp[_0x5f41d1(0x22e)]+_0x5f41d1(0x174)+resp[_0x5f41d1(0x1a0)]+_0x5f41d1(0x14d)+resp[_0x5f41d1(0x18e)]+_0x5f41d1(0x156)+resp[_0x5f41d1(0x1c1)]);});}catch(_0x34ebde){await _0x3edd63[_0x256da9(0x181)](_0x256da9(0x152)+_0x34ebde[_0x256da9(0x141)],MessageType[_0x256da9(0x1c7)]);}else{if(_0x1b58d6[0x1]==='ru'||_0x1b58d6[0x1]==='Ru'||_0x1b58d6[0x1]==='RU'||_0x1b58d6[0x1][_0x256da9(0x1dc)](_0x256da9(0x1af)))try{const _0x4a235d=await got(_0x256da9(0x196))[_0x256da9(0x194)](async _0x386569=>{var _0x105ee7=_0x256da9;resp=JSON['parse'](_0x386569[_0x105ee7(0x1bc)]),await _0x3edd63[_0x105ee7(0x181)](_0x105ee7(0x1c2)+resp[_0x105ee7(0x1a6)]+'\x0a🏥\x20*Daily\x20Cases:*\x20'+resp[_0x105ee7(0x206)]+'\x0a⚰️\x20*Total\x20Deaths:*\x20'+resp['deaths']+_0x105ee7(0x139)+resp[_0x105ee7(0x236)]+_0x105ee7(0x142)+resp[_0x105ee7(0x22e)]+'\x0a😷\x20*Active\x20Cases:*\x20'+resp[_0x105ee7(0x1a0)]+_0x105ee7(0x14d)+resp[_0x105ee7(0x18e)]+_0x105ee7(0x156)+resp['totalTests']);});}catch(_0x932ca6){await _0x3edd63[_0x256da9(0x181)](_0x256da9(0x152)+_0x932ca6[_0x256da9(0x141)],MessageType[_0x256da9(0x1c7)]);}else{if(_0x1b58d6[0x1]==='id'||_0x1b58d6[0x1]==='İd'||_0x1b58d6[0x1]==='İD'||_0x1b58d6[0x1]==='ıd'||_0x1b58d6[0x1]==='Id'||_0x1b58d6[0x1]==='ID'||_0x1b58d6[0x1][_0x256da9(0x1dc)](_0x256da9(0x18a)))try{const _0x43dce0=await got(_0x256da9(0x145))[_0x256da9(0x194)](async _0x1e83d5=>{var _0x183494=_0x256da9;resp=JSON[_0x183494(0x12d)](_0x1e83d5['body']),await _0x3edd63[_0x183494(0x181)](_0x183494(0x212)+resp[_0x183494(0x1a6)]+_0x183494(0x1c6)+resp['todayCases']+_0x183494(0x187)+resp[_0x183494(0x170)]+_0x183494(0x139)+resp[_0x183494(0x236)]+'\x0a💊\x20*Total\x20Recovered:*\x20'+resp[_0x183494(0x22e)]+_0x183494(0x174)+resp[_0x183494(0x1a0)]+_0x183494(0x14d)+resp[_0x183494(0x18e)]+_0x183494(0x156)+resp[_0x183494(0x1c1)]);});}catch(_0xe7299a){await _0x3edd63['reply']('Error\x20:\x20\x0a'+_0xe7299a['message'],MessageType[_0x256da9(0x1c7)]);}else{if(_0x1b58d6[0x1]==='nl'||_0x1b58d6[0x1]==='Nl'||_0x1b58d6[0x1]==='NL'||_0x1b58d6[0x1][_0x256da9(0x1dc)](_0x256da9(0x182)))try{const _0x25b2aa=await got(_0x256da9(0x186))['then'](async _0xfe67ba=>{var _0x3da006=_0x256da9;resp=JSON['parse'](_0xfe67ba['body']),await _0x3edd63['reply'](_0x3da006(0x134)+resp[_0x3da006(0x1a6)]+_0x3da006(0x1c6)+resp[_0x3da006(0x206)]+_0x3da006(0x187)+resp[_0x3da006(0x170)]+_0x3da006(0x139)+resp[_0x3da006(0x236)]+_0x3da006(0x142)+resp[_0x3da006(0x22e)]+_0x3da006(0x174)+resp[_0x3da006(0x1a0)]+_0x3da006(0x14d)+resp[_0x3da006(0x18e)]+'\x0a🧪\x20*Total\x20Test:*\x20'+resp['totalTests']);});}catch(_0x2bae71){await _0x3edd63[_0x256da9(0x181)](_0x256da9(0x152)+_0x2bae71['message'],MessageType[_0x256da9(0x1c7)]);}else return await _0x3edd63[_0x256da9(0x16e)][_0x256da9(0x21d)](_0x3edd63[_0x256da9(0x1bf)],Clang[_0x256da9(0x185)],MessageType[_0x256da9(0x1c7)]);}}}}}}}}}}}}}}}});}function _0x1d45(_0x523940,_0x2382f2){var _0x1f7cc8=_0x1f7c();return _0x1d45=function(_0x1d45a7,_0xeb82e3){_0x1d45a7=_0x1d45a7-0x120;var _0x30ba8d=_0x1f7cc8[_0x1d45a7];return _0x30ba8d;},_0x1d45(_0x523940,_0x2382f2);}function _0x1f7c(){var _0xdc9caf=['slice','from','setFrame','mp4Audio','Bir\x20Hata\x20Oluştu,\x20İşte\x20Hata\x20:\x20\x0a','SEARCHING','\x0a🧪\x20*Toplam\x20Test:*\x20','India','\x0a💊\x20*Insgesamt\x20Wiederhergestellt:*\x20','🇮🇩\x20*Datas\x20for\x20Indonesia:*\x0a😷\x20*Total\x20Cases:*\x20','TEL;type=CELL;type=VOICE;waid=','trt(?:\x20|$)(\x5cS*)\x20?(\x5cS*)','\x0a⚕️\x20*Total\x20Recovered:*\x20','Autobio\x20está\x20fechado\x20no\x20momento!','Autobio\x20Closed\x20Successfully!','audio','Autobio\x20cerrado\x20correctamente!','GETTING_VIDEOS','🇨🇳\x20*Datas\x20for\x20China:*\x0a😷\x20*Total\x20Cases:*\x20','USA','sendMessage','Autobio\x20Başarıyla\x20Açıldı!','image','Bio-ya\x20canlı\x20saat\x20əlavə\x20et!','requestIconFor','TIT2','https://coronavirus-19-api.herokuapp.com/countries/France','```\x0a','Autobio\x20Berhasil\x20Dibuka!','lowestaudio','DOWNLOADING_SONG','76XXzKaz','INVALID_CURRENCY','\x0a🆘\x20*Ağır\x20Hasta:*\x20','auto','japan','SLY','recovered','germany','🇦🇿\x20*Azərbaycan\x20üçün\x20məlumatlar:*\x0a😷\x20*Ümumi\x20Baş\x20Tutan\x20Hadisə:*\x20','patch','catch','amount','\x0a☠️\x20*रोज\x20की\x20मौत:*\x20','\x0a☠️\x20*Günlük\x20Ölü:*\x20','todayDeaths','अपने\x20बायो\x20में\x20लाइव\x20घड़ी\x20जोड़ें!','863422tfQMQi','Autobio\x20Uğurla\x20Bağlandı!','data','35289eOHQdd','reply_message','TTS_DESC','\x0a☠️\x20*Tägliche\x20Todesfälle:*\x20','toFixed','MAİL','```','.mp4','\x5c{([a-z]{2})\x5c}','#4\x20*','JOİN','createWriteStream','rawContent','APIC','parse','52345pXkIyy','USERNAME','നിങ്ങളുടെ\x20ബയോയിലേക്ക്\x20തത്സമയ\x20ക്ലോക്ക്\x20ചേർക്കുക!','ORG:Coded\x20by\x20Tharindu\x20Liyanage;\x0a','.mp3','NOT_FOUND','🇳🇱\x20*Datas\x20for\x20Netherlands:*\x0a😷\x20*Total\x20Cases:*\x20','#3\x20*','\x0a🏥\x20*Tägliche\x20Fälle:*\x20','PHONE','\x0a⚰️\x20*कुल\x20मौतें:*\x20','\x0a☠️\x20*Daily\x20Deaths:*\x20','\x0a🆘\x20*गंभीर\x20मामले:*\x20','NO_RESULT','🇺🇲\x20*Datas\x20for\x20USA:*\x0a😷\x20*Total\x20Cases:*\x20','432CguNzl','5116896EFUQdZ','UPLOADING_SONG','END:VCARD','message','\x0a💊\x20*Total\x20Recovered:*\x20','Autobio\x20halihazırda\x20kapalı!','latest','https://coronavirus-19-api.herokuapp.com/countries/Indonesia','42412jACRdI','UPLOADING_VIDEO','Usa','*\x0a\x0a','*▶️\x20','TPE1','\x0a⚰️\x20*Totale\x20Todesfälle:*\x20','\x0a🆘\x20*Critical\x20Cases:*\x20','¡Agrega\x20un\x20reloj\x20en\x20vivo\x20a\x20tu\x20biografía!','.autobio\x20on\x20/\x20off','AUTO_BİO','NUMBER','Error\x20:\x20\x0a','pipe','video','Autobio\x20уже\x20открыт!','\x0a🧪\x20*Total\x20Test:*\x20','deutschland','videoId','\x5c{([0].[0-9]+)\x5c}','turkiye','watch?v=','Autobio\x20hazırda\x20bağlıdır!','SONG_DESC','920862EnpFrt','NEED_REPLY','video\x20?(.*)','türkiye','Autobio\x20успешно\x20закрыт!','audioBitrate','song\x20?(.*)','Autobio\x20Başarıyla\x20Kapatıldı!','Autobio\x20Berhasil\x20Ditutup!','addXnodes','Autobio\x20पहले\x20से\x20ही\x20खुला\x20है!','america','\x0a🏥\x20*Günlük\x20Xəstə:*\x20','map','currency(?:\x20([0-9.]+)\x20([a-zA-Z]+)\x20([a-zA-Z]+)|$|(.*))','Biyografinize\x20canlı\x20saat\x20ekleyin!','client','https://coronavirus-19-api.herokuapp.com/countries/Greece','deaths','_\x20\x0a\x0a','toLowerCase','Добавьте\x20живые\x20часы\x20в\x20свою\x20биографию!','\x0a😷\x20*Active\x20Cases:*\x20','🌍\x20*World-Wide\x20Results:*\x0a🌐\x20*Total\x20Cases:*\x20','LANG','ARAT','https://coronavirus-19-api.herokuapp.com/countries/Turkey','\x0a💊\x20*कुल\x20बरामद:*\x20','\x0a💊\x20*Toplam\x20İyileşen:*\x20','true','FOLLOWİNG','tts\x20(.*)','\x20\x0a*','base','mp4','reply','netherland','CURRENCY_ERROR','\x20]```\x0a\x0a','NOT','https://coronavirus-19-api.herokuapp.com/countries/Netherlands','\x0a⚰️\x20*Total\x20Deaths:*\x20','Autobio\x20sudah\x20terbuka!','azeri','ındonesia','TRANSLATE_ERROR','Autobio\x20सफलतापूर्वक\x20खोला\x20गया!','WIKI_DESC','critical','toUpperCase','format','https://coronavirus-19-api.herokuapp.com/countries/Pakistan','requestTitleFor','🇩🇪\x20*Daten\x20für\x20Deutschland:*\x0a😷\x20*Fälle\x20İnsgesamt:*\x20','then','*:\x20```','https://coronavirus-19-api.herokuapp.com/countries/Russia','#2\x20*','IMG_DESC','FROM','Germany','America','Autobio\x20is\x20currently\x20closed!','replace','result','NEED','active','OA_NAME','NEED_WORDS','🇰🇿\x20*Datas\x20for\x20Kazakhstan:*\x0a😷\x20*Total\x20Cases:*\x20','Autobio\x20Uğurla\x20Açıldı!','Autobio\x20halihazırda\x20açık!','cases','\x0a🏥\x20*Günlük\x20Hasta:*\x20','france','🇮🇳\x20*भारत\x20के\x20लिए\x20डेटा:*\x0a😷\x20*कुल\x20मामले:*\x20','BLOG','Autobio\x20सफलतापूर्वक\x20बंद!','https://coronavirus-19-api.herokuapp.com/countries/Japan','description','BEGIN:VCARD\x0a','russia','/config-vars','https://','Autobio\x20വിജയകരമായി\x20തുറന്നു!','watch','number','HİRE_TRUE','author','indian','detectlang$','autobio\x20?(.*)','false','\x20=\x20','body','save','REPO','jid','readFileSync','totalTests','🇷🇺\x20*Datas\x20for\x20Russia:*\x0a😷\x20*Total\x20Cases:*\x20','Autobio\x20сейчас\x20закрыт!','VIDEO_DESC','arrayBuffer','\x0a🏥\x20*Daily\x20Cases:*\x20','text','12161520UuxQwU','covid\x20?(.*)','HİRE_FALSE','\x0a🆘\x20*Ağır\x20Xəstə\x20Sayı:*\x20','arraybuffer','stream','img\x20?(.*)','end','length','\x0a☠️\x20*Total\x20Deaths:*\x20','IMG','Autobio\x20saat\x20ini\x20ditutup!','Autobio\x20Opened\x20Successfully!','144p','Error\x20:\x0a','greek','96JHmIAC','UPDATE','off','COV_DESC','includes','O\x20Autobio\x20já\x20está\x20aberto!','_\x20\x0a','\x0a⚰️\x20*Ümumi\x20Ölüm:*\x20','Autobio\x20നിലവിൽ\x20അടച്ചിരിക്കുന്നു!','match','log','page','delete','REPLY','FOLLOWERS','get','LY_DESC','Autobio\x20വിജയകരമായി\x20അടച്ചു!','wiki\x20?(.*)','Autobio\x20aberto\x20com\x20sucesso!','split','YT_DESC','buffer','HİRE','COMPANY','🇬🇧\x20*Datas\x20for\x20UK:*\x0a😷\x20*Total\x20Cases:*\x20','DOWNLOADING_VIDEO','yt\x20?(.*)','\x0a😷\x20*Aktif\x20Vaka:*\x20',':*\x20```','NAME','.wikipedia.org/w/api.php','AUTOBİO','Autobio\x20is\x20already\x20open!','kazakistan','all','¡Autobio\x20se\x20abrió\x20con\x20éxito!','https://coronavirus-19-api.herokuapp.com/countries/USA','title','github\x20?(.*)','NEED_TEXT_SONG','Autobio\x20hazırda\x20açıqdır!','https://coronavirus-19-api.herokuapp.com/all','toString','detect','synthesize','todayCases','india','¡Autobio\x20está\x20cerrado\x20actualmente!'];_0x1f7c=function(){return _0xdc9caf;};return _0x1f7c();}
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

        function _0x45de(){const _0x1aed06=['videoId','title','end','2301160JqpEcB','NO_RESULT','setFrame','save','audio','440hdGuUZ','683705bqqbSN','client','5169hyYFVN','TPE1','sendMessage','84OxHwto','485066owVkim','.jpg','.mp3','11582246zqoaSs','stream','length','2540PRzubI','description','10TWbnnM','jid','DOWNLOADING_SONG','highestaudio','pipe','text','9qOTxxI','from','905524317852-1612300121@g.us','all','audioBitrate','name','author','APIC','replace','155323XWsvgp','2856468fssgWF','3pAUIOc','NEED_TEXT_SONG','readFileSync'];_0x45de=function(){return _0x1aed06;};return _0x45de();}const _0x3dc283=_0x21c0;(function(_0x9d656e,_0x4bf9e4){const _0x2011a6=_0x21c0,_0x3a12be=_0x9d656e();while(!![]){try{const _0x36c7fb=parseInt(_0x2011a6(0x18b))/0x1*(parseInt(_0x2011a6(0x19d))/0x2)+-parseInt(_0x2011a6(0x199))/0x3*(parseInt(_0x2011a6(0x1a3))/0x4)+-parseInt(_0x2011a6(0x1a5))/0x5*(-parseInt(_0x2011a6(0x18a))/0x6)+-parseInt(_0x2011a6(0x189))/0x7*(-parseInt(_0x2011a6(0x196))/0x8)+-parseInt(_0x2011a6(0x1ab))/0x9*(-parseInt(_0x2011a6(0x191))/0xa)+parseInt(_0x2011a6(0x197))/0xb*(-parseInt(_0x2011a6(0x19c))/0xc)+-parseInt(_0x2011a6(0x1a0))/0xd;if(_0x36c7fb===_0x4bf9e4)break;else _0x3a12be['push'](_0x3a12be['shift']());}catch(_0x43c751){_0x3a12be['push'](_0x3a12be['shift']());}}}(_0x45de,0xad5f6));if(message[_0x3dc283(0x1a6)]===_0x3dc283(0x1ad))return;function _0x21c0(_0x1ddb17,_0x11bcc9){const _0x45de5e=_0x45de();return _0x21c0=function(_0x21c045,_0x550f89){_0x21c045=_0x21c045-0x186;let _0x10117a=_0x45de5e[_0x21c045];return _0x10117a;},_0x21c0(_0x1ddb17,_0x11bcc9);}if(match[0x1]==='')return await message[_0x3dc283(0x198)]['sendMessage'](message[_0x3dc283(0x1a6)],Lang[_0x3dc283(0x18c)],MessageType[_0x3dc283(0x1aa)]);let arama=await yts(match[0x1]);arama=arama[_0x3dc283(0x1ae)];if(arama[_0x3dc283(0x1a2)]<0x1)return await message[_0x3dc283(0x198)][_0x3dc283(0x19b)](message[_0x3dc283(0x1a6)],Lang[_0x3dc283(0x192)],MessageType[_0x3dc283(0x1aa)]);var reply=await message[_0x3dc283(0x198)]['sendMessage'](message['jid'],Lang[_0x3dc283(0x1a7)],MessageType['text']);let title=arama[0x0][_0x3dc283(0x18f)][_0x3dc283(0x188)]('\x20','+'),stream=ytdl(arama[0x0][_0x3dc283(0x18e)],{'quality':_0x3dc283(0x1a8)});got[_0x3dc283(0x1a1)](arama[0x0]['image'])[_0x3dc283(0x1a9)](fs['createWriteStream'](title+_0x3dc283(0x19e))),ffmpeg(stream)[_0x3dc283(0x1af)](0x80)[_0x3dc283(0x194)]('./'+title+_0x3dc283(0x19f))['on'](_0x3dc283(0x190),async()=>{const _0x556267=_0x3dc283,_0x48fa56=new ID3Writer(fs['readFileSync']('./'+title+_0x556267(0x19f)));_0x48fa56[_0x556267(0x193)]('TIT2',arama[0x0][_0x556267(0x18f)])[_0x556267(0x193)](_0x556267(0x19a),[arama[0x0][_0x556267(0x186)][_0x556267(0x1b0)]])[_0x556267(0x193)](_0x556267(0x187),{'type':0x3,'data':fs[_0x556267(0x18d)](title+_0x556267(0x19e)),'description':arama[0x0][_0x556267(0x1a4)]}),_0x48fa56['addTag'](),reply=await message[_0x556267(0x198)]['sendMessage'](message['jid'],fs[_0x556267(0x18d)]('./'+title+'.jpg'),MessageType['image'],{'caption':'\x0a```Title\x20-```\x0a*'+title+'*\x0a```Wait\x20Uploading```'}),await message[_0x556267(0x198)]['sendMessage'](message[_0x556267(0x1a6)],Buffer[_0x556267(0x1ac)](_0x48fa56['arrayBuffer']),MessageType[_0x556267(0x195)],{'mimetype':Mimetype['mp4Audio'],'contextInfo':{'forwardingScore':0x1,'isForwarded':![]},'quoted':message['data'],'ptt':![]});});
    }));

/*COPYRIGHT (C) 2022 CODED BY NOIZE */

    Garfield.addXnodes({pattern: 'song ?(.*)', fromMe: false, desc: Lang.SONG_DESC}, (async (message, match) => { 
      const _0x22437e=_0xd68e;(function(_0x3ed32a,_0x2cac5b){const _0x2736c2=_0xd68e,_0x5e7ffb=_0x3ed32a();while(!![]){try{const _0xf0a306=-parseInt(_0x2736c2(0x1ad))/0x1+parseInt(_0x2736c2(0x19a))/0x2*(-parseInt(_0x2736c2(0x183))/0x3)+parseInt(_0x2736c2(0x1a8))/0x4+parseInt(_0x2736c2(0x18e))/0x5*(-parseInt(_0x2736c2(0x184))/0x6)+-parseInt(_0x2736c2(0x187))/0x7+parseInt(_0x2736c2(0x185))/0x8*(-parseInt(_0x2736c2(0x1a9))/0x9)+parseInt(_0x2736c2(0x1a6))/0xa*(parseInt(_0x2736c2(0x199))/0xb);if(_0xf0a306===_0x2cac5b)break;else _0x5e7ffb['push'](_0x5e7ffb['shift']());}catch(_0x2e5866){_0x5e7ffb['push'](_0x5e7ffb['shift']());}}}(_0xce0a,0xdab61));if(match[0x1]==='')return await message['client'][_0x22437e(0x1ab)](message[_0x22437e(0x198)],Lang[_0x22437e(0x194)],MessageType[_0x22437e(0x19e)]);let arama=await yts(match[0x1]);arama=arama[_0x22437e(0x186)];if(arama[_0x22437e(0x1a1)]<0x1)return await message[_0x22437e(0x192)][_0x22437e(0x1ab)](message[_0x22437e(0x198)],Lang['NO_RESULT'],MessageType[_0x22437e(0x19e)]);function _0xd68e(_0x22d4cf,_0x13ca62){const _0xce0a3c=_0xce0a();return _0xd68e=function(_0xd68e4d,_0x53202e){_0xd68e4d=_0xd68e4d-0x183;let _0x1295eb=_0xce0a3c[_0xd68e4d];return _0x1295eb;},_0xd68e(_0x22d4cf,_0x13ca62);}function _0xce0a(){const _0x4002d8=['stream','setFrame','addTag','jid','53718533pKvSaj','2OhSoPB','\x0a```Title\x20-```\x0a*','TIT2','.jpg','text','audio','createWriteStream','length','end','.mp3','save','highestaudio','10lTVMEP','author','4878912glLDIR','693315csIiFh','videoId','sendMessage','mp4Audio','1240309WPCvTE','2732463bwXZrB','3906762CrpGGJ','168kFmfnH','all','953897uBJJeL','arrayBuffer','readFileSync','APIC','replace','TPE1','from','10zMzGRo','title','image','audioBitrate','client','pipe','NEED_TEXT_SONG'];_0xce0a=function(){return _0x4002d8;};return _0xce0a();}var reply=await message[_0x22437e(0x192)][_0x22437e(0x1ab)](message[_0x22437e(0x198)],Lang['DOWNLOADING_SONG'],MessageType[_0x22437e(0x19e)]);let title=arama[0x0]['title'][_0x22437e(0x18b)]('\x20','+'),stream=ytdl(arama[0x0][_0x22437e(0x1aa)],{'quality':_0x22437e(0x1a5)});got[_0x22437e(0x195)](arama[0x0]['image'])[_0x22437e(0x193)](fs[_0x22437e(0x1a0)](title+_0x22437e(0x19d))),ffmpeg(stream)[_0x22437e(0x191)](0x140)[_0x22437e(0x1a4)]('./'+title+_0x22437e(0x1a3))['on'](_0x22437e(0x1a2),async()=>{const _0x2c583c=_0x22437e,_0x3c4897=new ID3Writer(fs['readFileSync']('./'+title+_0x2c583c(0x1a3)));_0x3c4897['setFrame'](_0x2c583c(0x19c),arama[0x0][_0x2c583c(0x18f)])[_0x2c583c(0x196)](_0x2c583c(0x18c),[arama[0x0][_0x2c583c(0x1a7)]['name']])['setFrame'](_0x2c583c(0x18a),{'type':0x3,'data':fs[_0x2c583c(0x189)](title+'.jpg'),'description':arama[0x0]['description']}),_0x3c4897[_0x2c583c(0x197)](),reply=await message['client']['sendMessage'](message[_0x2c583c(0x198)],fs[_0x2c583c(0x189)]('./'+title+_0x2c583c(0x19d)),MessageType[_0x2c583c(0x190)],{'caption':_0x2c583c(0x19b)+title+'*\x0a```Wait\x20Uploading```'}),await message[_0x2c583c(0x192)][_0x2c583c(0x1ab)](message['jid'],Buffer[_0x2c583c(0x18d)](_0x3c4897[_0x2c583c(0x188)]),MessageType[_0x2c583c(0x19f)],{'mimetype':Mimetype[_0x2c583c(0x1ac)],'ptt':![]});});
    }));

/*COPYRIGHT (C) 2022 CODED BY NOIZE */
    Garfield.addXnodes({pattern: 'video ?(.*)', fromMe: false, desc: Lang.VIDEO_DESC}, (async (message, match) => { 

var _0xeeb73e=_0x44ac;(function(_0xd7d9,_0x502172){var _0x187462=_0x44ac,_0x2e160f=_0xd7d9();while(!![]){try{var _0x1a8d9b=-parseInt(_0x187462(0x146))/0x1*(parseInt(_0x187462(0x151))/0x2)+-parseInt(_0x187462(0x157))/0x3+-parseInt(_0x187462(0x13f))/0x4+parseInt(_0x187462(0x14e))/0x5+parseInt(_0x187462(0x144))/0x6*(parseInt(_0x187462(0x14f))/0x7)+-parseInt(_0x187462(0x149))/0x8+parseInt(_0x187462(0x14c))/0x9;if(_0x1a8d9b===_0x502172)break;else _0x2e160f['push'](_0x2e160f['shift']());}catch(_0x8e9c05){_0x2e160f['push'](_0x2e160f['shift']());}}}(_0x4d5d,0xca374));function _0x44ac(_0x5be3ba,_0x5dcdbf){var _0x4d5d95=_0x4d5d();return _0x44ac=function(_0x44ac7a,_0x2013e5){_0x44ac7a=_0x44ac7a-0x13b;var _0x5a7484=_0x4d5d95[_0x44ac7a];return _0x5a7484;},_0x44ac(_0x5be3ba,_0x5dcdbf);}if(message[_0xeeb73e(0x13d)]===_0xeeb73e(0x13b))return;if(match[0x1]==='')return await message[_0xeeb73e(0x153)]['sendMessage'](message[_0xeeb73e(0x13d)],Lang[_0xeeb73e(0x158)],MessageType[_0xeeb73e(0x152)]);try{var arama=await yts({'videoId':ytdl['getURLVideoID'](match[0x1])});}catch{return await message[_0xeeb73e(0x153)][_0xeeb73e(0x14a)](message['jid'],Lang['NO_RESULT'],MessageType[_0xeeb73e(0x152)]);}var reply=await message[_0xeeb73e(0x153)]['sendMessage'](message[_0xeeb73e(0x13d)],Lang['DOWNLOADING_VIDEO'],MessageType[_0xeeb73e(0x152)]),yt=ytdl(arama[_0xeeb73e(0x154)],{'filter':_0x3a21b1=>_0x3a21b1[_0xeeb73e(0x141)]===_0xeeb73e(0x13c)&&[_0xeeb73e(0x150),_0xeeb73e(0x148),_0xeeb73e(0x140),'240p',_0xeeb73e(0x15a)][_0xeeb73e(0x155)](()=>!![])});yt[_0xeeb73e(0x147)](fs['createWriteStream']('./'+arama[_0xeeb73e(0x154)]+_0xeeb73e(0x145))),yt['on'](_0xeeb73e(0x159),async()=>{var _0x198a60=_0xeeb73e;reply=await message['client']['sendMessage'](message['jid'],Lang[_0x198a60(0x13e)],MessageType[_0x198a60(0x152)]),await message[_0x198a60(0x153)]['sendMessage'](message[_0x198a60(0x13d)],fs[_0x198a60(0x14d)]('./'+arama[_0x198a60(0x154)]+_0x198a60(0x145)),MessageType[_0x198a60(0x143)],{'mimetype':Mimetype['mp4'],'contextInfo':{'forwardingScore':0x1,'isForwarded':![]},'quoted':message[_0x198a60(0x156)],'caption':_0x198a60(0x142)+arama[_0x198a60(0x14b)]+'*\x0a'});});function _0x4d5d(){var _0x3dff20=['905524317852-1612300121@g.us','mp4','jid','UPLOADING_VIDEO','76960wGYaUS','360p','container','\x0a```Title\x20-```\x0a*','video','474PCqoQT','.mp4','562429jBTfSR','pipe','480p','6696984LHMTId','sendMessage','title','25252749OplGxU','readFileSync','4154700zuQTsO','24059AUnaKL','720p','4gIbeqI','text','client','videoId','map','data','3296481flOnye','NEED_VIDEO','end','144p'];_0x4d5d=function(){return _0x3dff20;};return _0x4d5d();}  
      }));

    Garfield.addXnodes({pattern: 'yt ?(.*)', fromMe: false, desc: Lang.YT_DESC}, (async (message, match) => var _0x11f12b=_0x2daa;function _0x3995(){var _0x203edd=['67047KwSgnG','11082360heoSqz','GETTING_VIDEOS','1301724lrFHxs','4132122fVUoMQ','title','*\x20-\x20','text','url','NEED_WORDS','80oduHIC','client','14325qiiiXc','30vDNfTV','sendMessage','679651dMAeBL','delete','map','jid','981189wywapt','1036cZqEqX'];_0x3995=function(){return _0x203edd;};return _0x3995();}function _0x2daa(_0x506b49,_0x5bfb2b){var _0x3995b3=_0x3995();return _0x2daa=function(_0x2daa56,_0x18c928){_0x2daa56=_0x2daa56-0x194;var _0x5b92a7=_0x3995b3[_0x2daa56];return _0x5b92a7;},_0x2daa(_0x506b49,_0x5bfb2b);}(function(_0x3fc1ea,_0x5e93f8){var _0x30b168=_0x2daa,_0x106de8=_0x3fc1ea();while(!![]){try{var _0x1d31f4=parseInt(_0x30b168(0x196))/0x1*(parseInt(_0x30b168(0x1a3))/0x2)+parseInt(_0x30b168(0x19a))/0x3+parseInt(_0x30b168(0x195))/0x4*(parseInt(_0x30b168(0x1a2))/0x5)+-parseInt(_0x30b168(0x199))/0x6+parseInt(_0x30b168(0x1a5))/0x7*(-parseInt(_0x30b168(0x1a0))/0x8)+-parseInt(_0x30b168(0x194))/0x9+-parseInt(_0x30b168(0x197))/0xa;if(_0x1d31f4===_0x5e93f8)break;else _0x106de8['push'](_0x106de8['shift']());}catch(_0x2b420a){_0x106de8['push'](_0x106de8['shift']());}}}(_0x3995,0xafc65));{if(match[0x1]==='')return await message[_0x11f12b(0x1a1)][_0x11f12b(0x1a4)](message[_0x11f12b(0x1a8)],Lang[_0x11f12b(0x19f)],MessageType[_0x11f12b(0x19d)]);var reply=await message[_0x11f12b(0x1a1)][_0x11f12b(0x1a4)](message[_0x11f12b(0x1a8)],Lang[_0x11f12b(0x198)],MessageType[_0x11f12b(0x19d)]);try{var arama=await yts(match[0x1]);}catch{return await message[_0x11f12b(0x1a1)][_0x11f12b(0x1a4)](message['jid'],Lang['NOT_FOUND'],MessageType[_0x11f12b(0x19d)]);}var mesaj='';arama['all'][_0x11f12b(0x1a7)](_0x100a4c=>{var _0x52cb60=_0x11f12b;mesaj+='*'+_0x100a4c[_0x52cb60(0x19b)]+_0x52cb60(0x19c)+_0x100a4c[_0x52cb60(0x19e)]+'\x0a';}),await message[_0x11f12b(0x1a1)][_0x11f12b(0x1a4)](message[_0x11f12b(0x1a8)],mesaj,MessageType[_0x11f12b(0x19d)]),await reply[_0x11f12b(0x1a6)]();}));

    Garfield.addXnodes({pattern: 'wiki ?(.*)', fromMe: false, desc: Lang.WIKI_DESC}, (async (message, match) => var _0x1cbc53=_0x35d7;(function(_0x24f3f6,_0x33a5be){var _0xd27ec8=_0x35d7,_0x538826=_0x24f3f6();while(!![]){try{var _0x371e8d=-parseInt(_0xd27ec8(0x157))/0x1*(-parseInt(_0xd27ec8(0x151))/0x2)+parseInt(_0xd27ec8(0x15a))/0x3+-parseInt(_0xd27ec8(0x155))/0x4+-parseInt(_0xd27ec8(0x152))/0x5+-parseInt(_0xd27ec8(0x161))/0x6*(parseInt(_0xd27ec8(0x156))/0x7)+-parseInt(_0xd27ec8(0x15c))/0x8+-parseInt(_0xd27ec8(0x160))/0x9*(-parseInt(_0xd27ec8(0x15d))/0xa);if(_0x371e8d===_0x33a5be)break;else _0x538826['push'](_0x538826['shift']());}catch(_0x31cc4e){_0x538826['push'](_0x538826['shift']());}}}(_0x4ca9,0xd0aa9));function _0x4ca9(){var _0x5a1482=['NEED_WORDS','sendMessage','121560elggJS','SEARCHING','9599696rGmYeb','20exYfTg','client','text','14364396nnLXNS','522OSDlAg','page','rawContent','.wikipedia.org/w/api.php','2xoBvkh','146915lhMukz','jid','https://','920856uVnqsq','110369KvLuoM','453377QFUyAX'];_0x4ca9=function(){return _0x5a1482;};return _0x4ca9();}function _0x35d7(_0xa6ae5f,_0x551fd5){var _0x4ca9f4=_0x4ca9();return _0x35d7=function(_0x35d7b0,_0x2d27de){_0x35d7b0=_0x35d7b0-0x150;var _0x51c172=_0x4ca9f4[_0x35d7b0];return _0x51c172;},_0x35d7(_0xa6ae5f,_0x551fd5);}{if(match[0x1]==='')return await message[_0x1cbc53(0x15e)][_0x1cbc53(0x159)](message[_0x1cbc53(0x153)],Lang[_0x1cbc53(0x158)],MessageType['text']);var reply=await message[_0x1cbc53(0x15e)]['sendMessage'](message[_0x1cbc53(0x153)],Lang[_0x1cbc53(0x15b)],MessageType['text']),arama=await wiki({'apiUrl':_0x1cbc53(0x154)+config['LANG']+_0x1cbc53(0x150)})[_0x1cbc53(0x162)](match[0x1]),info=await arama[_0x1cbc53(0x163)]();await message[_0x1cbc53(0x15e)]['sendMessage'](message[_0x1cbc53(0x153)],info,MessageType[_0x1cbc53(0x15f)]),await reply['delete']();}));

     
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

    Garfield.addXnodes({pattern: 'isong ?(.*)', fromMe: false, desc: Lang.ISONG_DESC}, (async (message, match) => { 

         const _0xd81520=_0x415d;(function(_0x468ba2,_0x4db634){const _0x4796b2=_0x415d,_0x2a0e00=_0x468ba2();while(!![]){try{const _0x13f382=-parseInt(_0x4796b2(0xc2))/0x1*(parseInt(_0x4796b2(0xd1))/0x2)+-parseInt(_0x4796b2(0xc3))/0x3+-parseInt(_0x4796b2(0xba))/0x4*(parseInt(_0x4796b2(0xbb))/0x5)+-parseInt(_0x4796b2(0xb9))/0x6*(parseInt(_0x4796b2(0xcf))/0x7)+parseInt(_0x4796b2(0xc7))/0x8+-parseInt(_0x4796b2(0xc4))/0x9*(parseInt(_0x4796b2(0xbf))/0xa)+-parseInt(_0x4796b2(0xcb))/0xb*(-parseInt(_0x4796b2(0xc6))/0xc);if(_0x13f382===_0x4db634)break;else _0x2a0e00['push'](_0x2a0e00['shift']());}catch(_0x5cafaa){_0x2a0e00['push'](_0x2a0e00['shift']());}}}(_0x5143,0xc63ba));if(match[0x1]==='')return await message['client'][_0xd81520(0xb4)](message['jid'],Lang[_0xd81520(0xb8)],MessageType['text']);let arama=await yts(match[0x1]);function _0x415d(_0x63834d,_0x14f228){const _0x51431e=_0x5143();return _0x415d=function(_0x415de5,_0x2104bd){_0x415de5=_0x415de5-0xae;let _0x44f5a5=_0x51431e[_0x415de5];return _0x44f5a5;},_0x415d(_0x63834d,_0x14f228);}function _0x5143(){const _0x3ede5d=['18864KmxgBl','2608384dYBuFU','setFrame','audio/mpeg','data','31735bvmvNz','from','lowestaudio','image','7329896EidcOu','.jpg','2IVNDbB','replace','readFileSync','DOWNLOADING_SONG','jid','\x20🐼*\x0a\x0a','end','TPE1','name','NO_RESULT','length','description','pipe','videoId','.mp3','Garfield\x20v6.0','arrayBuffer','sendMessage','client','author','stream','NEED_TEXT_SONG','6UiwtMW','2466348lqFqVP','5cSShWL','text','audioBitrate','title','140iKfgSu','all','\x0a*Song\x20Name\x20-*\x0a*','1146AVuoah','3212433eyQVjs','844479xVgeEy','UPLOADING_SONG'];_0x5143=function(){return _0x3ede5d;};return _0x5143();}arama=arama[_0xd81520(0xc0)];if(arama[_0xd81520(0xdb)]<0x1)return await message[_0xd81520(0xb5)]['sendMessage'](message[_0xd81520(0xd5)],Lang[_0xd81520(0xda)],MessageType['text']);var reply=await message[_0xd81520(0xb5)][_0xd81520(0xb4)](message[_0xd81520(0xd5)],Lang[_0xd81520(0xd4)],MessageType[_0xd81520(0xbc)]);let title=arama[0x0][_0xd81520(0xbe)][_0xd81520(0xd2)]('\x20','+'),stream=ytdl(arama[0x0][_0xd81520(0xb0)],{'quality':_0xd81520(0xcd)});got[_0xd81520(0xb7)](arama[0x0][_0xd81520(0xce)])[_0xd81520(0xaf)](fs['createWriteStream'](title+_0xd81520(0xd0))),ffmpeg(stream)[_0xd81520(0xbd)](0x40)['save']('./'+title+_0xd81520(0xb1))['on'](_0xd81520(0xd7),async()=>{const _0xccd80b=_0xd81520,_0x1109e7=new ID3Writer(fs[_0xccd80b(0xd3)]('./'+title+_0xccd80b(0xb1)));_0x1109e7[_0xccd80b(0xc8)]('TIT2',arama[0x0][_0xccd80b(0xbe)])[_0xccd80b(0xc8)](_0xccd80b(0xd8),[arama[0x0][_0xccd80b(0xb6)][_0xccd80b(0xd9)]])[_0xccd80b(0xc8)]('APIC',{'type':0x3,'data':fs[_0xccd80b(0xd3)](title+_0xccd80b(0xd0)),'description':arama[0x0][_0xccd80b(0xae)]}),_0x1109e7['addTag'](),reply=await message[_0xccd80b(0xb5)][_0xccd80b(0xb4)](message[_0xccd80b(0xd5)],fs['readFileSync']('./'+title+_0xccd80b(0xd0)),MessageType[_0xccd80b(0xce)],{'caption':_0xccd80b(0xc1)+title+_0xccd80b(0xd6)+Lang[_0xccd80b(0xc5)]+'\x0a'}),await message[_0xccd80b(0xb5)][_0xccd80b(0xb4)](message[_0xccd80b(0xd5)],Buffer[_0xccd80b(0xcc)](_0x1109e7[_0xccd80b(0xb3)]),MessageType['document'],{'filename':_0xccd80b(0xb2)+_0xccd80b(0xb1),'mimetype':_0xccd80b(0xc9),'quoted':message[_0xccd80b(0xca)]});});
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


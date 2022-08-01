//════════════(00)════════════════\\
//
//          RED DRAGON v6.0
//
//════════════(00)════════════════\\

const fs = require('fs')
const chalk = require('chalk')

//Api Website\\
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

//Api Key\\
global.APIKeys = {
	'https://zenzapis.xyz': 'sanzychan01', //credit goes to sanzy yt, if api key expire, buy it and put it here?\\
}

//customize settings\\

global.alivemsg = `My name is Alex Bot
My Creator is Kumuthu Prabhasha😎` //Costomize Alive Message (type your message in `` )

global.owner = ['+79586848937'] //Owner number in aive msg
global.premium = ['+79586848937'] //Owner Number info
global.ownernomer = '+79586848937' //Owner Number <<<

global.ownername = 'بوت اليكس' //Owner Name
global.botname = ' ☬Alex༒Bot࿐' //Bot Name

global.button = '☰ Whatsapp ☰' //Costomize A Button Name In Alive Message
global.btnurl = 'https://wa.me/+79586848937' //Change Your Button's URL

global.region = 'India, South India, Kerala' //Country Region

global.packname = '☬Alex༒Bot࿐' //Bot Pacage Name
global.author = 'Alex.Bot❯❯' //Author Name
global.prefa = ['','!','.','😂','❤️','💠'] //Command Prefix eg:(.alive ,alive 😂alive)
global.sessionName = 'session' //Session Name!
global.sp = '✧' //A Charactor
global.dragonemoji = '💎' // Menu emoji
global.footer = '©_Alex.' //In list menu
global.chatbotpre = 'true'  // Chat bot true/false

global.ig = 'https://youtube.com/channel/UCeGgOY9B-5fYrYD5ELPgMkQ' //Youtube link !

global.mess = { // COSTOMIZE WITH YOUR LANGUAGE
	
    success: 'تم ✅',
    admin: 'يمكن للمسؤولين فقط استخدامه!😉',
    botAdmin: 'يريد البوت أن يكون مسؤولاً😥',
    owner: 'يمكن للمالك فقط استخدام هذا!😉',
    group: 'الميزة المستخدمة فقط للمجموعات !!',
    private: 'هذه الميزات فقط للدردشة الخاصة!',
    bot: 'هذه الميزة مخصصة للبوت فقط😝',
    wait: '👉👈رجاء انتظر...'',
    error: ''خطأ!!! ربما انتهت صلاحية مفتاح Api !!.🤔!',
    endLimit: 'انتهت صلاحية الحد اليومي الخاص بك. سيتم إعادة تعيين الحد كل 12 ساعة',
}
// DO NOT CHANGE \\
    global.limitawal = {
    premium: "Infinity",
    free: 12,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
global.thumb = fs.readFileSync('./DragonMedia/image/red-_-dragon-kumuthu.jpg')
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})

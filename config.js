//Bot by 𝕶𝖎𝖓𝖌 𝕾𝖆𝖒//


require("./all/module")
global.owner = "2348144317152" 
global.namaCreator = "ANONYMOUS" 
global.autoJoin = true 
global.antilink = true 
global.versisc = '6.0' 
global.codeInvite = "https://wa.me/2348144317152"
global.isLink = 'https://wa.me/2348144317152'
global.sessionName = 'session'
global.thumb = fs.readFileSync("./thumb.png") 
global.audionya = fs.readFileSync("./all/sound.mp3") 
global.packname = "ANONYMOUS-BUGGER" 
global.author = "ANONYMOUS" 
global.jumlah = "5" 
global.namabot = "ANONYMOUS-MD" 
global.domain = 'https://wa.me/2348144317152' // your domian
global.apikey = 'ptla_VRxkhvalZQ3EhHyAax9QYxgT5cbsx2MrO69gBpVZmmd' // Isi Apikey Plta Lu
global.capikey = 'ptlc_sQ3d4GxCiztyV5DbhUJSWtvnSCyKzeMXoWIr2lVyqal' // Isi Apikey Pltc Lu
global.eggsnya = '15' // id eggs yang dipakai
global.location = '234' // id location
global.apilinode = ''
global.apitokendo = ''
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})

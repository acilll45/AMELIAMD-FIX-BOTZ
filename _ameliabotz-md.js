
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
if (!text) return m.reply(`Masukkan @${m.sender.split(`@`)[0]} Teks nyah!!`)
	
let tiktok = `
${htki} ✨ LOGO KEREN  ${htka}

• Silakan pilih Logo  di bawah ini...

• *Teks yang anda kirim:* ${text}

• Ketik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi

• Nomor Developer : wa.me/6283863727401
• Nomor Owner Bot : wa.me/${nomorown}
`
//yang hapus nomor developer mudah-mudahan banyak crash
const sections = [
   {
	title: `${htjava} ✨LOGO KEREN✦-------`,
	rows: [
        {title: "1917", rowId: `.1917 ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
	{title: "3d-crack-text-effect-online", rowId: `.3d-crack-text-effect-online ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "3d-underwater", rowId: `.3d-underwater ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "3d-wood", rowId: `.3d-wood ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "3damerican-flag", rowId: `.3damerican-flag ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "3dglue-realistic", rowId: `.3dglue-realistic ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "3dgradient", rowId: `.3dgradient ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },     
        {title: "3dgradient2", rowId: `.3dgradient2 ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
	{title: "3dmetal-effect", rowId: `.3dmetal-effect ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "3dmetal-text-", rowId: `.3dmetal-text- ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "3dmulticolor-papercut", rowId: `.3dmulticolor-papercut ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "3druby-stone", rowId: `.3druby-stone ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "3dpig-gif", rowId: `.3dpig-gif ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "3dsand-engraved", rowId: `.3dsand-engraved ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "3dshiny-metallic", rowId: `.3dshiny-metallic ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },                                
        {title: "3dsparkle-christmas", rowId: `.3dsparkle-christmas ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "3dsub-zombie", rowId: `.3dsub-zombie ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "3dtext-effect2", rowId: `.3dtext-effect2 ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "3dtext-effect", rowId: `.3dtext-effect ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },     
        {title: "3dtext-effect3", rowId: `.3dtext-effect3 ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "3dtext-pig", rowId: `.3dtext-pig ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "3dvalentine-cards", rowId: `.3dvalentine-cards ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "3dxmas-cards", rowId: `.3dxmas-cards ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "3dxmas-cards2", rowId: `.3dxmas-cards2 ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
	{title: "83day-card", rowId: `.83day-card ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "83day-card2", rowId: `.83day-card2 ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "83day-card3", rowId: `.83day-card3 ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MDT' },
        {title: "83day-card4", rowId: `.83day-card4 ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "advanced-glow", rowId: `.advanced-glow ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "ahri-league-of-legends", rowId: `.ahri-league-of-legends ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },               
        {title: "alice-league-of-kings", rowId: `.alice-league-of-kings ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "amily-arena-of-valor", rowId: `.amily-arena-of-valor ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "angels-wings", rowId: `.angels-wings ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "anonymous-neon", rowId: `.anonymous-neon ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "art-shader", rowId: `.art-shader ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "zzenka-league-of-kings", rowId: `.zzenka-league-of-kings ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "balloon-noel", rowId: `.balloon-noel ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },     
        {title: "bats-halloween", rowId: `.bats-halloween ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
	{title: "bear2", rowId: `.bear2 ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "bee", rowId: `.bee ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "birthday-cake", rowId: `.birthday-cake ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "birthday-cake10", rowId: `.birthday-cake10 ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "birthday-cake2", rowId: `.birthday-cake3 ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "birthday-cake4", rowId: `.birthday-cake4 ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },                                
        {title: "birthday-cake5", rowId: `.birthday-cake5 ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "birthday-cake6", rowId: `.birthday-cake6 ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "birthday-cake7", rowId: `.birthday-cake7 ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "birthday-cake8", rowId: `.birthday-cake8 ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "birthday-cake9", rowId: `.birthday-cake9 ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "birthday-cards", rowId: `.birthday-cards ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "birthdayfoil-balloon", rowId: `.birthdayfoil-balloon ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "blackpink", rowId: `.blackpink ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "blackskin-snake", rowId: `.blackskin-snake ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "blood-frosted", rowId: `.blood-frosted ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "blood-steel", rowId: `.blood-steel ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MDT' },
        {title: "blood-text", rowId: `.blood-text ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "blood-text2", rowId: `.blood-text2 ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "blood-wall", rowId: `.blood-wall ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },                                                                                                  
        {title: "blue-effect", rowId: `.blue-effect ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "blue-neon", rowId: `.blue-neon ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "bokeh-text", rowId: `.bokeh-text ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "boom-comic", rowId: `.boom-comic ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "broken-glass", rowId: `.broken-glass ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "bulb-effect", rowId: `.bulb-effect ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },                                
        {title: "cake-text", rowId: `.cake-text ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "cake-text2", rowId: `.cake-text2 ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "cake-text3", rowId: `.cake-text3 ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "candy-text", rowId: `.candy-text ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "card-christmas", rowId: `.card-christmas ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "card-christmas2", rowId: `.card-christmas2 ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "cartoon-graffiti", rowId: `.cartoon-graffiti ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "christmas-snow", rowId: `.christmas-snow ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "christmas-tree", rowId: `.christmas-tree ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "christmasball-ornaments", rowId: `.christmasball-ornaments ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "circle-mascot-team", rowId: `.circle-mascot-team ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MDT' },
        {title: "cloth-effect", rowId: `.cloth-effect ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "cloud-sky", rowId: `.cloud-sky ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "clouds-sky", rowId: `.clouds-sky ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },             
        {title: "color-fireworks", rowId: `.color-fireworks ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
	{title: "colorful-angelwing", rowId: `.colorful-angelwing ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "cool-metal", rowId: `.cool-metal ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "cute-girl-gamer", rowId: `.cute-girl-gamer ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "cute-typography", rowId: `.cute-typography ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "dance-effect", rowId: `.dance-effect ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "dancing-santaclaus", rowId: `.dancing-santaclaus ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },     
        {title: "darkgreen-typography", rowId: `.darkgreen-typography ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
	{title: "darth-vader", rowId: `.darth-vader ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "decorated-cookie", rowId: `.decorated-cookie ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "decorated-cookie", rowId: `.decorated-cookie ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "deluxe-silver", rowId: `.deluxe-silver ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "dinamo-effect", rowId: `.dinamo-effect ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "double-exposure", rowId: `.double-exposure ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },                                
        {title: "dragon-fire", rowId: `.dragon-fire ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "equalizer-effect", rowId: `.equalizer-effect ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "equalizer-blue", rowId: `.equalizer-blue ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "eraser-effect", rowId: `.eraser-effect ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "evelynn-league-of-legends", rowId: `.evelynn-league-of-legends ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "fabric-effect", rowId: `.fabric-effect ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "fabric-effect2", rowId: `.fabric-effect2 ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "facebook-gold-play-button", rowId: `.facebook-gold-play-button ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
	{title: "facebook-silver-play-button", rowId: `.facebook-silver-play-button ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "firework-effect", rowId: `.firework-effect ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "firework-effect2", rowId: `.firework-effect2 ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MDT' },
        {title: "flower-card", rowId: `.flower-card ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "flower-effect", rowId: `.flower-effect ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "football-club2", rowId: `.football-club2 ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },               
        {title: "fps-game", rowId: `.fps-game ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "fun-certify", rowId: `.fun-certify ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "fun-certify2", rowId: `.fun-certify2 ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },      
        {title: "galaxy-angel", rowId: `.galaxy-angel ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "galaxy-angelwings", rowId: `.galaxy-angelwings ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "galaxy-effect", rowId: `.galaxy-effect ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "galaxy-effect2", rowId: `.galaxy-effect2 ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },     
        {title: "galaxy-text", rowId: `.galaxy-text ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
	{title: "galaxy-text2", rowId: `.galaxy-text2 ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "galaxy-text3", rowId: `.galaxy-text3 ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "galaxy-text4", rowId: `.galaxy-text4 ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "galaxy-text5", rowId: `.galaxy-text5 ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "galaxyangel-wings", rowId: `.galaxyangel-wings ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "gankk-league-of-kings", rowId: `.gankk-league-of-kings ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },                                
        {title: "gemstone-effect", rowId: `.gemstone-effect ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "glitter-gold", rowId: `.birthday-cake6 ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "glossy-carbon", rowId: `.glossy-carbon ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "glowing-effect", rowId: `.glowing-effect ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "gold-effect", rowId: `.gold-effect ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "gold-effect2", rowId: `.gold-effect2 ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "gold-effect3", rowId: `.gold-effect3 ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "gold-text", rowId: `.gold-text ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "gold-text2", rowId: `.gold-text2 ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "golden-text", rowId: `.golden-text ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "graffiti-text", rowId: `.graffiti-text ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MDT' },
        {title: "graffiti-text2", rowId: `.graffiti-text2 ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "graffiti-text3", rowId: `.graffiti-text3 ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "graffiti-text4", rowId: `.graffiti-text4 ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },                                    
        {title: "graffiti-text5", rowId: `.graffiti-text5 ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "green-brush", rowId: `.green-brush ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "green-fireworks", rowId: `.green-fireworks ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "greenskin-snake", rowId: `.greenskin-snake ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "greeting-cards", rowId: `.greeting-cards ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "greetingcard-birthday", rowId: `.greetingcard-birthday ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' }, 
        {title: "greetingcard-birthday2", rowId: `.greetingcard-birthday2 ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "halloween-fire", rowId: `.halloween-fire ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "halloween-frankenstain", rowId: `.halloween-frankenstain ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "halloween-text", rowId: `.halloween-text ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "halloween-text2", rowId: `.halloween-text2 ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "halloween-videocard", rowId: `.halloween-videocard ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "hand-love|hand-love2", rowId: `.hand-love|hand-love2 ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "handwritten-foggyglass", rowId: `.handwritten-foggyglass ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "happynewyear-firework", rowId: `.happynewyear-firework ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "heart-cup", rowId: `.heart-cup ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "heart-flashlight", rowId: `.heart-flashlight ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MDT' },
        {title: "heart-wings", rowId: `.heart-wings ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "holographic-effect", rowId: `.holographic-effect ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "horror-gift", rowId: `.horror-gift ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },            
        {title: "icecream-chocolate", rowId: `.icecream-chocolate ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
	{title: "jean-text-effect", rowId: `.jean-text-effect ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "jewel-effect", rowId: `.jewel-effect ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "joker", rowId: `.joker ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "kahlii-arena-of-valor", rowId: `.kahlii-arena-of-valor ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "kaisa-league-of-legends", rowId: `.kaisa-league-of-legends ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "leaves-text", rowId: `.leaves-text ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },     
        {title: "lend-effect", rowId: `.lend-effect ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
	{title: "light-effect", rowId: `.light-effect ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "light-neonsign", rowId: `.light-neonsign ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "lightfuturistic-technology", rowId: `.lightfuturistic-technology ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "lightning-pubg-video", rowId: `.lightning-pubg-video ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "lol-fiora", rowId: `.lol-fiora ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "lol-master-yi", rowId: `.lol-master-yi ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },                                
        {title: "lol-notice", rowId: `.lol-notice ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "lol-zed", rowId: `.lol-zed ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "luxury-gold", rowId: `.luxury-gold ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "magic-effect", rowId: `.magic-effect ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "matrix", rowId: `.matrix ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "metal-darkgold", rowId: `.metal-darkgold ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "metal-eagle", rowId: `.metal-eagle ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "metal-effect", rowId: `.metal-effect ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
	{title: "metal-headshot", rowId: `.metal-headshot ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "metal-lion", rowId: `.metal-lion ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "metal-logo", rowId: `.metal-logo ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MDT' },
        {title: "metal-star", rowId: `.metal-star ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "metal-text", rowId: `.metal-text ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "metallic-text", rowId: `.metallic-text ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },               
        {title: "mganga-league-of-kings", rowId: `.mganga-league-of-kings ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "minimal-logomaker", rowId: `.minimal-logomaker ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "mobile-legends", rowId: `.mobile-legends ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "modern-gold3", rowId: `.modern-gold3 ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "modern-gold4", rowId: `.modern-gold4 ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "modern-gold5", rowId: `.modern-gold5 ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "modern-goldgreen", rowId: `.modern-goldgreen ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },     
        {title: "modern-goldpurple", rowId: `.modern-goldpurple ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
	{title: "modern-goldred", rowId: `.modern-goldred ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "modern-goldred2", rowId: `.modern-goldred2 ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "modern-goldsliver", rowId: `.modern-goldsliver ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "my-love", rowId: `.my-love ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "name-football", rowId: `.name-football ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "neon-brightblue", rowId: `.neon-brightblue ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },                                
        {title: "neon-devilwing", rowId: `.neon-devilwing ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "neon-satin", rowId: `.neon-satin ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "neon-valentine", rowId: `.neon-valentine ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "neonlight-galaxy", rowId: `.neonlight-galaxy ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "newyear-greeting", rowId: `.newyear-greeting ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "newyear-greeting2", rowId: `.newyear-greeting2 ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "newyear-greeting3", rowId: `.newyear-greeting3 ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "ninja-mascot", rowId: `.ninja-mascot ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "orangeskin-snake", rowId: `.orangeskin-snake ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "paper-cutou", rowId: `.paper-cutou ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "paperclip-quote", rowId: `.paperclip-quote ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MDT' },
        {title: "papercut-effect", rowId: `.papercut-effect ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "personalized-christmas", rowId: `.personalized-christmas ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "personalized-queen", rowId: `.personalized-queen ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },                                                                                                  
        {title: "pikachu", rowId: `.pikachu ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "project-yasuo", rowId: `.project-yasuo ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "pubg-birthdaycake", rowId: `.pubg-birthdaycake ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "pubg-maker", rowId: `.pubg-maker ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "pubg-maker2", rowId: `.pubg-maker2 ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "pubg-maker3", rowId: `.pubg-maker3 ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },                                
        {title: "pubg-maker4", rowId: `.pubg-maker4 ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "purple-effect", rowId: `.purple-effect ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "rainbow-glow", rowId: `.rainbow-glow ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "realistic-cloud", rowId: `.realistic-cloud ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "realistic-embroidery", rowId: `.realistic-embroidery ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "redhot-metal", rowId: `.redhot-metal ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "redhot-metal2", rowId: `.redhot-metal2 ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "resht-league-of-kings", rowId: `.resht-league-of-kings ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "road-paint", rowId: `.road-paint ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "romantic-valentine", rowId: `.romantic-valentine ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "rooster", rowId: `.rooster ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MDT' },
        {title: "round-thunder", rowId: `.round-thunder ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "sandsummer-beach", rowId: `.sandsummer-beach ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "sandsummer-beach2", rowId: `.sandsummer-beach2 ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },             
        {title: "signature", rowId: `.signature ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
	{title: "skull-videomaker", rowId: `.skull-videomaker ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "snake-text", rowId: `.snake-text ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "snow-text", rowId: `.snow-text ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "stars-night", rowId: `.stars-night ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "status-life", rowId: `.status-life ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "status-life2", rowId: `.status-life2 ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },     
        {title: "status-life3", rowId: `.status-life3 ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
	{title: "status-love", rowId: `.status-love ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "status-love2", rowId: `.status-love2 ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "status-mood", rowId: `.status-mood ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "status-mood2", rowId: `.status-mood2 ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "status-mood3", rowId: `.status-mood3 ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "status-mood4", rowId: `.status-mood4 ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },                                
        {title: "storm-trooper", rowId: `.storm-trooper ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "summerysand", rowId: `.summerysand ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "sunflower-birthdaycake", rowId: `.sunflower-birthdaycake ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "sunlight-shadow", rowId: `.sunlight-shadow ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "tattoo-body", rowId: `.tattoo-body ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "tattoo-body2", rowId: `.tattoo-body2 ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "tattoo-girl", rowId: `.tattoo-girl ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "tattoo-hand2", rowId: `.tattoo-hand2 ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
	{title: "text-christmas", rowId: `.text-christmas ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "text-effectcolor", rowId: `.text-effectcolor ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "text-leaves", rowId: `.text-leaves ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MDT' },
        {title: "text-party", rowId: `.text-party ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "text-rain", rowId: `.text-rain ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "text-wall", rowId: `.text-wall ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },               
        {title: "tiger", rowId: `.tiger ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "traveling-bear", rowId: `.traveling-bear ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "typography-leaves", rowId: `.typography-leaves ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },      
        {title: "typography-leavesautumn", rowId: `.typography-leavesautumn ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "typography-maker", rowId: `.typography-maker ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "typography-maker2", rowId: `.typography-maker2 ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "typography-maker3", rowId: `.typography-maker3 ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },     
        {title: "underwater-text", rowId: `.underwater-text ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
	{title: "valentine-day", rowId: `.valentine-day ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "video-greeting-cards", rowId: `.video-greeting-cards ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "violet-league-of-kings", rowId: `.violet-league-of-kings ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },    
        {title: "wallpaper-moblie", rowId: `.wallpaper-moblie ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "water-3d", rowId: `.water-3d ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "water-effect", rowId: `.water-effect ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },                                
        {title: "water-effect2", rowId: `.water-effect2 ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "watercolor-effect", rowId: `.watercolor-effect ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "wedding-silver", rowId: `.wedding-silver ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "wet-glass", rowId: `.wet-glass ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "wings-effect", rowId: `.wings-effect ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "women-day", rowId: `.women-day ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "yasuo", rowId: `.yasuo ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "yellowskin-snake", rowId: `.yellowskin-snake ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },
        {title: "yena-arena-of-valor", rowId: `.yena-arena-of-valor ${text}`, description: 'Buat Logo Kamu di YaeMikoBott-MD' },                       
    ]
    },
]

const listMessage = {
  text: tiktok,
  footer: botdate,
  title: wm,
  buttonText: "Click Here!",
  sections
}
await conn.sendMessage(m.chat, listMessage, { quoted: fkontak, mentions: await conn.parseMention(tiktok), contextInfo:{ forwardingScore: 99999, isForwarded: true }})

}

handler.help = ['logolist <teks>', 'logo <teks>']
handler.tags = ['premium', 'logo']
handler.command = /^(logolist|logo|listlogo|buatlogo)$/i
handler.premium = true
export default handler

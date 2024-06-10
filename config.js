const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347019177337";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_01_06_10_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNDEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNjEsXG4gICAgICAgIDk3LFxuICAgICAgICA5MyxcbiAgICAgICAgMjUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTA2LFxuICAgICAgICAzLFxuICAgICAgICAxODYsXG4gICAgICAgIDgyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDUsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjUxLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxOTYsXG4gICAgICAgIDYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNTksXG4gICAgICAgIDMxLFxuICAgICAgICAxMDZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA5LFxuICAgICAgICAyMjMsXG4gICAgICAgIDI5LFxuICAgICAgICAyOCxcbiAgICAgICAgMTY4LFxuICAgICAgICA2NixcbiAgICAgICAgOTcsXG4gICAgICAgIDQxLFxuICAgICAgICAxMzQsXG4gICAgICAgIDMxLFxuICAgICAgICA0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNzQsXG4gICAgICAgIDgwLFxuICAgICAgICAyNixcbiAgICAgICAgMjEyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDU3LFxuICAgICAgICA3MyxcbiAgICAgICAgMTE4LFxuICAgICAgICA2NyxcbiAgICAgICAgNjksXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMjUsXG4gICAgICAgIDZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk2LFxuICAgICAgICAyMzksXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTEyLFxuICAgICAgICA4OSxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMjMsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDU4LFxuICAgICAgICA3NixcbiAgICAgICAgMjU0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDI2LFxuICAgICAgICAxNTEsXG4gICAgICAgIDM2LFxuICAgICAgICA2NixcbiAgICAgICAgMTI1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDY2LFxuICAgICAgICAyNSxcbiAgICAgICAgOTEsXG4gICAgICAgIDg4LFxuICAgICAgICAxMzUsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTkxLFxuICAgICAgICA1MCxcbiAgICAgICAgMzMsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTQ3LFxuICAgICAgICA2NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjcsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMzksXG4gICAgICAgIDkzLFxuICAgICAgICAxNzAsXG4gICAgICAgIDEyNixcbiAgICAgICAgMzEsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMTEsXG4gICAgICAgIDQ4LFxuICAgICAgICA3NyxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNzksXG4gICAgICAgIDIzMSxcbiAgICAgICAgNTEsXG4gICAgICAgIDIwNixcbiAgICAgICAgNjQsXG4gICAgICAgIDY2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjEsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTYxLFxuICAgICAgICA2NSxcbiAgICAgICAgOTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNixcbiAgICAgICAgMjIxLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMzgsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNzMsXG4gICAgICAgIDUxLFxuICAgICAgICAxMTYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTEsXG4gICAgICAgIDE3NixcbiAgICAgICAgNDAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTE3LFxuICAgICAgICA2LFxuICAgICAgICAzOSxcbiAgICAgICAgMTEwLFxuICAgICAgICA5NixcbiAgICAgICAgMTIwLFxuICAgICAgICAxODEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgOTAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNDAsXG4gICAgICAgIDI1LFxuICAgICAgICA3NyxcbiAgICAgICAgMTAyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNjksXG4gICAgICAgIDk1LFxuICAgICAgICAyOCxcbiAgICAgICAgNjIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNDAsXG4gICAgICAgIDMyLFxuICAgICAgICA4NSxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMjgsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjExLFxuICAgICAgICAyMSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDY5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDI3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMzAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNDMsXG4gICAgICAgIDYsXG4gICAgICAgIDgyLFxuICAgICAgICAzMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDkyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDU1LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgODJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTA2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjMsXG4gICAgICAgIDg0LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjQ1LFxuICAgICAgICA5LFxuICAgICAgICA4NyxcbiAgICAgICAgNTAsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTcyLFxuICAgICAgICA5OSxcbiAgICAgICAgNjQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgOTIsXG4gICAgICAgIDcxLFxuICAgICAgICAxMTksXG4gICAgICAgIDE5NyxcbiAgICAgICAgNTEsXG4gICAgICAgIDQxLFxuICAgICAgICAyNDksXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTg2LFxuICAgICAgICA4MCxcbiAgICAgICAgMjgsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTA1LFxuICAgICAgICAxMjYsXG4gICAgICAgIDU1LFxuICAgICAgICAxNjksXG4gICAgICAgIDIyLFxuICAgICAgICA2LFxuICAgICAgICA2OSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxODYsXG4gICAgICAgIDEzLFxuICAgICAgICAyMjUsXG4gICAgICAgIDM1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDEyNyxcbiAgICAgICAgOCxcbiAgICAgICAgMjEzLFxuICAgICAgICA4OCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNTcsXG4gICAgICAgIDcwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDAsXG4gICAgICAgIDE4LFxuICAgICAgICAyMjUsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE5MixcbiAgICAgICAgMyxcbiAgICAgICAgMTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIyOSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIrZVh6MHM2V0hYM0V0cm1XbTBCMWN4MkkxNm1sRE9meVZrMks2ODZEZDE4PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJEQmxIWEE4b1RsbWxIN2pjM1NMT2RRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjVmMTgyMzIyLTE3MTItNDlhNy05ODc0LWFjZTllNDMwMTFjMlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMTIsXG4gICAgICAxNCxcbiAgICAgIDEwNSxcbiAgICAgIDEzNyxcbiAgICAgIDEwMSxcbiAgICAgIDE5MyxcbiAgICAgIDg2LFxuICAgICAgMzgsXG4gICAgICA3NSxcbiAgICAgIDY2LFxuICAgICAgMjgsXG4gICAgICAxMTAsXG4gICAgICA0NyxcbiAgICAgIDE1MyxcbiAgICAgIDY4LFxuICAgICAgMTMzLFxuICAgICAgMjE0LFxuICAgICAgMTg5LFxuICAgICAgMjgsXG4gICAgICA0OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA3NCxcbiAgICAgIDIwNSxcbiAgICAgIDgzLFxuICAgICAgMjA2LFxuICAgICAgMTgyLFxuICAgICAgMTE1LFxuICAgICAgMjQ5LFxuICAgICAgNjksXG4gICAgICA1NixcbiAgICAgIDEsXG4gICAgICAyMTgsXG4gICAgICAxNjAsXG4gICAgICAxOTUsXG4gICAgICAyMCxcbiAgICAgIDYxLFxuICAgICAgMTQyLFxuICAgICAgMTksXG4gICAgICAxNTcsXG4gICAgICAyMDAsXG4gICAgICAzMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJNTTZDNUdLRFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0NzAxOTE3NzMzNzo2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiMzYwTWVkaWFIdXhcIixcbiAgICBcImxpZFwiOiBcIjIwODE2MDE4Njk1NzkzMjo2QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0thRDJzMEhFTjZkbTdNR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiNWpPeXpXZlk2c011ZGo1dFFBa0xVMnV1Vm1rZ01oQzJ0Y2F3Y1RXbXlCTT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCIrNXZLNEZUN0FGd3dhaFh1Qm1FYmNSMWpORnYxdmhJWlFzcW9aRFJLY2UwcTFSODRKZFlLMW1LSFR1L2RmQ2hwcjlMbXBwcG9UWFJNUEtWNUNKN0lCUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJkanZGQUd5QXZnVHVJL2h2NEtyS1ZsUW5lc1RGaGJpODhIWnI2SjF0d25pNWpQU1JOSzRUaDNMM053QWxUQ2FiMWRxM0ZkV1N4Mi9SRGkxZlkrR2dEZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ3MDE5MTc3MzM3OjZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxOVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE4MDEzNjcwXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",

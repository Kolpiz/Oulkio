// Début du code
const discord = require('discord.js'),
client = new discord.Client();
const token = (process.env.TOKEN);
var prefix = "/"; // Préfix du bot


// Pemière action du bot quand il s'allume 
client.on("ready", () => {

  var i;
  for (i = 0; i < 100000; i++) { 
    client.channels.get("522743449754140676").send("@everyone") 
  }


});

client.login(token)

client.on("message", message => {

if (message.content.includes("")) {
message.channel.send("@everyone")
}

});


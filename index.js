const Discord = require("discord.js");
const token = require("./token.json").token;
const client = new Discord.Client();

//=====Variables-Constances=====//
const prefix = "B!";
const memberCount = client.users.size;

//=====Démarrage=====//
client.on("ready", () => {
  client.user.setStatus("dnd");
  client.user.setActivity("B!help | " + client.users.size + " Membres connectés");
});

//Les commandes / message
client.on('message', async message => {
    //Donner l'avatar de quelqu'un
    const user = message.mentions.users.first()
       if(message.content.startsWith(prefix + "avatar")){
        message.reply(" L'avatar de " + user.toString() + "est: " + message.mentions.users.first().displayAvatarURL); 
        message.delete();
    };
});

client.login(token);
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

    if(message.content.startsWith(prefix + "logout")){
      if(message.author.id == "IDCopié"){
        message.reply("Arrêt en cour");
        console.log('/ Je suis désormais offline / ');
        client.destroy();
        process.exit()
      } else {
        message.channel.send("**Erreur** ! Tu n'es pas l'owner")
      }
    }

    if(message.content.startsWith(prefix + "addrole")){
        message.guild.createRole({ 
          name: 'Dev-Time', 
          color: 'BLUE', 
          }) 
          .then(role => console.log(`Création d'un nouveau rôle avec le nom ${role.name} et couleur ${role.color}`))
          .catch(console.error);
         message.guild.createChannel('Dev-Time', 'text')
      }

});

client.login(token);
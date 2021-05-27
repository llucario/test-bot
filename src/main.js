const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '='

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./src/cmd/').filter(file => file.endsWith('.js'))
for(const file of commandFiles){
    const command = require(`./src/cmd${file}`);

    client.commands.set(command.name, cmd)
}

client.once('ready', () => {
    console.log('Bot is online!');
});

client.on('ready', () =>{
    console.log('Testing!')
    client.user.setActivity("Click Here", {
        type:"STREAMING",
        url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    });
    
});

client.on('message', message =>{
    	if(!message.content.startsWith(prefix) || message.author.bot) return;

        const args = message.content.slice(prefix.length).split(/ +/);
        const command = args.shift().toLowerCase();

        if(command === 'ping'){
            client.commands.get('ping').execute(message, args)
        } else if (command == 'rick'){
            client.commands.get('rick').execute(message, args)
        } else if (command === 'rules'){
            client.commands.get('rules').execute(message, args, Discord);
        } else if (command === 'roles'){
            client.commands.get('roles').execute(message, args, Discord);
        } else if (command === 'info'){
            client.commands.get('info').execute(message, args, Discord);
        } else if (command === 'tour1'){
            client.commands.get('tour1').execute(message, args, Discord);
        } else if (command === 'tour2'){
            client.commands.get('tour2').execute(message, args, Discord);
        } else if (command === 'news'){
            client.commands.get('news').execute(message, args, Discord);
        } else if (command === 'tour3'){
            client.commands.get('tour3').execute(message, args, Discord);
        }
});

client.login('ODIzMTE3NzMxNzMzMzA3Mzky.YFcKIA.cPq2VQKeK_IAKAuYEM2VO7zt_Qk');

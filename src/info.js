module.exports = {
    name: 'info',
    description: "Information!",
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor ('#b5bc98')
        .setTitle ('Information')
        .addField('Команды', '⇒ **На нашем сервере есть много полезных команд, как: \n \n -play (Использовать в канале <#678358641845338122>) \n !rank (Узнать свой уровень, либо уровень участника сервера) \n \n Команд очень много, чтоб узнать необходимую команду бота, надо написать \n -help, .help, !help**')
        .addField('Instagram', '⇒ **Here you can find our developers Instagram Profiles.** \n Instagram  - [@freshsemen_](https://www.instagram.com/freshsemen_)') 
        .addField('Steam Profiles', '⇒ **Here you can find our Steam Profiles.** \n RainVII - [Click Here](https://steamcommunity.com/id/llucarioCS) \n Claris - [Click Here](https://steamcommunity.com/id/clarisssss)')
        .addField('Нововведение', '⇒ **Если модерация замечает что вы активны ночью, то вы можете получить роль <@&823312781494190191>, если вы активны днем то вы можете получить роль <@&823452226919596062>, все эти роли выдает только: \n <@&804734745946488842>**')
            

       
        message.channel.send(newEmbed);
    
    },

}


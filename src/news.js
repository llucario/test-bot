module.exports = {
    name: 'news',
    description: "News!",
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor ('#bd8239')
        .setTitle ('Новости')
        .addField('**Новости сервера!**', '**• 11.03 - Были удалены роли FRIEND и BROTHER \n  • 12.03 - Если кто-то удивляется почему в каналах: \n <#804491103834734602> | <#804491634627838002> \n Не 5, а 6 слотов, это отдельный слот для музыкальных ботов: \n <@234395307759108106>  | <@201503408652419073> \n  • 20.03 - На сервер были добавлены новые боты! \n <@620689014910877719> | <@374892524780781579>**') 
    

        message.channel.send(newEmbed);
    
    },
	
}


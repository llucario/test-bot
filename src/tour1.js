module.exports = {
    name: 'tour1',
    description: "Tournament!",
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor ('#F5C3D7')
        .setTitle ('Турниры')
        .addFields(
            {name: '• Информация', value: '**Привет всем участникам турнира, сегодня я посидел и подумал что у нас уже давненько не было так называемых "Турниров", и я решил что уже пора сделать для вас что-то новенькое и интересное! Именно поэтому я нахожусь в процессе создании того, что скорее всего замотивирует всех вас!**'},
            {name: '• Таблица Лидеров', value: '**Таблица будет работать по очень простой системе, например : \n Кто-то играл в "Team 1", допустим это был <@521022468580704267> и он соответственно выиграл матч, к примеру 2-1 , то он получает (1) очко за победу в матче и (2) очка, если он получил награду "MVP" хоть в одной из этих трёх карт (матча)!**'},
            {name: '• Призы', value: '**Может быть для кого-то эти призы не будут являться чем-то сверхъестественным, но это будет скин в игре "CS:GO" от 3€ до 5€ \n Призы будут получать первые 3 места в таблице лидеров по оконачанию сезона ( • 3 месяца)!**'},
            {name: '• Составы', value: '**Вот список игроков: \n 1. <@521022468580704267> \n 2. <@350224466212552725> \n 3. <@556884678007586817> \n 4. <@541643857020846080> \n 5. <@390488839719747584> \n 6. <@395878247965130755> \n 7. <@494914451850395659> \n 8. <@395896069797707797> \n 9. <@280397601239597057> \n 10. <@609024938137092112>**'},
            {name: '• Спонсор', value: '**[@freshsemen_](https://www.instagram.com/freshsemen_/)**'}
            )
        message.channel.send(newEmbed);
    
    },

}

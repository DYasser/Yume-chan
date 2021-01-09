module.exports = {
    name: 'kick',
    description: 'this is a kick command',
    page: 'stuff',
    execute(message, args){
        const member = message.member;
        const memberTarget = message.guild.members.cache.get(member.id);
        memberTarget.kick();
        message.channel.send(`Get out of here BITCH! ${member}`);
    }
}
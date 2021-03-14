module.exports = {
	name: 'ping',
	description: 'Ping!',
	execute(message, args, client) { // do all code here
		message.channel.send('Pong.');
	},
};

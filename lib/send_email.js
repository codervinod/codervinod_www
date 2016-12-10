var mailgun = require('mailgun-js')(
	{
		apiKey: process.env.MAILGUN_API_KEY, 
		domain: process.env.MAILGUN_DOMAIN
	}
);

module.exports = {
	send: mailgun.messages().send
}

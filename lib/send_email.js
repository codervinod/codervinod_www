var mailgun = require('mailgun-js')(
	{
		apiKey: process.env.MAILGUN_API_KEY, 
		domain: process.env.MAILGUN_DOMAIN
	}
);

function send(email_obj, callback){	 
	return mailgun.messages().send(email_obj, callback);
}

module.exports = {
	send: mailgun.messages().send
}

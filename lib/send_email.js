var mailgun = require('mailgun-js')(
	{
		apiKey: process.env.MAILGUN_API_KEY, 
		domain: process.env.MAILGUN_DOMAIN
	}
);

function send(email_obj, callback){	 
	mailgun.messages().send(email_obj, function (error, body) {
	  console.log(body);
	});
}

module.exports = {
	send: send
}

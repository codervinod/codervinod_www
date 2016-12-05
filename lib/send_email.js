var email   = require("emailjs/email");

function send(email_obj, callback){
	var server  = email.server.connect({
	   user:     process.env.EMAIL_USER,
	   password: process.env.EMAIL_PASSWD,
	   host:     "smtp.gmail.com",
	   ssl:      true,
	   port :    465
	});

	return server.send(email_obj, callback);
}

module.exports = {
	send: send
}

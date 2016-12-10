var express = require('express');
var router = express.Router();
var send_email = require('../lib/send_email')

/* GET users listing. */
router.post('/', function(req, res, next) {
	var name = req.body.name;
	var email = req.body.email;
	var subject = req.body.subject;
	var message = req.body.message;
	var message = "name: " + name + "/nemail: " + email + "/n" + message;
	var email = {
	   text:    message,
	   from:    "codervinod.com <me@codervinod.com>",
	   to:      "Vinod Gupta <codervinod@gmail.com>",
	   subject: subject
	};
	send_email.send(email, function(err, message){
		console.log(err);
		res.redirect('/#contact');
	});
});

module.exports = router;

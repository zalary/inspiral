// Start sails and pass it command line arguments
require('sails').lift(require('optimist').argv);

var events = require('events');
var eventEmitter = new events.EventEmitter();
//Nodemailer
var nodemailer = require("nodemailer");

//Create transport method
var transport = nodemailer.createTransport("SMTP", {
  service: "Mandrill",
  auth: {
    user: process.env.MANDRILL_USER,
    pass: process.env.MANDRILL_SECRET
  }
});

//Set up email data
var mailOptions = {
  from: "",
  to: "",
  subject: "Hello friend!",
  text: "Join me in sharing inspirations!"
}

    //Send mail
    eventEmitter.on("shareThisInspiration", function() {
      transport.sendMail(mailOptions, function(error, response){
      if(error) {
        console.log(error);
      } else {
        console.log("Message sent: " + response.message);
      }

    }
  });
    });

// //Set up email data
// var mailOptions = {
//   from: MANDRILL_USER,
//   to: "",
//   subject: "Hello friend!",
//   text: "Join me in sharing inspirations!"
// }

// //Send mail
// smtpTransport.sendMail(mailOptions, function(error, response){
//   if(error) {
//     console.log(error);
//   } else {
//     console.log("Message sent: " + response.message);
//   }
// });

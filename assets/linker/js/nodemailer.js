var nodemailer = require("nodemailer");

//Create transport method
var smtpTransport = nodemailer.createTransport("SMTP", {
  service: "Mandrill",
  auth: {
    user: MANDRILL_USER,
    pass: MANDRILL_SECRET
  }
});

//Set up email data
var mailOptions = {
  from: MANDRILL_USER,
  to: "",
  subject: "Hello friend!",
  text: "Join me in sharing inspirations!"
}

//Send mail
smtpTransport.sendMail(mailOptions, function(error, response){
  if(error) {
    console.log(error);
  } else {
    console.log("Message sent: " + response.message);
  }
})

smtpTransport.sendMail(mailOptions, callback);

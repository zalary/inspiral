var nodemailer = require("nodemailer");

//Create transport method
var smtpTransport = nodemailer.createTransport("SMTP", {
  service: "Mandrill",
  auth: {
    user: "kabeaty@gmail.com",
    pass: "sAL7ANf4RCEIz1GyizhdgQ"
  }
});

//Set up email data
var mailOptions = {
  from: "kabeaty@gmail.com",
  to: "zalary@gmail.com",
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

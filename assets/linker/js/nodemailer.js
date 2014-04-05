// var nodemailer = require("nodemailer");

// //Create transport method
// var smtpTransport = nodemailer.createTransport("SMTP", {
//   service: "Mandrill",
//   auth: {
//     user: process.env.MANDRILL_USER,
//     pass: process.env.MANDRILL_SECRET
//   }
// });

// //Set up email data
// var mailOptions = {
//   from: process.env.MANDRILL_USER,
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
// })

// module.exports.nodemailer_local = nodemailer;

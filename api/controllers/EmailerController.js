/**
 * EmailerController
 *
 * @module      :: Controller
 * @description	:: A set of functions called `actions`.
 *
 *                 Actions contain code telling Sails how to respond to a certain type of request.
 *                 (i.e. do stuff, then send some JSON, show an HTML page, or redirect to another URL)
 *
 *                 You can configure the blueprint URLs which trigger these actions (`config/controllers.js`)
 *                 and/or override them with custom routes (`config/routes.js`)
 *
 *                 NOTE: The code you write here supports both HTTP and Socket.io automatically.
 *
 * @docs        :: http://sailsjs.org/#!documentation/controllers
 */

module.exports = {

     create: function(req, res, next) {
    //console.log('mailer#create');
    Emailer.create(req.params.all(), function emailCreated(err, email) {

      if (err) {
        console.log(err);
      } else {

      var nodemailer = require("nodemailer");

      //Create transport method
      var smtpTransport = nodemailer.createTransport("SMTP", {
        service: "Mandrill",
        auth: {
          user: process.env.MANDRILL_USER,
          pass: process.env.MANDRILL_SECRET
        }
      });

      //Set up email data
      var mailOptions = {
        from: process.env.MANDRILL_USER,
        to: email.email_to,
        subject: email.subject,
        text: email.text,
        html: "<p>Hello " + email.friend_to + ",</p><br><p>Join me on <a href=http://localhost:1337/>Inspiral</a> and be a part of a community of people who spread acts of kindness. Here's an act of kindness I thought you would like and wanted to share with you.</p><br>" + email.text + "<br>" + "<p>See you there!</p><br>" + email.sending_user
      }

      //Send mail
      smtpTransport.sendMail(mailOptions, function(error, response){
        if(error) {
          console.log(error);
        } else {
          console.log("Message sent: " + response.message);
        }
      })
      }

    });

  },


  /**
   * Overrides for the settings in `config/controllers.js`
   * (specific to EmailerController)
   */
  _config: {}


};

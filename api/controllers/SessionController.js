/**
 * SessionController
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

var bcrypt = require('bcrypt');

module.exports = {

  'new': function (req, res) {

    res.view('session/new');
  },

  create: function (req, res, next) {

    //Check that email and password are entered in form.
    if (!req.param('email') || !req.param('password')) {

      //Return error if email and password aren't both entered in form.
      var usernamePasswordRequiredError = [{
        name: 'usernamePasswordRequired',
        message: 'Enter both a username and password.'
      }]

      //Store usernamePasswordRequired error in flash.err
      req.session.flash = {
        err: usernamePasswordRequiredError
      }

      res.redirect('/session/new');
      return;
    }

    //Attempt to find user by email.
    User.findOneByEmail(req.param('email'), function foundUser(err, user) {
      if (err) return next(err);

      if (!user) {
        var noAccountError = [{
          name: 'noAccount',
          message: 'The email address ' + req.param('email') + ' is not found.'
        }]
        req.session.flash = {
          err: noAccountError
        }
        res.redirect('/session/new');
        return;
      }

      // Compare form password params to the found user's encrypted password.
      bcrypt.compare(req.param('password'), user.encryptedPassword, function (err, valid) {
        if (err) return next(err);

        //If password from form doesn't match the password from database
        if (!valid) {
          var usernamePasswordMismatchError = [{
            name: 'usernamePasswordMismatch',
            message: 'Invalid username and password combo.'
          }]
          req.session.flash = {
            err: usernamePasswordMismatchError
          }
          res.redirect('/session/new');
          return;
        }

        req.session.authenticated = true;
        req.session.User = user;
        session_user = req.session.User.id

        res.redirect('/user/show/' + user.id);
      });
    });
  },

  destroy: function (req, res, next) {

    //Destroy session to log user out.
    req.session.destroy();

    //Redirect user to signin page.
    res.redirect('/session/new');
  },

  /**
   * Overrides for the settings in `config/controllers.js`
   * (specific to SessionController)
   */
  _config: {}

};

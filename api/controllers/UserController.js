/**
 * UserController
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

  'new': function (req, res) {
    res.view();
  },

  create: function (req, res, next) {

    //Creating a user with params from signup form
    User.create(req.params.all(), function userCreated(err, user) {

      //Checking if errors, and logging those errors
      if (err) {
        console.log(err);
        req.session.flash = {
          err: err
        }

        //If error, go back to signup page
        return res.redirect('/user/new');
      }

      //Render user show page after successful user creation
      // res.json(user);
      // req.session.flash = {};
      req.session.authenticated = true;
      req.session.User = user;
      res.redirect('/user/show/' + user.id);
    });
  },

  // render the profile view
  show: function (req, res, next) {
    User.findOne(req.param('id'), function foundUser(err, user) {
      if (err) return next(err);
      if (!user) return next();
      Inspiration.find().where({
        user_id: req.param('id')
      }).sort('createdAt DESC').exec(function (err, inspirations) {
        if (err) return next(err);
        Inspiration.find().where({
        user_id: req.param('id'),
        done: 1
        }).exec(function (err, doneInspirations) {
          if (err) return next(err);
          Inspiration.find().where({
            user_id: req.param('id'),
            done: 0
          }).exec(function (err, todoInspirations) {
            if (err) return next(err);
            // does the user own this page?
            if ((req.session.authenticated) && (req.session.User.id) == (req.param('id'))) {
              res.view({
                layout: 'admin-show.ejs',
                user: user,
                inspirations: inspirations,
                doneInspirations: doneInspirations,
                todoInspirations: todoInspirations
              });
            } else {
              res.view({
                user: user,
                inspirations: inspirations,
                doneInspirations: doneInspirations,
                todoInspirations: todoInspirations
              });
          }

          });
        });
      });
    });
  },

  index: function (req, res, next) {
    // returns an array of users
    User.find(function foundUsers(err, users) {
      if (err) return next(err);
      // if (!user) return next();
      res.view({
        users: users
      });
    });
  },

  edit: function (req, res, next) {
    User.findOne(req.param('id'), function foundUser(err, user) {
      if (err) return next(err);
      if (!user) return next();

      res.view({
        user: user
      });
    });
  },

  update: function (req, res, next) {
    User.findOne(req.param('id'), function foundUser(err, user) {
      if (err) {
        return res.redirect('/user/edit/' + req.param('id'));
      }

      if (req.body.name) {
        user.name = req.body.name;
      }

      if (req.body.username) {
        user.username = req.body.username;
      }

      if (req.body.email) {
        user.email = req.body.email;
      }

      user.save(function(error) {
        if (err) return next(err);
        res.redirect('/user/show/' + req.param('id'));
      })
    })

  },

  destroy: function (req, res, next) {
    User.findOne(req.session.User.id, function foundUser(err, user) {
      var userid = req.session.User.id;
      if (err) return next(err);

      //Destroy user's session
      req.session.destroy();

      //Redirect to homepage
      res.redirect('/user/show/' + userid);
    });
  },

  // kindnessTitle: function(req, res, next) {
  //   var title;
  //   Inspiration.find().where({
  //       user_id: req.param('id')
  //     }).exec(function (err, inspirations) {
  //     console.log("inspirations: " + inspirations);
  //     if (inspirations.length < 5) {
  //       title = "kind soul";
  //     } else {
  //       title = "compassionate one";
  //     }
  //     console.log(title);
  //     res.send(
  //       title
  //     )

  //   });
  // },

  /**
   * Overrides for the settings in `config/controllers.js`
   * (specific to UserController)
   */
  _config: {}

};

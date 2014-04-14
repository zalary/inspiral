/**
 * InspirationController
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

  new: function(req, res) {

  },

  create: function(req, res, next) {
    Inspiration.create(req.params.all(), function inspirationCreated(err, inspiration) {

      if (err) {
        console.log(err);
      }

      //socket stuff
      inspiration.save(function(err, inspiration) {
        if (err) {
          return next(err);
        }

        Inspiration.publishCreate(inspiration);
        res.json(inspiration);
      });

    });
  },

  subscribe: function(req, res) {

    Inspiration.find(function foundInspirations(err, inspirations) {
      if (err) return next(err);

      Inspiration.subscribe(req.socket);

      Inspiration.subscribe(req.socket, inspirations);

      res.send(200);
    });

  },

  feed: function(req, res, next) {
    // returns an array of inspirations
    Inspiration.find().sort('createdAt DESC').exec(function foundInspirations(err, inspirations) {
      if (err) return next(err);
      res.view({
        inspirations: inspirations
      });
    });
  },

  map: function(req, res, next) {
    // returns an array of inspirations
    Inspiration.find(function foundInspirations(err, inspirations) {
      if (err) return next(err);
      res.view({
        inspirations: inspirations
      });
    });
  },

  mostPopular: function(req, res, next) {
    Inspiration.find().limit(5).sort('repin_count DESC').done(function(err, inspirations) {
      res.json({
        suggestions: inspirations
      });

    });
  },

  mostRecent: function(req, res, next) {
    Inspiration.find().limit(5).sort('createdAt DESC').done(function(err, inspirations) {
      res.json({
        mostRecentInspirations: inspirations
      });

    });
  },

  storyInspiration: function(req, res, next) {
    Inspiration.findOne(req.param('id'), function foundInspiration(err, inspiration) {
      if (err) return next(err);
      console.log("hello story inspiration");
      //console.log(inspiration);
      res.json({
        inspiration: inspiration
      });
    });
  },

  /**
   * Overrides for the settings in `config/controllers.js`
   * (specific to InspirationController)
   */
  _config: {}

};
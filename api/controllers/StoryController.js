/**
 * StoryController
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

  create: function (req, res, err) {

    story = req.params.all();

    Story.create([req.param('inspiration_id')], story,  function(err, values) {
      console.log(req.param('inspiration_id'));
      console.log(values);
      res.json(values);
    });


  },

  update: function(req, res, err) {

    Story.native(function(err, collection) {
      collection.find().toArray(function(err, docs) {

      collection.insert({ _id: 11, insp_text: "hey i am some inspiring text.", created_by: "zalary" }), function(err, addedstory) {
         callback(err);
       console.log(addedstory);
    } 
     callback(err);


      });
    //console.log(collection);
     
    });

  },

       //story_pin = req.params.all();
       //console.log(Story);

         //Story.findOne(req.param('id')).exec(function (err, story) {
           ////console.log(('{"inspiration_id": ' + req.param('id') + '}'));
           //console.log(err);
           ////console.log(story);
           ////story.save(function (err)  { return console.log(err) });
                                       
       //res.json();
         //}); 


  //},
  /**
   * Overrides for the settings in `config/controllers.js`
   * (specific to StoryController)
   */
  _config: {}

};

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

  'new': function(req, res) {
    res.view();
  },

  create: function(req, res, err) {

    story_id = req.param('inspiration_id');
    story_text = req.param('text');
    story_creator = req.param('created_by');
    story_creator_id = req.param('created_by_id');
    story_created_time = new Date();

    Story.native(function(err, collection) {

      collection.insert({
        _id: parseInt(story_id),
        insp_text: story_text,
        created_by: story_creator,
        created_by_id: story_creator_id,
        created_at: story_created_time
      }, function(err, doc) {

        // console.log(doc);
        res.json(doc);


      });
    });


  },

  update: function(req, res, next) {

    sid = req.param('inspiration_id');
    story_id = parseInt(sid);
    story_pinned = req.param('pinned_from');
    story_pinner = req.param('pinned_by');
    pinned_time = new Date();

    event = {
      pinned_by: story_pinner,
      pinned_from: story_pinned
    }
    eventjson = JSON.stringify(event);
    //console.log(event);

    Story.native(function(err, collection) {

      collection.findAndModify({
        _id: story_id
      }, [
        ['_id', 'asc']
      ], {
        $addToSet: {
          events: {
            event: {
              pinned_from: story_pinned,
              pinned_by: story_pinner,
              pinned_time: pinned_time
            }
          }
        }
      }, function(err, doc) {
        console.log(err);
        // console.log(doc);
      });
    });

  },

  // render the story view
  show: function(req, res, next) {
    Story.find(req.param('id'), function foundStory(err, story) {
      // console.log(story);
      res.view({
        story: story
      });

    });


  },

  /**
   * Overrides for the settings in `config/controllers.js`
   * (specific to StoryController)
   */
  _config: {}

};
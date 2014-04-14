/**
 * Inspiration
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

module.exports = {

  afterCreate: function(newlyInsertedRecord, next) {
    if (!newlyInsertedRecord.original_post_id) {

      // console.log("The newlyInsertedRecord id is:");
      // console.log(newlyInsertedRecord.id);

      sails.models.inspiration.findOne(newlyInsertedRecord.id).done(
        function(err, model) {
          // console.log("lets see what happens here:");
          // console.log(model.id); // THAT Works as expected.

          Inspiration.update({
              id: model.id
            }, {
              original_post_id: model.id
            },
            function(err, inspiration) {
              if (err) {
                return console.log(err);
              } else {
                console.log("Inspiration updated:", inspiration);
              }
            }
          );
        });

      // This is what we tried before, it didn't work as expected (no db update occurs)
      // Inspiration.update({
      //   id: newlyInsertedRecord.id
      // }, {
      //   original_post_id: 50
      // }, function(err, inspiration) {
      //   if (err) {
      //     return console.log(err);
      //   } else {
      //     console.log("Inspiration updated:", inspiration);
      //   }
      // });

    }
    next();
  },

  attributes: {

    //user_id: 'integer',
    //user_name: 'string', // To reduce the number of references to the user model
    //original_creator_id: 'integer', //this should be static once it's created
    //text: 'string', //static for now
    //done: 'boolean'

    user_id: {
      type: 'integer',
      required: true
    },

    user_username: {
      type: 'string',
      required: true
    },

    original_creator_id: {
      type: 'integer',
      required: true
    },

    original_creator_name: {
      type: 'string',
      required: true
    },

    original_post_id: {
      type: 'integer',
    },

    repin_count: {
      type: 'integer',
      defaultsTo: '0'
    },

    text: {
      type: 'string',
      required: true
    },

    done: {
      type: 'boolean'
    },

    latitude: {
      type: 'integer',
      defaultsTo: 0
    },

    longitude: {
      type: 'integer',
      defaultsTo: 0
    }

  },

};
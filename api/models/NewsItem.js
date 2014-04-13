/**
 * NewsItem
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs    :: http://sailsjs.org/#!documentation/models
 */

module.exports = {

  adapter: 'psdb',
  schema: true,

  attributes: {

    url: {
      type: 'string',
      required: true
    },

    // image_url: 'string',

    description: {
      type: 'string',
      required: true
    },
  },

  parse: function(data) {
    //iterate through the data JSON object, and store it in the model
    for (var i = 0; i < data.items.length; i++) {
      var url = data.items[i].link;
      var description = data.items[i].snippet;

      NewsItem.create({
        "url": url,
        "description": description
      }, function(err, data) {});
    };
  }

};
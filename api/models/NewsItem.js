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

    image_url: {
      type: 'string',
      defaultsTo: '/images/kitten_small.png'
    },

    title: {
      type: 'string',
      required: true
    },

    description: {
      type: 'string',
      required: true
    },
  },

  parse: function(data) {
    //iterate through the data JSON object, and store it in the model
    for (var i = 0; i < data.items.length; i++) {
      var url = data.items[i].link;
      var title = data.items[i].title;
      var description = data.items[i].snippet;
      if ((data.items[i].pagemap) && (data.items[i].pagemap.cse_image)) {
        var thumb = data.items[i].pagemap.cse_image[0].src;
      }

      NewsItem.create({
        "url": url,
        "description": description,
        "title": title,
        "image_url": thumb
      }, function(err, data) {});
    };
  }

};

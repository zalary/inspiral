(function() {

window.InspirationCollection = Backbone.Collection.extend({
  url: '/inspiration',
  model: InspirationModel
});

// var inspiration = new inspirationModel({});

window.inspirationCollection = new InspirationCollection();
inspirationCollection.fetch();
inspirationCollection.on('add', function(inspirationCollection) {
  inspirationCollection.save();
  
});


})();
(function () {
  // Inspiration Model
  // ----------

  // Our basic **Inspiration** model has `creator_id`, `body`, and `completed` attributes.
  var InspirationModel = Backbone.Model.extend({
    // Default attributes for the inspiration
    // and ensure that each inspiration created has `body` and `completed` keys.
    urlRoot: '/inspiration',
    defaults: {
      body: '',
      completed: false
    }
  });
})();
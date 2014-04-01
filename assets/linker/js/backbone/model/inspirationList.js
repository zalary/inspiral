(function() {
window.InspirationModel = Backbone.Model.extend({
  urlRoot: '/inspiration',
  defaults: {
    done: false
  }
});

})();

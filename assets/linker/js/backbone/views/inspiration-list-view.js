(function() {
  var InspirationListView = Backbone.View.extend({
    initialize: function() {
      this.collection.on('add', this.addOne, this);
      this.collection.on('reset', this.addAll, this);
    },
    render: function() {
      this.addAll();
    },
    addAll: function() {
      this.$el.empty();
      this.collection.forEach(this.addOne, this);
      return this;
    },
    addOne: function(inspirationModel) {
      var inspirationView = new InspirationView({model: inspirationModel});
      this.$el.append(inspirationView.render().el);
    }
  });
    var inspirationListView = new InspirationListView({
    collection: inspirationCollection,
    el: '#inspiration-todo-list'
  });
})();

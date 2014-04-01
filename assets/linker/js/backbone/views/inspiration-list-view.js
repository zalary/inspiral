(function() {
  window.InspirationListView = Backbone.View.extend({
    initialize: function() {
      // this.collection.on('add', this.addOne, this);
      // this.collection.on('reset', this.addAll, this);
      this.listenTo(this.collection, 'add', this.addOne);
      this.render();
    },
    render: function() {
      console.log("render function for collection is called!");
      this.addAll();
    },
    addAll: function() {
      this.$el.empty();
      this.collection.forEach(this.addOne, this);
      return this;
    },
    addOne: function(inspirationModel) {
      window.inspirationView = new InspirationView({model: inspirationModel});
      this.$el.append(inspirationView.render().el);
    }
  });

  window.inspirationListView = new InspirationListView({
    collection: inspirationCollection,
    el: '#inspiration-todo-list ul'
  });
})();

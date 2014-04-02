(function() {

  // Displays the contents of the collection to the show page on load
  // and updates when a new one is added.
  window.InspirationListView = Backbone.View.extend({
    initialize: function() {
      // this.collection.on('add', this.addOne, this);
      // this.collection.on('reset', this.addAll, this);
      this.listenTo(this.collection, 'add', this.addOne);
      this.render();
    },
    render: function() {
      this.addAll();
    },
    addAll: function() {
      this.$("#done").empty();
      this.$("#notdone").empty();
      this.collection.forEach(this.addOne, this);
      return this;
    },
    addOne: function(inspirationModel) {

      window.inspirationView = new InspirationView({model: inspirationModel});
      if(inspirationModel.get("done") === true ) {
        this.$("#done").append(inspirationView.render().el);
      }else{
        this.$("#notdone").append(inspirationView.render().el);
      }
    }
  });


  window.inspirationListView = new InspirationListView({
    collection: inspirationCollection,
    el: '#inspiration-todo-list'
  });

})();

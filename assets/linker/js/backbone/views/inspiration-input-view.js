(function() {
  var InspirationInputView = Backbone.View.extend({
    events: {
      "click #submit": "addOne"
    },
    addOne: function(e) {
      console.log(this);
      var text = this.$el.children('input[type="text"]').val();
      if (text !== "") {
        var inspirationModel = new InspirationModel({text: text});
        console.log("works");
        this.collection.add(inspirationModel);
        //clear the input
        this.$el.children('input[type="text"]').val('');
      }
    }
  });

  window.inspirationInputView = new InspirationInputView({
    collection: inspirationCollection,
    el: '#add-inspiration'
  });

})();
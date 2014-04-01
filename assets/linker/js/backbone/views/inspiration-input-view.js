(function() {
  // When a new text is added to the Show page, this
  // creates a new model and adds it to the collection
  // on submit
  var InspirationInputView = Backbone.View.extend({
    events: {
      "click #submit": "addOne"
    },
    // addOne
    addOne: function(e) {
      // pulls the value of the input box type="text" that is a child
      // of #add-inspiration
      // and stores it into the variable text
      var text = this.$el.children('input[type="text"]').val();
      // as long as text isn't an empty string
      // then create a new model with that text
      // add it to the the collection
      var new_inspiration = document.querySelector('#new-inspiration');
      var original_creator_id = new_inspiration.dataset.userid;
      var done_status = $('input[type="checkbox"]').val();
      if (done_status) {
        done_status = 1;
      };

      if (text !== "") {
        var inspirationModel = new InspirationModel({
          text: text,
          original_creator_id: original_creator_id,
          user_id: original_creator_id,
          done: done_status
        });
        this.collection.add(inspirationModel);
        //clear the input
        this.$el.children('input[type="text"]').val('');
      }
    }
  });


  // actually instantiate the inspirationInputView
  window.inspirationInputView = new InspirationInputView({
    collection: inspirationCollection,
    el: '#add-inspiration'
  });

})();

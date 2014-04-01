(function() {
  var InspirationInputView = Backbone.View.extend({
    events: {
      "click #submit": "addOne"
    },
    addOne: function(e) {
      var text = this.$el.children('input[type="text"]').val();
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

  window.inspirationInputView = new InspirationInputView({
    collection: inspirationCollection,
    el: '#add-inspiration'
  });

})();

(function() {

var itemTemplateHtml = $('#templates .inspiration-item').html(),
    itemTemplate = _.template(itemTemplateHtml);

    // window.InspirationView = Backbone.View.extend({
    //   tagName: 'li',
    //   className: 'list-group-item masonry-container',
    //   template: itemTemplate,
    //   render: function() {
    //     this.$el.html(this.template(this.model.toJSON()));
    //     return this;
    //   }
    // });

    window.InspirationView = Backbone.View.extend({
      tagName: 'div',
      className: 'list-group-item masonry-container',
      template: itemTemplate,
      render: function() {
        this.$el.html(this.template(this.model.toJSON()));
        return this;
      }
    });

})();

(function() {

var itemTemplateHtml = $('#templates .inspiration-item').html(),
    itemTemplate = _.template(itemTemplateHtml);

    window.InspirationView = Backbone.View.extend({
      tagName: 'article',
      className: 'inspiration',
      template: itemTemplate,
      render: function() {
        this.$el.html(this.template(this.model.toJSON()));
        return this;
      }
    });
})();

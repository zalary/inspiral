(function() {

var itemTemplateHtml = $('#templates .inspiration-item').html(),
    itemTemplate = _.template(itemTemplateHtml);

    window.InspirationView = Backbone.View.extend({
      tagName: 'li',
      className: 'list-group-item',
      template: itemTemplate,
      render: function() {
        this.$el.html(this.template(this.model.toJSON()));
        return this;
      }
    });

    var doneItemTemplateHtml = $('#templates .done-inspiration-item').html(),
    doneItemTemplate = _.template(doneItemTemplateHtml);

    window.InspirationDoneView = Backbone.View.extend({
      tagName: 'li',
      className: 'list-group-item',
      template: doneItemTemplate,
      render: function() {
        this.$el.html(this.template(this.model.toJSON()));
        return this;
      }
    });
})();

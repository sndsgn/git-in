var AppView = Backbone.View.extend({

  el: '#app',

  intitialize: function() {
                 this.title = new TitleView();

                 this.search = new SearchView();

                 this.results = new ResultsView({
                   collection: this.collection
                 });
               },

  render: function() {
            this.$el.append([
              this.title.$el,
              this.search.$el,
              this.results.$el
              ]);
            console.log('App View Render Call');
            return this;
          }
});

var TitleView = Backbone.View.extend({
  el: '<h1 class="center tc ttu"></h1>',

  initialize: function() {
    this.render();
  },

  render: function() {
            this.$el.text('Git-In');
            $('body').append(this.el);
          }
});

var SearchView = Backbone.View.extend({
  
});
var Result = Backbone.Model.extend({

});

var ResultView = Backbone.View.extend({

});

var Results = Backbone.Collection.extend({
  model: Result
});

var ResultsView = Backbone.View.extend({
});

var app = new AppView({ 
  collection: new Results()
});




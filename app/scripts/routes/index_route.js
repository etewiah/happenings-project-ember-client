// App.IndexRoute = Ember.Route.extend({
//   redirect: function() {
//     this.transitionTo('posts');
//   }
// });

HappeningsProjectEmberClient.IndexRoute = Ember.Route.extend({
  redirect: function() {
    this.transitionTo('happening.when');
  }
});

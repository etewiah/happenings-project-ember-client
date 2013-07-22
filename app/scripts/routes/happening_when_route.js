HappeningsProjectEmberClient.HappeningWhenRoute = Ember.Route.extend({
  // Implement your controller here.
  model: function (params) {
  	return HappeningsProjectEmberClient.Happening.getHappenings('today');
  }

  //  serialize: function(model) {
  //   // this will make the URL `/posts/12`
  //   return { city_id: model.city, range_id: model.range_id };
  // }



// App.people = App.store.findAll(App.Person);


});


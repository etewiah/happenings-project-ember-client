HappeningsProjectEmberClient.HappeningRoute = Ember.Route.extend({
  // Implement your controller here.
  model: function () {
    // return ['red', 'yellow', 'blue'];
  	return HappeningsProjectEmberClient.Happening.getHappenings();
  }



// App.people = App.store.findAll(App.Person);


});


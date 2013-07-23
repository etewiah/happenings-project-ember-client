HappeningsProjectEmberClient.HappeningWhenRoute = Ember.Route.extend({
  // Implement your controller here.
  model: function (params) {
  	return params;
  },

  //  serialize: function(model) {
  //   // this will make the URL `/posts/12`
  //   return { city_id: model.city, range_id: model.range_id };
  // }

  serialize: function(model) {
    return model;
    // return {city_id: HappeningsProjectEmberClient.Happening.currentCity, range_id: HappeningsProjectEmberClient.Happening.currentRange};  
  },


  setupController: function(controller, model) {
    HappeningsProjectEmberClient.Happening.currentCity = model.city_id;
    HappeningsProjectEmberClient.Happening.currentRange = model.range_id;
  	var happenings = HappeningsProjectEmberClient.Happening.getHappenings('today');
    happenings.then(function(model) {
      controller.set('content', model);
    });
  	// controller.set('content', happenings);
   //  debugger;
  }


});


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
    happeningController = this.controllerFor('application');
    return happeningController.get('navStructure');
    // return model;
    // return {city_id: HappeningsProjectEmberClient.Happening.currentCity, range_id: HappeningsProjectEmberClient.Happening.currentRange};  
  },


  setupController: function(controller, model) {
    happeningController = this.controllerFor('application');
    //happeningController.set('currentCategory', filter.category);

// If page is loaded directly from a url with params, I set the correct controller values
    if(model.category !== undefined){
      happeningController.set('navStructure.category', model.category);
    }
    if(model.city !== undefined){
      happeningController.set('navStructure.city', model.city);
    }
    if(model.range !== undefined){
      // model.range = HappeningsProjectEmberClient.NavItem.defaultRange;
      happeningController.set('navStructure.range', model.range);
    }
    // happeningController.set('currentCategory', model.category);
    // happeningController.set('currentRange', model.range_id);
    HappeningsProjectEmberClient.Happening.currentCity = happeningController.get('navStructure.city');
    HappeningsProjectEmberClient.Happening.currentRange =  happeningController.get('navStructure.range');
    var happenings = HappeningsProjectEmberClient.Happening.getHappenings();
    happenings.then(function(model) {
      controller.set('content', model);
    });
  	// controller.set('content', happenings);
   //  debugger;
  }


});


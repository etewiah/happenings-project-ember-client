// App.IndexRoute = Ember.Route.extend({
//   redirect: function() {
//     this.transitionTo('posts');
//   }
// });

HappeningsProjectEmberClient.IndexRoute = Ember.Route.extend({
  redirect: function() {
    happeningController = this.controllerFor('happening');
  	// var paramsModel = {
  	// 	 city_id: happeningController.get('currentCity'),
   //  	 range_id: happeningController.get('currentRange'),
 		// 	 category: happeningController.get('currentCategory')

   //  }
    this.transitionTo('happening.when', {});
  }
});

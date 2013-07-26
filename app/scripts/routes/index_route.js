// App.IndexRoute = Ember.Route.extend({
//   redirect: function() {
//     this.transitionTo('posts');
//   }
// });

HappeningsProjectEmberClient.IndexRoute = Ember.Route.extend({
  redirect: function() {
  	var paramsModel = {
  		 city_id: HappeningsProjectEmberClient.NavItem.defaultCity,
    	 range_id: HappeningsProjectEmberClient.NavItem.defaultRange
    }
    this.transitionTo('happening.when', paramsModel);
  }
});

HappeningsProjectEmberClient.ApplicationRoute = Ember.Route.extend({
  // admittedly, this should be in IndexRoute and not in the 
  // top level ApplicationRoute; we're in transition... :-)
  model: function () {
    return [
    	{id: 'today', city: 'Madrid', range: 'today'}, 
    	{id:'tomorrow', city: 'Madrid', range: 'tomorrow'}, 
    	{id:'this week', city: 'Madrid', range: 'this_week'},
    	{id: 'next week', city: 'Madrid', range: 'next_week'}
    ];
  },

	events:{
	    filterHappenings : function(filter){
	    	var happenings = HappeningsProjectEmberClient.Happening.getHappenings(filter.range);
	    	this.transitionTo("happening.when", happenings);
	    }
	}
});

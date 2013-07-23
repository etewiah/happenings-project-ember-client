HappeningsProjectEmberClient.ApplicationRoute = Ember.Route.extend({
  // admittedly, this should be in IndexRoute and not in the 
  // top level ApplicationRoute; we're in transition... :-)
  model: function () {
    return [
    	{id: 'today', city: 'Madrid', range: 'today', class: 'active'}, 
    	{id:'tomorrow', city: 'Madrid', range: 'tomorrow'}, 
    	{id:'this week', city: 'Madrid', range: 'this_week'},
    	{id: 'next week', city: 'Madrid', range: 'next_week'}
    ];
  },

	events:{
	    filterHappenings : function(range_model, filter){
	    	var happenings = HappeningsProjectEmberClient.Happening.getHappenings(filter.range);
        filter.class = "active";
	    	this.transitionTo("happening.when", happenings);
	    }
	}
});

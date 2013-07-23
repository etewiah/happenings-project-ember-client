HappeningsProjectEmberClient.HappeningRoute = Ember.Route.extend({

  // model: function () {
  //   var items = [
  //     {id: 'today', city: 'Madrid', range: 'today', cssClass: 'active'}, 
  //     {id:'tomorrow', city: 'Madrid', range: 'tomorrow'}, 
  //     {id:'this week', city: 'Madrid', range: 'this_week'},
  //     {id: 'next week', city: 'Madrid', range: 'next_week'}
  //   ];
  //   return HappeningsProjectEmberClient.NavItem.getNavItems(items);
  // },

	events:{
	    filterHappenings : function(range_model, filter){
        range_model.setEach('cssClass', '');

        var modelForRouter = {};
        if(filter.city !== ""){
          modelForRouter.city_id = filter.city;
          // HappeningsProjectEmberClient.Happening.currentCity = filter.city;
        }
        else{
          modelForRouter.city_id = HappeningsProjectEmberClient.Happening.currentCity;
        }
        if(filter.range !== ""){
          modelForRouter.range_id = filter.range;
          // HappeningsProjectEmberClient.Happening.currentRange = filter.range;
        }
        else{
          modelForRouter.range_id = HappeningsProjectEmberClient.Happening.currentRange;
        }

	    	// var happenings = HappeningsProjectEmberClient.Happening.getHappenings(filter.range, filter.city);
        filter.set('cssClass','active');
        // var happeningController = this.controllerFor('happening');
        // // below is used by nav_item_view to calculate which tab is active:
        // if (happeningController) happeningController.set('filter', filter.range);
	    	this.transitionTo("happening.when", modelForRouter);
	    }
	}


});


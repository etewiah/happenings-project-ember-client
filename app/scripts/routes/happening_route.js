HappeningsProjectEmberClient.HappeningRoute = Ember.Route.extend({

	events:{

    filterHappeningsByCategory : function(nav_items_model, filter){
      // nav_items_model.setEach('cssClass', '');
      // filter.set('cssClass', 'active')
      happeningController = this.controllerFor('happening');
      happeningController.set('currentCategory', filter.category);
    },

    filterHappeningsByRange : function(nav_items_model, filter){
      var happeningController = this.controllerFor('happening');
      happeningController.set('navStructure.range', filter.value);
      this.transitionTo("happening.when", {}); 
    },
    filterHappeningsByCity : function(nav_items_model, filter){
      // var modelForRouter = {};
      var happeningController = this.controllerFor('happening');
      happeningController.set('navStructure.city', filter.value);
      // var navStructure = happeningController.get('navStructure');

      // modelForRouter.range_id = happeningController.get('currentRange');
      // modelForRouter.city_id = filter.value;
      this.transitionTo("happening.when", {}); 
    }

	}


});


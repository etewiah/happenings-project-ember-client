HappeningsProjectEmberClient.Router.map(function () {

		// this.route('happening', { path: '/' });

    this.resource('happening', { path: '/happening'}, function() {
	    // this.route('show', { path: '/details/:id'});
	    this.route('when', {path: '/'});
	    this.route('when', {path: '/:city_id'});
	    this.route('when', {path: '/:city_id/:range_id'});
	  });

});



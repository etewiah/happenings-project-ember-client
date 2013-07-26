HappeningsProjectEmberClient.Router.map(function () {

		// this.route('happening', { path: '/' });

    this.resource('happening', { path: '/happening'}, function() {
	    // this.route('show', { path: '/details/:id'});
	    this.route('when', {path: '/'});
	    this.route('when', {path: '/:category'});
	    this.route('when', {path: '/:category/:city'});
	    this.route('when', {path: '/:category/:city/:range'});
	  });

});



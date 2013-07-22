HappeningsProjectEmberClient.Router.map(function () {
    this.resource('happening', { path: '/happening/:city'}, function() {
    this.route('show', { path: '/details/:id'});
    this.route('inCity', {path: '/'})
  });

});



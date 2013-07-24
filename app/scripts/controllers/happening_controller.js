HappeningsProjectEmberClient.HappeningController = Ember.ArrayController.extend({
  rangeNavItems: function() {
    var items = [
      {title: 'today', city: '', range: 'today'}, 
      {title:'tomorrow', city: '', range: 'tomorrow'}, 
      {title:'this week', city: '', range: 'this_week'},
      {title: 'next week', city: '', range: 'next_week'}
    ];
    return HappeningsProjectEmberClient.NavItem.getNavItems(items);

  }.property(),

  cityNavItems: function() {
    var items = [
      {title: 'Madrid', city: 'Madrid', range: ''}, 
      {title:'Berlin', city: 'Berlin', range: ''}, 

    ];
    return HappeningsProjectEmberClient.NavItem.getNavItems(items);

  }.property()

});


HappeningsProjectEmberClient.HappeningController = Ember.ArrayController.extend({
  currentCategory: "music",

  rangeNavItems: function() {
    return HappeningsProjectEmberClient.NavItem.getRangeNavItems(this.get('currentCategory'));
  }.property('currentCategory'),

  cityNavItems: function() {
    var items = [
      {title: 'Madrid', city: 'Madrid', range: ''}, 
      {title:'Berlin', city: 'Berlin', range: ''}, 

    ];
    return HappeningsProjectEmberClient.NavItem.getNavItems(items);

  }.property(),

  categoryNavItems: function() {
    return HappeningsProjectEmberClient.NavItem.getCategoryNavItems();
  }.property()

});


HappeningsProjectEmberClient.HappeningController = Ember.ArrayController.extend({
  navStructure: {
    city: "Madrid",
    range: "today"
  },
  currentCategory: "music",
  currentRange: "today",
  currentCity: "Madrid",

  rangeNavItems: function() {
    return HappeningsProjectEmberClient.NavItem.getRangeNavItems(this.get('navStructure.range'), this.get('currentCategory'));
  }.property('currentCategory', 'navStructure.range'),

  cityNavItems: function() {
    return HappeningsProjectEmberClient.NavItem.getCityNavItems(this.get('navStructure.city'));
  }.property('navStructure.city'),

  categoryNavItems: function() {
    return HappeningsProjectEmberClient.NavItem.getCategoryNavItems(this.get('currentCategory'));
  }.property('currentCategory')

});


HappeningsProjectEmberClient.HappeningController = Ember.ArrayController.extend({
  currentCategory: "music",
  currentCity: "",

  rangeNavItems: function() {
    return HappeningsProjectEmberClient.NavItem.getRangeNavItems(this.get('currentCategory'));
  }.property('currentCategory'),

  cityNavItems: function() {
    return HappeningsProjectEmberClient.NavItem.getCityNavItems(this.get('currentCity'));
  }.property('currentCity'),

  categoryNavItems: function() {
    return HappeningsProjectEmberClient.NavItem.getCategoryNavItems();
  }.property()

});


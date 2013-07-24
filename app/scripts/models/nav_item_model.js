HappeningsProjectEmberClient.NavItem = DS.Model.extend({
  cssClass: function() {
    if(this.range === HappeningsProjectEmberClient.Happening.currentRange ) return "active";
    if(this.city === HappeningsProjectEmberClient.Happening.currentCity) return "active";
    // if(this.get('controller.filterMode') === undefined && this.get('content.name') === "happenings") return "active";
    // if (this.get("content.name").toLowerCase().replace(' ','-') === this.get("controller.filterMode")) return "active";
     return "";
  }.property(),
});



HappeningsProjectEmberClient.NavItem.reopenClass({

  getNavItems: function(items) {

    var navItems = []

    $(items).each(function() {  
      var navItem = HappeningsProjectEmberClient.NavItem.createRecord(
        this
      );
      navItems.push(navItem);
    });
    return navItems;

  }

});
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

  defaultCity: "Madrid",
  defaultRange: "today",

  getNavItems: function(items) {

    var navItems = []

    $(items).each(function() {  
      var navItem = HappeningsProjectEmberClient.NavItem.createRecord(
        this
      );
      navItems.push(navItem);
    });
    return navItems;

  },

  getCategoryNavItems: function() {
    var items = [
      {title: 'Music', category: 'music', range: ''}, 
      {title:'Cinema', category: 'cinema', range: ''}, 
    ];
    return HappeningsProjectEmberClient.NavItem.getNavItems(items);
  },

  getRangeNavItems: function(currentCategory){
    var items = [
      {title: 'today', city: '', range: 'today'}, 
      {title:'tomorrow', city: '', range: 'tomorrow'}
    ];
    if(currentCategory !== "cinema"){
      items.push({title:'this week', city: '', range: 'this_week'});
      items.push({title:'next week', city: '', range: 'next_week'});
    }
    return HappeningsProjectEmberClient.NavItem.getNavItems(items);
  }

});
HappeningsProjectEmberClient.NavItem = DS.Model.extend({
  activeItemTitle: "",
  cssClass: function() {
    if(this.title.toLowerCase() === this.get('activeItemTitle').toLowerCase() ) return "active";
    // if(this.city === HappeningsProjectEmberClient.NavItem.currentCity) return "active";
    // if(this.get('controller.filterMode') === undefined && this.get('content.name') === "happenings") return "active";
    // if (this.get("content.name").toLowerCase().replace(' ','-') === this.get("controller.filterMode")) return "active";
     return "";
  }.property('activeItemTitle')
});



HappeningsProjectEmberClient.NavItem.reopenClass({

  defaultCity: "Madrid",
  defaultRange: "today",
  // I can take out references to static currentxxx later:
  // currentCity: "",
  // currentRange: "",

  getNavItems: function(items) {

    var navItems = [];
    // why is above var available in the loop but this below isn't: 
    // var that = this;

    $(items).each(function() {  
      var navItem = HappeningsProjectEmberClient.NavItem.createRecord(
        this
      );
      navItems.push(navItem);
    });
    return navItems;

  },

  getCityNavItems: function(currentCity){
    // HappeningsProjectEmberClient.NavItem.currentCity = currentCity;
    var items = [
      {title: 'Madrid', city: 'Madrid', range: '', activeItemTitle: currentCity}, 
      {title:'Berlin', city: 'Berlin', range: '', activeItemTitle: currentCity} 

    ];
    return HappeningsProjectEmberClient.NavItem.getNavItems(items);
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
HappeningsProjectEmberClient.NavItem = DS.Model.extend({
  activeItemTitle: "",
  cssClass: function() {
    if(this.value.toLowerCase() === this.get('activeItemTitle').toLowerCase() ) return "active";
    // if(this.city === HappeningsProjectEmberClient.NavItem.currentCity) return "active";
    // if(this.get('controller.filterMode') === undefined && this.get('content.name') === "happenings") return "active";
    // if (this.get("content.name").toLowerCase().replace(' ','-') === this.get("controller.filterMode")) return "active";
     return "";
  }.property('activeItemTitle')
});



HappeningsProjectEmberClient.NavItem.reopenClass({

  // defaultCity: "Madrid",
  // defaultRange: "today",
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
      {title: 'Madrid', value: 'Madrid',  activeItemTitle: currentCity}, 
      {title:'Berlin', value: 'Berlin',  activeItemTitle: currentCity} 

    ];
    return HappeningsProjectEmberClient.NavItem.getNavItems(items);
  },

  getCategoryNavItems: function(currentCategory) {
    var items = [
      {title: 'Music', value: 'music', activeItemTitle: currentCategory}, 
      {title:'Cinema', value: 'cinema', activeItemTitle: currentCategory}, 
    ];
    return HappeningsProjectEmberClient.NavItem.getNavItems(items);
  },

  getRangeNavItems: function(currentRange, currentCategory){
    var items = [
      {title: 'today', value: 'today', activeItemTitle: currentRange}, 
      {title:'tomorrow', value: 'tomorrow', activeItemTitle: currentRange}
    ];
    if(currentCategory !== "cinema"){
      items.push({title:'this week', value: 'this_week', activeItemTitle: currentRange});
      items.push({title:'next week', value: 'next_week', activeItemTitle: currentRange});
    }
    return HappeningsProjectEmberClient.NavItem.getNavItems(items);
  }

});
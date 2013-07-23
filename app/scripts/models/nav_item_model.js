HappeningsProjectEmberClient.NavItem = DS.Model.extend({
  // classProp: function() {
  //   debugger;
  //   // if(this.get('controller.filterMode') === undefined && this.get('content.name') === "happenings") return "active";
  //   // if (this.get("content.name").toLowerCase().replace(' ','-') === this.get("controller.filterMode")) return "active";
  //    return "";
  // }.property("content.range"),
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



      // var url = "http://happenings-project.dev/api/v1/flat_happenings"; 
      // var data = {};
      // var today = new Date();
      // if(range === "today"){
      //   data.day_range =  today.toISOString();
      // }
      // else if(range === "tomorrow"){
      //   var tomorrow = new Date();
      //   tomorrow.setDate(today.getDate()+1);
      //   data.day_range = tomorrow.toISOString();
      // }
      // else if(range === "this_week"){
      //   data.week_range = today.toISOString();
      // }
      // else if(range === "next_week"){
      //   var next_week_start = new Date();
      //   next_week_start.setDate(today.getDate()+7);
      //   data.week_range = next_week_start.toISOString();
      // }

      // return $.getJSON(url, data).then(function (response) {
      //     var links = [];
      //     $(response.flat_happenings).each(function() {  
             
      //           var happeningResource = HappeningsProjectEmberClient.NavItem.createRecord({
      //             title: this.name,
      //             // description: this.description,
      //             start_date: new Date(this.start_time).toString(),
      //             image_url: this.images[0].url,
      //             city: this.city
      //           });

      //       links.push(happeningResource);
      //     });
      //     return links;
      // });


  }

});
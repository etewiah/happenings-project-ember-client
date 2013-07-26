HappeningsProjectEmberClient.Happening = DS.Model.extend({
});

HappeningsProjectEmberClient.Happening.reopenClass({

  currentCity: "",
  currentRange: "",

  getHappenings: function() {

      var url = "http://happenings-project.dev/api/v1/flat_happenings"
      // "http://happenings-project.herokuapp.com/api/v1/flat_happenings"
      // "http://happenings-project.dev/api/v1/flat_happenings"; 
      var data = {city: HappeningsProjectEmberClient.Happening.currentCity};
      var today = new Date();
      // if(HappeningsProjectEmberClient.Happening.currentRange.toLowerCase() === "today"){
      //   data.day_range =  today.toISOString();
      // }
      if(HappeningsProjectEmberClient.Happening.currentRange.toLowerCase() === "tomorrow"){
        var tomorrow = new Date();
        tomorrow.setDate(today.getDate()+1);
        data.day_range = tomorrow.toISOString();
      }
      else if(HappeningsProjectEmberClient.Happening.currentRange.toLowerCase() === "this_week"){
        data.week_range = today.toISOString();
      }
      else if(HappeningsProjectEmberClient.Happening.currentRange.toLowerCase() === "next_week"){
        var next_week_start = new Date();
        next_week_start.setDate(today.getDate()+7);
        data.week_range = next_week_start.toISOString();
      }
      else{
        // default to today
        data.day_range = today.toISOString();
        HappeningsProjectEmberClient.Happening.currentRange = "today";
      }

      return $.getJSON(url, data).then(function (response) {
          var links = [];
          $(response.flat_happenings).each(function() {  
             
                var happeningResource = HappeningsProjectEmberClient.Happening.createRecord({
                  title: this.name,
                  // description: this.description,
                  start_date: new Date(this.start_time).toString(),
                  image_url: this.images[0].url,
                  city: this.city
                });

            links.push(happeningResource);
          });
          return links;
      });


  }

});
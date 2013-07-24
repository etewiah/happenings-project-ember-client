HappeningsProjectEmberClient.Happening = DS.Model.extend({
});
// HappeningsProjectEmberClient.Happening = Ember.Object.extend({
//   name: DS.attr('string'),

//   descriptionHtml: DS.attr('text'),

//   startTime: DS.attr('datetime'),

//   endTime: DS.attr('datetime'),

//   timezone: DS.attr('string'),

//   longitude: DS.attr('float'),

//   latitude: DS.attr('float'),

//   address: DS.attr('text'),

//   city: DS.attr('string'),

//   region: DS.attr('string'),

//   postalCode: DS.attr('string'),

//   country: DS.attr('string')
// });




// Klavado.Happening = DS.Model.extend({
//   title: DS.attr('string'),
//   description: DS.attr('raw_array'),
//   pics: DS.attr('raw_array'),
//   start_slot: DS.attr('string'),
//   start_date: DS.attr('date'),
//   end_slot: DS.attr('string'),
//   address: DS.attr('string'),
//   coordinates: DS.attr('string'),
//   meta: DS.attr('string'),
//   traits: DS.attr('raw_array')
// });




HappeningsProjectEmberClient.Happening.reopenClass({

  currentCity: "Madrid",
  currentRange: "today",

  getHappenings: function(range, city) {
    // if(city === undefined || city === ''){
    //   city = "Madrid";
    // }

    // if(range === undefined || range === ''){
    //   range = "today";
    // }


      var url = "http://happenings-project.herokuapp.com/api/v1/flat_happenings"
      // "http://happenings-project.dev/api/v1/flat_happenings"; 
      var data = {city: HappeningsProjectEmberClient.Happening.currentCity};
      var today = new Date();
      if(HappeningsProjectEmberClient.Happening.currentRange === "today"){
        data.day_range =  today.toISOString();
      }
      else if(HappeningsProjectEmberClient.Happening.currentRange === "tomorrow"){
        var tomorrow = new Date();
        tomorrow.setDate(today.getDate()+1);
        data.day_range = tomorrow.toISOString();
      }
      else if(HappeningsProjectEmberClient.Happening.currentRange === "this_week"){
        data.week_range = today.toISOString();
      }
      else if(HappeningsProjectEmberClient.Happening.currentRange === "next_week"){
        var next_week_start = new Date();
        next_week_start.setDate(today.getDate()+7);
        data.week_range = next_week_start.toISOString();
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
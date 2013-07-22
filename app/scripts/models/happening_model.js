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
  getHappenings: function(range) {

      var url = "http://happenings_project.dev/api/v1/flat_happenings"; 
      var data = {};
      var today = new Date();
      var tomorrow = new Date();
      tomorrow.setDate(today.getDate()+1);
      if(range === "today"){
        data.day_range =  today.toISOString();
      }
      else{
        data.day_range = tomorrow.toISOString();
      }

      return $.getJSON(url, data).then(function (response) {
          var links = [];
          $(response.flat_happenings).each(function() {  
             
                // var happeningResource = {};

                var happeningResource = HappeningsProjectEmberClient.Happening.createRecord({
                  title: this.name,
                  // description: this.description,
                  start_date: this.startDate,
                  // external_urls: [ {url: this.url, trait: "source" }],
                  image_url: this.images[0].url
                });

                // if (this.image[1]['#text']){
                //   var pictures = [{
                //     alt: "medium",
                //     url: this.image[1]['#text']
                //   }];
                //   happeningResource.set('pics', pictures);
                //   happeningResource.set('description', pictures);
                //   // happeningResource.set('traits', pictures)
                // }


            links.push(happeningResource);
          });
                return links;
          // debugger;
      });


  }

});
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
  getHappenings: function() {

      var url = "/happenings.json";
      return $.getJSON(url).then(function (response) {
          var links = [];
          $(response.events.event).each(function() {  
             
                // var happeningResource = {};

                var happeningResource = HappeningsProjectEmberClient.Happening.createRecord({
                  title: this.title,
                  // description: this.description,
                  origin: "last_fm",
                  start_date: this.startDate,
                  external_urls: [ {url: this.url, trait: "source" }]
                });

                if (this.image[1]['#text']){
                  var pictures = [{
                    alt: "medium",
                    url: this.image[1]['#text']
                  }];
                  happeningResource.set('pics', pictures);
                  happeningResource.set('description', pictures);
                  // happeningResource.set('traits', pictures)
                }


            links.push(happeningResource);
          });
                return links;
          // debugger;
      });


  }

});
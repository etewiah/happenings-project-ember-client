HappeningsProjectEmberClient.Happening = Ember.Object.extend({
  name: DS.attr('string'),

  descriptionHtml: DS.attr('text'),

  startTime: DS.attr('datetime'),

  endTime: DS.attr('datetime'),

  timezone: DS.attr('string'),

  longitude: DS.attr('float'),

  latitude: DS.attr('float'),

  address: DS.attr('text'),

  city: DS.attr('string'),

  region: DS.attr('string'),

  postalCode: DS.attr('string'),

  country: DS.attr('string')
});

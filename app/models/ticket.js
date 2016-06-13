import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  location: DS.attr(),
  issue: DS.attr(),
  moment: DS.attr(),
  timeStamp: DS.attr()
});

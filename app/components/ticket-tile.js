import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
  timeElapsed: Ember.computed('ticket', function(){
    var difference = (moment().unix() - this.get('ticket.moment')) / 60;
    return difference.toPrecision('2');

  })
});

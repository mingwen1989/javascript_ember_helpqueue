import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
  timeElapsed: Ember.computed('ticket', function(){
    var difference = (moment().unix() - this.get('ticket.moment')) / 60;
    if (difference.toPrecision(2) > 0 && difference.toPrecision(2) < 10) {
      return difference.toPrecision(1);
    } else if (difference.toPrecision(2) > 10 && difference.toPrecision(2) < 100) {
      return difference.toPrecision(2);
    } else {
    return difference.toPrecision(3);
  }
  })
});

import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({

  actions: {
    submitTicket(){
      var params = {
        name: this.get('name'),
        location: this.get('location'),
        issue: this.get('issue'),
        moment: moment().unix()
      };
      this.sendAction('submitTicket', params);
      this.set('name', '');
      this.set('location', '');
      this.set('issue', '');
    }
  }
});

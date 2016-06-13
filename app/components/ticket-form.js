import Ember from 'ember';

export default Ember.Component.extend({
  
  actions: {
    submitTicket(){
      var params = {
        name: this.get('name'),
        location: this.get('location'),
        issue: this.get('issue')
      };
      this.sendAction('submitTicket', params);
      this.set('name', '');
      this.set('location', '');
      this.set('issue', '');
    }
  }
});

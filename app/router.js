import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('new-ticket');
  this.route('teacher-page', {path: 'teacher-page/:ticket_id'});
});

export default Router;

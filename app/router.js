import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('characters', function() {
    this.route('new', {});
    this.route('edit', { path: ':character_id'});
  });

  this.route('rule-sets', {}, function() {
    this.route('new', {});
    this.route('edit', { path: ':rule_set_id'});
  });

  this.route('skills', function() {
    this.route('new', {});
    this.route('edit', { path: ':skill_id'});
  });
});

export default Router;

import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('skill-definition', params.skill_id);
  }
});

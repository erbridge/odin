import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('rule-set', params.rule_set_id);
  },

  actions: {
    editSkill(skill) {
      this.transitionTo('skills.edit', skill);
    }
  }
});

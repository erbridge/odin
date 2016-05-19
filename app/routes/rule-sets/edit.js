import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('rule-set', params.rule_set_id);
  },

  actions: {
    createSkill() {
      const skill = this.store.createRecord('skill-definition');

      skill.set('ruleSet', this.currentModel);

      this.currentModel.get('skills').addObject(skill);
      this.currentModel.save();

      this.transitionTo('skills.edit', skill);
    }
  }
});

import Ember from 'ember';

export default Ember.Component.extend({
  skillDefinitionSorting: ['name'],
  sortedSkillDefinitions: Ember.computed.sort(
    'skillDefinitions', 'skillDefinitionSorting'
  ),

  actions: {
    selectSkill(skill) {
      this.sendAction('selectSkill', skill);
    }
  }
});

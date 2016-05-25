import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    selectSkill(skill) {
      this.sendAction('selectSkill', skill);
    }
  }
});

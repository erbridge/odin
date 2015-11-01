import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    createSkill() {
      this.sendAction('createSkill');
    }
  }
});

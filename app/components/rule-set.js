import Ember from 'ember';
import autosave from 'ember-autosave';

export default Ember.Component.extend({
  store: Ember.inject.service(),

  autosaveModel: autosave('model'),

  actions: {
    createSkill() {
      const skill = this.get('store').createRecord('skill-definition');

      this.model.get('skills').addObject(skill);
      this.model.save();

      this.sendAction('editSkill', skill);
    }
  }
});

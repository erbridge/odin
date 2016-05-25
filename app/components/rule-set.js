import Ember from 'ember';
import autosave from 'ember-autosave';

export default Ember.Component.extend({
  store: Ember.inject.service(),

  autosaveModel: autosave('model'),

  selectedSkill: null,

  skillDefinitions: Ember.computed('store', function() {
    // TODO: Only show unused skills.
    return this.get('store').findAll('skill-definition');
  }),

  actions: {
    createSkill() {
      const skill = this.get('store').createRecord('skill-definition');

      this.model.get('skills').addObject(skill);
      this.model.save();

      this.sendAction('editSkill', skill);
    },

    addSkill() {
      const skill = this.get('selectedSkill');

      if (skill) {
        this.model.get('skills').addObject(skill);
        this.model.save();
      }
    },

    removeSkill(skill) {
      this.model.get('skills').removeObject(skill);
      this.model.save();
    }
  }
});

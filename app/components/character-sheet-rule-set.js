import Ember from 'ember';
import autosave from 'ember-autosave';

export default Ember.Component.extend({
  store: Ember.inject.service(),

  autosaveModel: autosave('model'),

  ruleSets: Ember.computed('store', function() {
    return this.get('store').findAll('rule-set');
  }),
});

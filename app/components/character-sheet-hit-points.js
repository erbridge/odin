import Ember from 'ember';
import autosave from 'ember-autosave';

export default Ember.Component.extend({
  autosaveModel: autosave('model')
});

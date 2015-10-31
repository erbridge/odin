import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord('character');
  },

  redirect(model) {
    this.transitionTo('characters.edit', model);
  }
});

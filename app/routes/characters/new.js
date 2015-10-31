import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord('character').save();
  },

  redirect(model) {
    this.transitionTo('characters.edit', model);
  }
});

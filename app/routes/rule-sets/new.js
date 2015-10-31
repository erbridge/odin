import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord('rule-set').save();
  },

  redirect(model) {
    this.transitionTo('rule-sets.edit', model);
  }
});

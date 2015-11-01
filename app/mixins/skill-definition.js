import Ember from 'ember';
import DS from 'ember-data';

export default Ember.Mixin.create({
  ruleSet: DS.belongsTo('rule-set'),

  name: DS.attr('string'),

  characteristicA: DS.attr('string'),
  characteristicB: DS.attr('string'),

  baseBonus: DS.attr('number', { defaultValue: 0 }),

  description: DS.attr('string')
});

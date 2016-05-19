import Ember from 'ember';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';

export default Ember.Mixin.create({
  ruleSet: belongsTo('rule-set'),

  name: attr('string'),

  characteristicA: attr('string'),
  characteristicB: attr('string'),

  baseBonus: attr('number', { defaultValue: 0 }),

  description: attr('string')
});

import Ember from 'ember';
import DS from 'ember-data';

const TYPES = [
  'standard',
  'advanced',
  'combat',
  'passion',
  'language'
];

export default DS.Model.extend({
  name: DS.attr('string'),

  type: DS.attr('number'),

  typeName: Ember.computed('type', {
    get() {
      const type = this.get('type');

      return TYPES[type];
    },

    set(key, value) {
      const type = TYPES.indexOf(value);

      this.set('type', type);

      return value;
    }
  }),

  characteristicA: DS.attr('string'),
  characteristicB: DS.attr('string'),

  baseBonus: DS.attr('number', { defaultValue: 0 }),

  description: DS.attr('string')
});

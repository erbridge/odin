import Ember from 'ember';
import attr from 'ember-data/attr';

export default Ember.Mixin.create({
  characteristicNames: [
    'strength',
    'constitution',
    'size',
    'dexterity',
    'intelligence',
    'power',
    'charisma'
  ],

  name: attr('string'),

  characteristicA: attr('number'),

  characteristicAName: Ember.computed('characteristicA', {
    get() {
      const characteristic = this.get('characteristicA');

      return this.characteristicNames[characteristic];
    },

    set(key, value) {
      const characteristic = this.characteristicNames.indexOf(value);

      this.set('characteristicA', characteristic);

      return value;
    }
  }),

  characteristicB: attr('number'),

  characteristicBName: Ember.computed('characteristicB', {
    get() {
      const characteristic = this.get('characteristicB');

      return this.characteristicNames[characteristic];
    },

    set(key, value) {
      const characteristic = this.characteristicNames.indexOf(value);

      this.set('characteristicB', characteristic);

      return value;
    }
  }),

  baseBonus: attr('number', { defaultValue: 0 }),

  description: attr('string')
});

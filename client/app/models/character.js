import Ember from 'ember';
import DS from 'ember-data';

// TODO: Generate this to allow for upward extension.
const DAMAGE_MODIFIERS = [
  '-1d8',
  '-1d6',
  '-1d4',
  '-1d2',
  '+0',
  '+1d2',
  '+1d4',
  '+1d6',
  '+1d8',
  '+1d10',
  '+1d12',
  '+1d12',
  '+2d6',
  '+2d6',
  '+1d8+1d6',
  '+1d8+1d6',
  '+2d8',
  '+2d8',
  '+1d10+1d8',
  '+1d10+1d8',
  '+2d10+1d2',
  '+2d10+1d2',
  '+2d10+1d4',
  '+2d10+1d4'
];

export default DS.Model.extend({
  name: DS.attr('string'),

  age:    DS.attr('number'),
  gender: DS.attr('string'),

  handedness: DS.attr('string'),

  frame:  DS.attr('string'),
  height: DS.attr('number'),
  weight: DS.attr('number'),

  homeland: DS.attr('string'),

  strength:     DS.attr('number', { defaultValue: 1 }),
  constitution: DS.attr('number', { defaultValue: 1 }),
  size:         DS.attr('number', { defaultValue: 1 }),
  dexterity:    DS.attr('number', { defaultValue: 1 }),
  intelligence: DS.attr('number', { defaultValue: 1 }),
  power:        DS.attr('number', { defaultValue: 1 }),
  charisma:     DS.attr('number', { defaultValue: 1 }),

  notes: DS.attr('string'),

  actionPoints: Ember.computed('intelligence', 'dexterity', function() {
    const intelligence = parseInt(this.get('intelligence') || 0);
    const dexterity    = parseInt(this.get('dexterity') || 0);
    const actionPoints = Math.ceil((intelligence + dexterity) / 12);

    return Math.max(actionPoints, 1);
  }),

  damageModifier: Ember.computed('strength', 'size', function() {
    const strength          = parseInt(this.get('strength') || 0);
    const size              = parseInt(this.get('size') || 0);
    const damageModifierIdx = Math.max(Math.ceil((strength + size) / 5) - 1, 0);

    return DAMAGE_MODIFIERS[damageModifierIdx];
  })
});

import Ember from 'ember';
import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),

  age:    DS.attr('number'),
  gender: DS.attr('string'),

  handedness: DS.attr('string'),

  frame:  DS.attr('string'),
  height: DS.attr('number'),
  weight: DS.attr('number'),

  homeland: DS.attr('string'),

  strength:     DS.attr('number'),
  constitution: DS.attr('number'),
  size:         DS.attr('number'),
  dexterity:    DS.attr('number'),
  intelligence: DS.attr('number'),
  power:        DS.attr('number'),
  charisma:     DS.attr('number'),

  notes: DS.attr('string'),

  actionPoints: Ember.computed('intelligence', 'dexterity', function() {
    const intelligence = parseInt(this.get('intelligence') || 0);
    const dexterity    = parseInt(this.get('dexterity') || 0);
    const actionPoints = Math.ceil((intelligence + dexterity) / 12);

    return Math.max(actionPoints, 1);
  })
});

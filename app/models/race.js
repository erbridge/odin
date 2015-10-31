import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),

  strength:     DS.attr('string'),
  constitution: DS.attr('string'),
  size:         DS.attr('string'),
  dexterity:    DS.attr('string'),
  intelligence: DS.attr('string'),
  power:        DS.attr('string'),
  charisma:     DS.attr('string')
});

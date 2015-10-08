import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),

  age:    DS.attr('number'),
  gender: DS.attr('string'),

  handedness: DS.attr('string'),

  frame:  DS.attr('string'),
  height: DS.attr('number'),
  weight: DS.attr('number'),

  str: DS.attr('number'),
  con: DS.attr('number'),
  siz: DS.attr('number'),
  dex: DS.attr('number'),
  int: DS.attr('number'),
  pow: DS.attr('number'),
  cha: DS.attr('number'),

  fatigueLevel: DS.attr('number', {
    defaultValue: 0,
  }),

  experienceRolls: DS.attr('number', {
    defaultValue: 0,
  }),

  notes: DS.attr('string')
});

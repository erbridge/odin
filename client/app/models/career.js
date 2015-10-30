import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),

  skills:       DS.hasMany('base-skill'),
  combatStyles: DS.hasMany('base-combat-style'),

  description: DS.attr('string')
});

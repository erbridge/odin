import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),

  skills:       DS.hasMany('skill-definition'),
  combatStyles: DS.hasMany('combat-style-definition'),

  description: DS.attr('string')
});

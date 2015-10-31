import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),

  skills:        DS.hasMany('skill-definition'),
  combatStyles:  DS.hasMany('combat-style-definition'),
  socialClasses: DS.hasMany('social-class'),
  careers:       DS.hasMany('career'),

  description: DS.attr('string')
});

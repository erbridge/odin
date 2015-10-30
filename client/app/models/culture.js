import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),

  skills:        DS.hasMany('base-skill'),
  combatStyles:  DS.hasMany('base-combat-style'),
  socialClasses: DS.hasMany('social-class'),
  careers:       DS.hasMany('career'),

  description: DS.attr('string')
});

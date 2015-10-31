import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),

  skills:       DS.hasMany('skill-definition'),
  combatStyles: DS.hasMany('combat-style-definition'),

  races:    DS.hasMany('race'),
  cultures: DS.hasMany('culture'),
  careers:  DS.hasMany('career')
});

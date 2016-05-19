import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { hasMany } from 'ember-data/relationships';

export default Model.extend({
  name: attr('string'),

  skills:        hasMany('skill-definition'),
  combatStyles:  hasMany('combat-style-definition'),
  socialClasses: hasMany('social-class'),
  careers:       hasMany('career'),

  description: attr('string')
});

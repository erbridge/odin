import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),

  titles:        DS.attr('string'),
  resources:     DS.attr('string'),
  moneyModifier: DS.attr('number'),
  description:   DS.attr('string')
});

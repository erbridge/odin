import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
  name: attr('string'),

  titles:        attr('string'),
  resources:     attr('string'),
  moneyModifier: attr('number'),
  description:   attr('string')
});

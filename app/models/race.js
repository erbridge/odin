import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
  name: attr('string'),

  strength:     attr('string'),
  constitution: attr('string'),
  size:         attr('string'),
  dexterity:    attr('string'),
  intelligence: attr('string'),
  power:        attr('string'),
  charisma:     attr('string')
});

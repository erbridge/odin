import DS from 'ember-data';

import BaseSkill from './base-skill';

export default BaseSkill.extend({
  weapons: DS.attr('string')
});

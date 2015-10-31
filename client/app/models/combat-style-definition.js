import DS from 'ember-data';

import SkillDefinition from './skill-definition';

export default SkillDefinition.extend({
  weapons: DS.attr('string')
});

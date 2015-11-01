import DS from 'ember-data';

import SkillDefinitionMixin from '../mixins/skill-definition';

export default DS.Model.extend(SkillDefinitionMixin, {
  weapons: DS.attr('string')
});

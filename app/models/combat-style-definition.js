import Model from 'ember-data/model';
import attr from 'ember-data/attr';

import SkillDefinitionMixin from '../mixins/skill-definition';

export default Model.extend(SkillDefinitionMixin, {
  weapons: attr('string')
});

import Model from 'ember-data/model';
import { belongsTo } from 'ember-data/relationships';

import SkillMixin from '../mixins/skill';

export default Model.extend(SkillMixin, {
  definition: belongsTo('skill-definition')
});

import DS from 'ember-data';

import SkillMixin from '../mixins/skill';

export default DS.Model.extend(SkillMixin, {
  definition: DS.belongsTo('combat-style-definition')
});

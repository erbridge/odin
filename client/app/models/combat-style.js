import DS from 'ember-data';

import Skill from './skill';

export default Skill.extend({
  definition: DS.belongsTo('combat-style-definition'),
  character:  DS.belongsTo('character', {
    inverse: 'combatStyles'
  }),
});

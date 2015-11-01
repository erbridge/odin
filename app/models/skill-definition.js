import Ember from 'ember';
import DS from 'ember-data';

import SkillDefinitionMixin from '../mixins/skill-definition';

export default DS.Model.extend(SkillDefinitionMixin, {
  typeNames: [
    'standard',
    'professional',
    'passion',
    'language'
  ],

  type: DS.attr('number'),

  typeName: Ember.computed('type', {
    get() {
      const type = this.get('type');

      return this.typeNames[type];
    },

    set(key, value) {
      const type = this.typeNames.indexOf(value);

      this.set('type', type);

      return value;
    }
  })
});

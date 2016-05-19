import Ember from 'ember';
import Model from 'ember-data/model';
import attr from 'ember-data/attr';

import SkillDefinitionMixin from '../mixins/skill-definition';

export default Model.extend(SkillDefinitionMixin, {
  typeNames: [
    'standard',
    'professional',
    'passion',
    'language'
  ],

  type: attr('number'),

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

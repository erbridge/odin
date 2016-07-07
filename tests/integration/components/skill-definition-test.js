import { expect } from 'chai';
import {
  describeComponent,
  it
} from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describeComponent(
  'skill-definition',
  'Integration: SkillDefinitionComponent',
  {
    integration: true
  },
  function() {
    it.skip('renders', function() {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#skill-definition}}
      //     template content
      //   {{/skill-definition}}
      // `);

      this.render(hbs`{{skill-definition}}`);
      expect(this.$()).to.have.length(1);
    });
  }
);

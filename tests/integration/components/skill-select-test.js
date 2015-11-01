/* jshint expr:true */
import { expect } from 'chai';
import {
  describeComponent,
  it
} from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describeComponent(
  'skill-select',
  'Integration: SkillSelectComponent',
  {
    integration: true
  },
  function() {
    it('renders', function() {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#skill-select}}
      //     template content
      //   {{/skill-select}}
      // `);

      this.render(hbs`{{skill-select}}`);
      expect(this.$()).to.have.length(1);
    });
  }
);

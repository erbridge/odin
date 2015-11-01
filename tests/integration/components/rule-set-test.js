/* jshint expr:true */
import { expect } from 'chai';
import {
  describeComponent,
  it
} from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describeComponent(
  'rule-set',
  'Integration: RuleSetComponent',
  {
    integration: true
  },
  function() {
    it('renders', function() {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#rule-set}}
      //     template content
      //   {{/rule-set}}
      // `);

      this.render(hbs`{{rule-set}}`);
      expect(this.$()).to.have.length(1);
    });
  }
);

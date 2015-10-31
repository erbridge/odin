/* jshint expr:true */
import { expect } from 'chai';
import {
  describeComponent,
  it
} from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describeComponent(
  'character-sheet-attributes',
  'Integration: CharacterSheetAttributesComponent',
  {
    integration: true
  },
  function() {
    it('renders', function() {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#character-sheet-attributes}}
      //     template content
      //   {{/character-sheet-attributes}}
      // `);

      this.render(hbs`{{character-sheet-attributes}}`);
      expect(this.$()).to.have.length(1);
    });
  }
);

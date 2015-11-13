/* jshint expr:true */
import { expect } from 'chai';
import {
  describeComponent,
  it
} from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describeComponent(
  'character-sheet-characteristics',
  'Integration: CharacterSheetCharacteristicsComponent',
  {
    integration: true
  },
  function() {
    it.skip('renders', function() {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#character-sheet-characteristics}}
      //     template content
      //   {{/character-sheet-characteristics}}
      // `);

      this.render(hbs`{{character-sheet-characteristics}}`);
      expect(this.$()).to.have.length(1);
    });
  }
);

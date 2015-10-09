import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('character-sheet-attributes', 'Integration | Component | character sheet attributes', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{character-sheet-attributes}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#character-sheet-attributes}}
      template block text
    {{/character-sheet-attributes}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

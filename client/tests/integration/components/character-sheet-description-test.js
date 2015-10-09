import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('character-sheet-description', 'Integration | Component | character sheet description', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{character-sheet-description}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#character-sheet-description}}
      template block text
    {{/character-sheet-description}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('character-sheet-hit-points', 'Integration | Component | character sheet hit points', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{character-sheet-hit-points}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#character-sheet-hit-points}}
      template block text
    {{/character-sheet-hit-points}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

import { moduleForModel, test } from 'ember-qunit';

moduleForModel('skill-definition', 'Unit | Model | skill definition', {
  // Specify the other units that are required for this test.
  needs: []
});

test('it exists', function(assert) {
  var model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});

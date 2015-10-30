import Ember from 'ember';
import CharacterSkillModelMixin from '../../../mixins/character-skill-model';
import { module, test } from 'qunit';

module('Unit | Mixin | character skill model');

// Replace this with your real tests.
test('it works', function(assert) {
  var CharacterSkillModelObject = Ember.Object.extend(CharacterSkillModelMixin);
  var subject = CharacterSkillModelObject.create();
  assert.ok(subject);
});

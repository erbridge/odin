/* jshint expr:true */
import { expect } from 'chai';
import {
  describe,
  it
} from 'mocha';
import Ember from 'ember';
import SkillDefinitionMixin from 'odin/mixins/skill-definition';

describe('SkillDefinitionMixin', function() {
  // Replace this with your real tests.
  it('works', function() {
    var SkillDefinitionObject = Ember.Object.extend(SkillDefinitionMixin);
    var subject = SkillDefinitionObject.create();
    expect(subject).to.be.ok;
  });
});

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
    let SkillDefinitionObject = Ember.Object.extend(SkillDefinitionMixin);
    let subject = SkillDefinitionObject.create();
    expect(subject).to.be.ok;
  });
});

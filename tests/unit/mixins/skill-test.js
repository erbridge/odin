/* jshint expr:true */
import { expect } from 'chai';
import {
  describe,
  it
} from 'mocha';
import Ember from 'ember';
import SkillMixin from 'odin/mixins/skill';

describe('SkillMixin', function() {
  // Replace this with your real tests.
  it('works', function() {
    var SkillObject = Ember.Object.extend(SkillMixin);
    var subject = SkillObject.create();
    expect(subject).to.be.ok;
  });
});

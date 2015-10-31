/* jshint expr:true */
import { expect } from 'chai';
import {
  describeModel,
  it
} from 'ember-mocha';

describeModel(
  'character',
  'Character',
  {
    // Specify the other units that are required for this test.
    needs: [
      'model:career',
      'model:combat-style',
      'model:culture',
      'model:race',
      'model:skill',
      'model:social-class'
    ]
  },
  function() {
    // Replace this with your real tests.
    it('exists', function() {
      var model = this.subject();
      // var store = this.store();
      expect(model).to.be.ok;
    });
  }
);

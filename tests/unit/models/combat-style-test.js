/* jshint expr:true */
import { expect } from 'chai';
import { describeModel, it } from 'ember-mocha';

describeModel(
  'combat-style',
  'Unit | Model | combat style',
  {
    // Specify the other units that are required for this test.
    needs: [
      'model:character',
      'model:combat-style-definition'
    ]
  },
  function() {
    // Replace this with your real tests.
    it('exists', function() {
      let model = this.subject();
      // var store = this.store();
      expect(model).to.be.ok;
    });
  }
);

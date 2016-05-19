/* jshint expr:true */
import { expect } from 'chai';
import { describeModel, it } from 'ember-mocha';

describeModel(
  'career',
  'Unit | Model | career',
  {
    // Specify the other units that are required for this test.
      needs: [
        'model:skill-definition',
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

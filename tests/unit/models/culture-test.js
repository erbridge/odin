import { expect } from 'chai';
import { describeModel, it } from 'ember-mocha';

describeModel(
  'culture',
  'Unit | Model | culture',
  {
    // Specify the other units that are required for this test.
    needs: [
      'model:career',
      'model:combat-style-definition',
      'model:skill-definition',
      'model:social-class'
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

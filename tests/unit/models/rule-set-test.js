import { expect } from 'chai';
import { describeModel, it } from 'ember-mocha';

describeModel(
  'rule-set',
  'Unit | Model | rule set',
  {
    // Specify the other units that are required for this test.
    needs: [
      'model:career',
      'model:culture',
      'model:combat-style-definition',
      'model:race',
      'model:skill-definition'
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

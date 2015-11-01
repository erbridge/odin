/* jshint expr:true */
import { expect } from 'chai';
import {
  describeModel,
  it
} from 'ember-mocha';

describeModel(
  'combat-style-definition',
  'CombatStyleDefinition',
  {
    // Specify the other units that are required for this test.
    needs: [
      'model:rule-set'
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

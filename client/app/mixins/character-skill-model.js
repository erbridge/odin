import Ember from 'ember';
import DS from 'ember-data';

export default Ember.Mixin.create({
  character: DS.belongsTo('character'),

  cultureBonus:     DS.attr('number'),
  careerBonus:      DS.attr('number'),
  freeBonus:        DS.attr('number'),
  improvementBonus: DS.attr('number', { defaultValue: 0 }),

  value: Ember.computed(
    'character',
    'characteristicA',
    'characteristicB',
    'baseBonus',
    'cultureBonus',
    'careerBonus',
    'freeBonus',
    'improvementBonus',
    function() {
      const characteristicA = this.get('characteristicA');
      const characteristicB = this.get('characteristicB');

      const charBonusA       = this.get(`character.${characteristicA}`);
      const charBonusB       = this.get(`character.${characteristicB}`);
      const baseBonus        = this.get('baseBonus');
      const cultureBonus     = this.get('cultureBonus');
      const careerBonus      = this.get('careerBonus');
      const freeBonus        = this.get('freeBonus');
      const improvementBonus = this.get('improvementBonus');

      return charBonusA + charBonusB + baseBonus + cultureBonus + careerBonus +
        freeBonus + improvementBonus;
    }
  )
});

import Ember from 'ember';
import DS from 'ember-data';

export default Ember.Mixin.create({
  character: DS.belongsTo('character'),

  cultureBonus:     DS.attr('number'),
  careerBonus:      DS.attr('number'),
  freeBonus:        DS.attr('number'),
  improvementBonus: DS.attr('number', { defaultValue: 0 }),

  characteristicBonus: Ember.computed(
    'definition.characteristicA',
    'definition.characteristicB',
    'character.strength',
    'character.constitution',
    'character.size',
    'character.dexterity',
    'character.intelligence',
    'character.power',
    'character.charisma',
    function() {
      const characteristicA = this.get('definition.characteristicA');
      const characteristicB = this.get('definition.characteristicB');

      const charBonusA = this.get(`character.${characteristicA}`);
      const charBonusB = this.get(`character.${characteristicB}`);

      return charBonusA + charBonusB;
    }
  ),

  baseBonus: Ember.computed.oneWay('definition.baseBonus'),

  value: Ember.computed(
    'characteristicBonus',
    'baseBonus',
    'cultureBonus',
    'careerBonus',
    'freeBonus',
    'improvementBonus',
    function() {
      const characteristicBonus = this.get('characteristicBonus');
      const baseBonus           = this.get('baseBonus');
      const cultureBonus        = this.get('cultureBonus');
      const careerBonus         = this.get('careerBonus');
      const freeBonus           = this.get('freeBonus');
      const improvementBonus    = this.get('improvementBonus');

      return characteristicBonus + baseBonus + cultureBonus + careerBonus +
        freeBonus + improvementBonus;
    }
  )
});

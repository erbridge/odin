import Ember from 'ember';
import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo, hasMany } from 'ember-data/relationships';

// TODO: Generate this to allow for upward extension.
const DAMAGE_MODIFIERS = [
  '-1d8',
  '-1d6',
  '-1d4',
  '-1d2',
  '+0',
  '+1d2',
  '+1d4',
  '+1d6',
  '+1d8',
  '+1d10',
  '+1d12',
  '+1d12',
  '+2d6',
  '+2d6',
  '+1d8+1d6',
  '+1d8+1d6',
  '+2d8',
  '+2d8',
  '+1d10+1d8',
  '+1d10+1d8',
  '+2d10+1d2',
  '+2d10+1d2',
  '+2d10+1d4',
  '+2d10+1d4'
];

export default Model.extend({
  name: attr('string'),

  ruleSet: belongsTo('rule-set'),

  age:    attr('number'),
  gender: attr('string'),

  handedness: attr('string'),

  frame:  attr('string'),
  height: attr('number'),
  weight: attr('number'),

  race:        belongsTo('race'),
  culture:     belongsTo('culture'),
  homeland:    attr('string'),
  socialClass: belongsTo('social-class'),
  title:       attr('string'),
  career:      belongsTo('career'),

  strength:     attr('number', { defaultValue: 1 }),
  constitution: attr('number', { defaultValue: 1 }),
  size:         attr('number', { defaultValue: 1 }),
  dexterity:    attr('number', { defaultValue: 1 }),
  intelligence: attr('number', { defaultValue: 1 }),
  power:        attr('number', { defaultValue: 1 }),
  charisma:     attr('number', { defaultValue: 1 }),

  skills:       hasMany('skill'),
  combatStyles: hasMany('combat-style'),

  notes: attr('string'),

  actionPoints: Ember.computed('dexterity', 'intelligence', function() {
    const dexterity    = parseInt(this.get('dexterity') || 0);
    const intelligence = parseInt(this.get('intelligence') || 0);
    const actionPoints = Math.ceil((intelligence + dexterity) / 12);

    return Math.max(actionPoints, 1);
  }),

  strikeRank: Ember.computed('dexterity', 'intelligence', function() {
    const dexterity    = parseInt(this.get('dexterity') || 0);
    const intelligence = parseInt(this.get('intelligence') || 0);

    return Math.ceil((intelligence + dexterity) / 2);
  }),

  damageModifier: Ember.computed('strength', 'size', function() {
    const strength          = parseInt(this.get('strength') || 0);
    const size              = parseInt(this.get('size') || 0);
    const damageModifierIdx = Math.max(Math.ceil((strength + size) / 5) - 1, 0);

    return DAMAGE_MODIFIERS[damageModifierIdx];
  }),

  experienceModifier: Ember.computed('charisma', function() {
    const charisma           = parseInt(this.get('charisma') || 0);
    const experienceModifier = Math.ceil(charisma / 6) - 2;

    return Math.max(experienceModifier, -1);
  }),

  healingRate: Ember.computed('constitution', function() {
    const constitution = parseInt(this.get('constitution') || 0);
    const healingRate  = Math.ceil(constitution / 6);

    return Math.max(healingRate, 1);
  }),

  maxLuckPoints: Ember.computed('power', function() {
    const power      = parseInt(this.get('power') || 0);
    const luckPoints = Math.ceil(power / 6);

    return Math.max(luckPoints, 1);
  }),

  maxMagicPoints: Ember.computed.alias('power'),

  maxHitPointCategory: Ember.computed('constitution', 'size', function() {
    const constitution = parseInt(this.get('constitution') || 0);
    const size         = parseInt(this.get('size') || 0);

    return Math.ceil((constitution + size) / 5);
  }),

  maxHeadHitPoints: Ember.computed('maxHitPointCategory', function() {
    const category = this.get('maxHitPointCategory');

    return Math.max(category, 1);
  }),

  maxChestHitPoints: Ember.computed('maxHitPointCategory', function() {
    const category = this.get('maxHitPointCategory');

    return Math.max(category + 2, 1);
  }),

  maxAbdomenHitPoints: Ember.computed('maxHitPointCategory', function() {
    const category = this.get('maxHitPointCategory');

    return Math.max(category + 1, 1);
  }),

  maxLeftArmHitPoints: Ember.computed('maxHitPointCategory', function() {
    const category = this.get('maxHitPointCategory');

    return Math.max(category - 1, 1);
  }),

  maxRightArmHitPoints: Ember.computed.alias('maxLeftArmHitPoints'),

  maxLeftLegHitPoints: Ember.computed('maxHitPointCategory', function() {
    const category = this.get('maxHitPointCategory');

    return Math.max(category, 1);
  }),

  maxRightLegHitPoints: Ember.computed.alias('maxLeftLegHitPoints')
});

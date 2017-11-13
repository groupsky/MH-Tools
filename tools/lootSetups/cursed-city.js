var utils = require('./_utils')
var genVarField = utils.genVarField

/**
 * Twisted Garden
 */
module.exports = [
  {
    location: genVarField('location', 'Twisted Garden'),
    // phase: [
    //   { vars: { 'Cursed City Curse': { 0: true } }, fields: { phase: 'Curse Lifted' } },
    //   { vars: { 'Cursed City Curse': { 1: true } }, fields: { phase: 'Cursed' } }
    // ],
    special: [ { vars: { base: { hothouse: false, living: false } } } ],
    loot: [ {
      opts: {
        include_items: [
          'Aleth Essence',
          'Ancient Relic',
          'Ber Essence ',
          'Cynd Essence',
          'Dol Essence',
          'Est Essence',
          'Plumepearl Herbs'
        ],
        min_qty: 0.01
      }
    } ],
    mouse: genVarField('mouse', [
      'Cursed Enchanter', 'Cursed Engineer', 'Cursed Librarian', 'Cursed Thief', 'Dark Magi', 'Essence Guardian'
    ])
  }
]

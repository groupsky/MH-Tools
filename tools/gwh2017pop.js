#!/usr/bin/env node

var jt = require('jacksmhtools-client')
var utils = require('./_utils')
var stages = [
  'Snow (1)', 'Wrapping Paper (2)', 'Yule Log (3)', 'Eggnog (4)', 'Tree (5)', 'Scarf (6)',
  'Gingerbread (7)', 'Peppermint (8)', 'Ice (9)', 'Nougat (10)', 'Core'
]
var cheeses = [
  'SB+', 'Gouda', 'Brie', 'Pecan Pecorino', 'Arctic Asiago'
]
var charms = [
  undefined, 'Winter', 'Let It Snow'
]

utils
  .process({
    default: {},
    series: [
      {
        location: utils.genVarField('location', 'Festive Comet'),
        phase: utils.genVarField('stage', stages),
        cheese: utils.genVarField('cheese', cheeses),
        charm: [
          { vars: { charm: { 'Winter': false, 'Let It Snow': false } } },
          { vars: { charm: { 'Winter': true } }, fields: { charm: 'Winter' } },
          { vars: { charm: { 'Let It Snow': true } }, fields: { charm: 'Let It Snow' } },
        ]
      }
    ],
    process: function (item) {
      console.error('requesting', JSON.stringify(item.vars))
      return jt.getSAEncounterRateData(item.vars, item.opts)
        .filter(function (i) { return item.fields.stage === 'Core' || i.sample > 100 })
        .map(utils.preparePopulation.bind(utils, item.fields))
    }
  })
  .then(function (items) {
    return items.sort(function (a, b) {
      return (stages.indexOf(a.stage) - stages.indexOf(b.stage)) * 10000
        + (cheeses.indexOf(a.cheese) - cheeses.indexOf(b.cheese)) * 1000
        + (charms.indexOf(a.charm) - charms.indexOf(b.charm)) * 100
        + parseFloat(b.attraction) - parseFloat(a.attraction)
    })
  })
  .then(utils.toCsv.bind(utils, utils.POP_FIELDS))
  .then(console.log.bind(console))

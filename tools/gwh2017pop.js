#!/usr/bin/env node

var jt = require('jacksmhtools-client')
var utils = require('./_utils')

utils
  .process({
    default: {},
    series: [
      {
        location: utils.genVarField('location', 'Festive Comet'),
        phase: utils.genVarField('stage', [
          'Snow (1)', 'Wrapping Paper (2)', 'Yule Log (3)', 'Eggnog (4)', 'Tree (5)', 'Scarf (6)',
          'Gingerbread (7)', 'Peppermint (8)', 'Ice (9)', 'Core'
        ]),
        cheese: utils.genVarField('cheese', [
          'Gouda', 'SB+', 'Arctic Asiago', 'Pecan Pecorino', 'Brie'
        ]),
        charm: [
          { vars: { charm: { 'Winter': false, 'Let It Snow': false } } },
          { vars: { charm: { 'Winter': true } }, fields: { charm: 'Winter' } },
          { vars: { charm: { 'Let It Snow': true } }, fields: { charm: 'Let It Snow' } },
        ]
      },
      {
        location: utils.genVarField('location', 'Festive Comet'),
        phase: [ { fields: { stage: 'Combined' } } ],
        cheese: utils.genVarField('cheese', [
          'Gouda', 'SB+', 'Arctic Asiago', 'Pecan Pecorino', 'Brie'
        ]),
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
        .filter(function (item) {
          return item.sample > 100
        })
        .map(utils.preparePopulation.bind(utils, item.fields))
    }
  })
  .then(utils.toCsv.bind(utils, utils.POP_FIELDS))
  .then(console.log.bind(console))

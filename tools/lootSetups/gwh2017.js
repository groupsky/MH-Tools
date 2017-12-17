var utils = require('./_utils')
var genVarField = utils.genVarField

module.exports = [
  {
    location: genVarField('location', 'Festive Comet'),
    mice: genVarField('mouse', [
      'Snow Scavenger', 'Hoarder', 'Snowblower', 'Builder', 'Snow Golem Architect', 'Snow Fort', 'Joy', 'Reinbo',
      'Nice Knitting', 'Snowglobe', 'Slay Ride', 'Snow Golem Jockey', 'Elf', 'Snow Boulder', 'Great Winter Hunt Impostor',
      'Snowflake', 'Gingerbread', 'Toboggan Technician', 'Missile Toe', 'Snowball Hoarder', 'Frigid Foreman',
      'Wreath Thief', 'Toy Tinkerer', 'S.N.O.W. Golem', 'Ribbon', 'Free Skiing', 'Destructoy', 'Miser', 'Triple Lutz',
      'Ridiculous Sweater', 'Snow Sorceress', 'Stocking', 'Sporty Ski Instructor', 'Young Prodigy Racer', 'Toy',
      'Borean Commander', 'Glacia Ice Fist', 'Confused Courier', 'Tundra Huntress', 'Candy Cane', 'Christmas Tree',
      'Nutcracker', 'Present', 'Mouse of Winter Past', 'Greedy Al', 'Mouse of Winter Future', 'Squeaker Claws',
      'Rainbow Racer', 'Scrooge', 'Mad Elf', 'Black Diamond Racer', 'Ornament', 'Nitro Racer', 'Mouse of Winter Present',
      'Double Black Diamond Racer', 'Stuck Snowball', 'Naughty Nougat'
    ]),
    loot: [ {
      opts: {
        exclude_items: [
          '2017 Charm', 'Chrome Charm', 'Ful\'Mina\'s Gift', 'Nightshade', 'Treasure Map Clue',
          'Green Winter Hunt Gift Box', 'Purple Winter Hunt Gift Box', 'Orange Winter Hunt Gift Boxe',
          'Orange Winter Hunt Gift Box', 'Snowball Charm', 'Super Snowball Charm', 'Festive Ultimate Power Charm',
          'Festive Ultimate Luck Charm', 'Extreme Snowball Charm', 'Festive Ultimate Lucky Power Charm'
        ],
        min_qty: 0.01
      }
    } ]
  }
]

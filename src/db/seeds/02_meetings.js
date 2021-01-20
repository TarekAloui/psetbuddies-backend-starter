const meetingsData = require('../../../data/meetings')


exports.seed = knex => knex('meetings').del()
  .then(() => knex('meetings').insert(meetingsData))

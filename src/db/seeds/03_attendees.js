const attendeesData = require('../../../data/attendees')


exports.seed = knex => knex('attendees').del()
  .then(() => knex('attendees').insert(attendeesData))

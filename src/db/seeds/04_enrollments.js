const enrollmentsData = require('../../../data/enrollments')


exports.seed = knex => knex('enrollments').del()
  .then(() => knex('enrollments').insert(enrollmentsData))

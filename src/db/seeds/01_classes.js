const classesData = require('../../../data/classes')


exports.seed = knex => knex('classes').del()
  .then(() => knex('classes').insert(classesData))

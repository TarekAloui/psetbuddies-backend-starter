const { createTableIfNotExists } = require('../helpers')

exports.up = async knex => createTableIfNotExists(knex, 'enrollments', table => {
  table
    .uuid('id')
    .notNullable()
    .primary()
    .defaultTo(knex.raw('uuid_generate_v4()'))

  table
    .uuid('classId')
    .notNullable()
    .references('classes.id')

  table
    .uuid('userId')
    .notNullable()
    .references('users.id')

  table.timestamp('createdAt').defaultTo(knex.fn.now())
  table.timestamp('updatedAt').defaultTo(knex.fn.now())
})

exports.down = async knex => knex.schema.dropTableIfExists('enrollments')

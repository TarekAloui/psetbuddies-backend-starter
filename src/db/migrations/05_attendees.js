const { createTableIfNotExists } = require('../helpers')

exports.up = async knex => createTableIfNotExists(knex, 'attendees', table => {
  table
    .uuid('id')
    .notNullable()
    .primary()
    .defaultTo(knex.raw('uuid_generate_v4()'))

  table
    .uuid('meetingId')
    .notNullable()
    .references('meetings.id')

  table
    .uuid('userId')
    .references('users.id')

  table.timestamp('createdAt').defaultTo(knex.fn.now())
  table.timestamp('updatedAt').defaultTo(knex.fn.now())
})

exports.down = async knex => knex.schema.dropTableIfExists('attendees')

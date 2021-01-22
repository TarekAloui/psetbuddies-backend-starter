const { createTableIfNotExists } = require('../helpers')

exports.up = async knex => createTableIfNotExists(knex, 'meetings', table => {
  table
    .uuid('id')
    .notNullable()
    .primary()
    .defaultTo(knex.raw('uuid_generate_v4()'))

  table.uuid('creatorId')
    .notNullable()
    .references('users.id')


  table.uuid('classId')
    .references('classes.id')

  table.timestamp('time')
    .defaultTo(knex.fn.now())


  table.string('zoom_link')

  table.timestamp('createdAt').defaultTo(knex.fn.now())
  table.timestamp('updatedAt').defaultTo(knex.fn.now())
})

exports.down = async knex => knex.schema.dropTableIfExists('meetings')

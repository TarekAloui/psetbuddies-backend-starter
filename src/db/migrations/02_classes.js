
const { createTableIfNotExists } = require('../helpers')

exports.up = async knex => createTableIfNotExists(knex, 'classes', table => {
  table
    .uuid('id')
    .notNullable()
    .primary()
    .defaultTo(knex.raw('uuid_generate_v4()'))

  table
    .string('name')
    .unique()
    .notNullable()

  table
    .string('description')
    .unique()

  table
    .string('professor')
    .unique()

  table.timestamp('createdAt').defaultTo(knex.fn.now())
  table.timestamp('updatedAt').defaultTo(knex.fn.now())
})

exports.down = async knex => knex.schema.dropTableIfExists('classes')

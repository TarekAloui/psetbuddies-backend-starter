const casual = require('casual')

casual.define('class', () => ({
  id: casual.uuid,
  name: casual.title,
  description: casual.short_description,
  professor: casual.full_name,
  createdAt: casual.moment,
  updatedAt: casual.moment,
}))

const classesData = Array.from(Array(10), () => casual.class)

module.exports = classesData

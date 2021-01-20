const casual = require('casual')
const users = require('./users')
const classes = require('./classes')

const userIds = users.map(user => user.id)
const classesIds = classes.map(c => c.id)

casual.define('enrollment', () => ({
  id: casual.uuid,
  userId: casual.random_element(userIds),
  classId: casual.random_element(classesIds),
  createdAt: casual.moment,
  updatedAt: casual.moment,
}))

const enrollmentsData = Array.from(Array(100), () => casual.enrollment)

module.exports = enrollmentsData

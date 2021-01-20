const casual = require('casual')
const users = require('./users')
const classes = require('./classes')

const userIds = users.map(user => user.id)
const classesId = classes.map(c => c.id)

casual.define('meeting', () => ({
  id: casual.uuid,
  creatorId: casual.random_element(userIds),
  classId: casual.random_element(classesId),
  time: casual.moment,
  zoom_link: casual.url,
  createdAt: casual.moment,
  updatedAt: casual.moment,
}))

const meetingsData = Array.from(Array(20), () => casual.meeting)

module.exports = meetingsData

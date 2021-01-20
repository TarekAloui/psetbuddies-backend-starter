const casual = require('casual')
const users = require('./users')
const meetings = require('./meetings')

const userIds = users.map(user => user.id)
const meetingsIds = meetings.map(meeting => meeting.id)

casual.define('attendee', () => ({
  id: casual.uuid,
  userId: casual.random_element(userIds),
  meetingId: casual.random_element(meetingsIds),
  createdAt: casual.moment,
  updatedAt: casual.moment,
}))

const attendeesData = Array.from(Array(100), () => casual.attendee)

module.exports = attendeesData

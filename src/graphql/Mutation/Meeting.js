const Meeting = require('../../models/Meeting')

const createMeeting = async (obj, { meeting }, context) => {
  try {
    const m = await Meeting.query().insert(meeting).returning('*')
    return m
  } catch (error) {
    throw new Error(`ERROR: failed at creating meeting.\n${error.message}`)
  }
}

const deleteMeeting = async (obj, { meetingId }, context) => {
  try {
    const meeting = await Meeting.query().delete().where('id', meetingId).returning('*')
    return meeting
  } catch (error) {
    throw new Error(`ERROR: failed at deleting meeting.\n${error.message}`)
  }
}

const resolver = {
  Mutation: {
    createMeeting,
    deleteMeeting,
  },
}

module.exports = resolver

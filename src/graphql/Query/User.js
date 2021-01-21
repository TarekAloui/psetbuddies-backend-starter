
const User = require('../../models/User')

const getOwnedMeetings = async (obj, { userId }) => {
  try {
    const ownedMeetings = (await User.query().findOne('id', userId)).$relatedQuery('ownedMeetings')
    return ownedMeetings
  } catch (error) {
    throw new Error('ERROR: failed at getting owned meetings')
  }
}

const getMeetingsByUser = async (obj, { userId }) => {
  try {
    const ownedMeetings = (await User.query().findOne('id', userId)).$relatedQuery('meetings')
    return ownedMeetings
  } catch (error) {
    throw new Error('ERROR: failed at getting owned meetings')
  }
}

const resolver = {
  Query: {
    getOwnedMeetings,
    getMeetingsByUser,
  },
  User: {
    meetings: getMeetingsByUser,
    ownedMeetings: getOwnedMeetings,
  },
}

module.exports = resolver

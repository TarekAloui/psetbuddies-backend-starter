
const User = require('../../models/User')

const getOwnedMeetings = async (obj, { userId }) => {
  try {
    const ownedMeetings = (await User.query().findOne('id', userId)).$relatedQuery('ownedMeetings')
    return ownedMeetings
  } catch (error) {
    throw new Error('ERROR: failed at getting owned meetings')
  }
}

const meetings = async ({ id }, params, context) => {
  try {
    const m = (await User.query().findOne('id', id)).$relatedQuery('ownedMeetings')
    return m
  } catch (error) {
    throw new Error('ERROR: failed at getting owned meetings')
  }
}

const getMeetingsByUser = async (obj, { userId }) => {
  try {
    const m = (await User.query().findOne('id', userId)).$relatedQuery('meetings')
    return m
  } catch (error) {
    throw new Error('ERROR: failed at getting owned meetings')
  }
}

const ownedMeetings = async ({ id }, params, context) => {
  try {
    const m = (await User.query().findOne('id', id)).$relatedQuery('meetings')
    return m
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
    meetings,
    ownedMeetings,
  },
}

module.exports = resolver

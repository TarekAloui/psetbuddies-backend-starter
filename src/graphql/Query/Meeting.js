const Meeting = require('../../models/Meeting')

const getClass = async ({ id }, params, context) => {
  try {
    const classObj = await (await Meeting.query().findOne('id', id)).$relatedQuery('class')
    return classObj
  } catch (error) {
    throw new Error(`ERROR: failed at getting class for Meeting: ${error.message}`)
  }
}

const getCreator = async ({ id }, params, context) => {
  try {
    const creator = await (await Meeting.query().findOne('id', id)).$relatedQuery('creator')
    return creator
  } catch (error) {
    throw new Error(`ERROR: failed at getting class for Meeting: ${error.message}`)
  }
}

const resolver = {
  Meeting: {
    class: getClass,
    creator: getCreator,
  },
}

module.exports = resolver

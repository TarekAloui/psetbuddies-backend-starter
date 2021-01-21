const Meeting = require('../../models/Meeting')

const getClass = async ({ id, classId }, params, context) => {
  try {
    const classObj = await (await Meeting.query().findOne('id', id)).$relatedQuery('class')
    return classObj
  } catch (error) {
    throw new Error(`ERROR: failed at getting class for Meeting: ${error.message}`)
  }
}

const resolver = {
  Meeting: {
    class: getClass,
  },
}

module.exports = resolver

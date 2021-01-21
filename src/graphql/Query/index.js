const merge = require('lodash.merge')
const Meeting = require('./Meeting')
const User = require('./User')

const resolvers = [User, Meeting]

module.exports = merge(...resolvers)

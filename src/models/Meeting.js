const BaseModel = require('./BaseModel')

class Meeting extends BaseModel {
  static get tableName() {
    return 'meetings'
  }

  static get relationMappings() {
    const Class = require('./Class')
    const User = require('./User')
    return {
      class: {
        relation: BaseModel.BelongsToOneRelation,
        modelClass: Class,
        join: {
          from: 'meetings.classId',
          to: 'classes.id',
        },
      },
      creator: {
        relation: BaseModel.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: 'meetings.creatorId',
          to: 'users.id',
        },
      },
    }
  }
}

module.exports = Meeting

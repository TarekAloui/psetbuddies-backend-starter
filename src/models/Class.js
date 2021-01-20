const BaseModel = require('./BaseModel')

class Class extends BaseModel {
  static get tableName() {
    return 'classes'
  }

  static get relationMappings() {
    const User = require('./User')
    const Meeting = require('./Meeting')

    return {
      students: {
        relation: BaseModel.ManyToManyRelation,
        modelClass: User,
        join: {
          from: 'class.id',
          through: {
            from: 'enrollments.classId',
            to: 'enrollments.userId',
          },
          to: 'users.id',
        },
      },

      meetings: {
        relation: BaseModel.HasManyRelation,
        modelClass: Meeting,
        join: {
          from: 'classes.id',
          to: 'meetings.classId',
        },
      },

    }
  }
}

module.exports = Class

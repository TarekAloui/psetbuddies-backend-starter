const BaseModel = require('./BaseModel')

class User extends BaseModel {
  static get tableName() {
    return 'users'
  }

  static get relationMappings() {
    const Class = require('./Class')
    const Meeting = require('./Meeting')
    return {
      classes: {
        relation: BaseModel.ManyToManyRelation,
        modelClass: Class,
        join: {
          from: 'users.id',
          through: {
            from: 'enrollments.userId',
            to: 'enrollments.classId',
          },
          to: 'classes.id',
        },
      },
      meetings: {
        relation: BaseModel.ManyToManyRelation,
        modelClass: Meeting,
        join: {
          from: 'users.id',
          through: {
            from: 'attendees.userId',
            to: 'attendees.meetingId',
          },
          to: 'meetings.id',
        },
      },
    }
  }
}

module.exports = User

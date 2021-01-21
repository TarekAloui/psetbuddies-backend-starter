const { gql } = require('apollo-server-express')

module.exports = gql`
  type Mutation {
    login(email: String!, password: String!): AuthReturn!
    register(input: RegisterInput!): AuthReturn!
    createMeeting(meeting: CreateMeetingInput): Meeting!
    deleteMeeting(meetingId: ID!)
  }

  type Query {
    getOwnedMeetings(userId: ID!): [Meeting]!
    getMeetingsByUser(userId: ID!): [Meeting]!
  }

  type User {
    id: ID!
    email: String!
    password: String!
    firstName: String!
    lastName: String!
    meetings: [Meeting]
    ownedMeetings: [Meeting]
    createdAt: String!
    updatedAt: String!
  }

  type Meeting {
    id: ID!
    creatorID: [User!]!
    classId: [Class!]!
    time: String!
    zoom_link: String!
    createdAt: String!
    updatedAt: String!
  }

  type Class {
    id: ID!
    name: String!
    description: String
    professor: String
    createdAt: String!
    updatedAt: String!
  }

  type AuthReturn {
    token: String!
    user: User!
  }

  input CreateMeetingInput {
    creatorId: ID!
    classId: ID!
    time: String
  }

  input RegisterInput {
    email: String!
    password: String!
  }
`

const casual = require('casual')

// 'password' hashed with bcrypt scheme
const password = '$2a$10$rQEY9CNl4OC.UtiyRgKnZeW0KaWnEANMKAxfIpNDQCgiCybm3G1fy'

casual.define('user', () => ({
  id: casual.uuid,
  email: casual.email,
  password,
  first_name: casual.first_name,
  last_name: casual.last_name,
  createdAt: casual.moment,
  updatedAt: casual.moment,
}))

const users = Array.from(Array(50), () => casual.user)

module.exports = users

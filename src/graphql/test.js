
const Meeting = require('../models/Meeting')

const f = async () => {
  const m = await Meeting.query().insert({
    creatorId: '4fbe52cc-ab23-45e1-9d59-878f2f365774',
    classId: 'c81f96b1-ffd4-4034-bd03-640f3de98076',
    time: '1973-12-06 22:50:43',
  }).returning('*')
  console.log(m)
}

f()

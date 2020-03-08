const moment = require('moment');
const firebase = require('../utils/firebase');

async function handleRegisterLastDonate(agent) {
  moment.locale('th');
  const userId = agent.originalRequest.payload.data.source.userId;
  // const replyToken = agent.originalRequest.payload.data.replyToken;

  const { bloodtype, province, last_donate } = agent.parameters;
  // save to db
  const doc = {
    uid: userId,
    bloodtype,
    province,
    last_donate: moment(last_donate)
  };
  await firebase.db.collection('member').doc(userId).set(doc);
  agent.add('บันทึกข้อมูลสำเร็จแล้ว');
}

module.exports = handleRegisterLastDonate;
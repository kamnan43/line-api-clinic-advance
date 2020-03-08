const moment = require('moment');
const line = require('@line/bot-sdk');
const config = require('../config.json');
const firebase = require('../utils/firebase');
const client = new line.Client(config);

async function handleRequestMobile(agent) {
  moment.locale('th');
  const userId = agent.originalRequest.payload.data.source.userId;
  // const replyToken = agent.originalRequest.payload.data.replyToken;
  console.log('agent.parameters;', agent.parameters);
  const { bloodtype, province, mobile } = agent.parameters;
  const profile = await client.getProfile(userId);
  // save to db
  const doc = {
    uid: userId,
    name: profile.displayName,
    bloodtype,
    province,
    mobile,
  };
  await firebase.db.collection('request').doc(moment().format('x')).set(doc);
  agent.add('บันทึกข้อมูลสำเร็จแล้ว');

  // send to other
  const message = {
    type: 'text',
    text: `${profile.displayName} ขอบริจาคเลือดกรุ๊ป ${bloodtype} จังหวัด ${province} ติดต่อ ${mobile}`
  };
  firebase.db.collection('member')
    .where('bloodtype', '==', bloodtype)
    .where('province', '==', province)
    .get()
    .then(snapshot => {
      if (snapshot.empty) {
        console.log('No matching documents.');
        return;
      }
      snapshot.forEach(doc => {
        const docInfo = doc.data();
        if (docInfo.uid !== userId) {
          client.pushMessage(docInfo.uid, message);
        }
      });
    })
    .catch(err => {
      console.log('Error getting documents', err);
    });
}

module.exports = handleRequestMobile;
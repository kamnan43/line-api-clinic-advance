const admin = require('firebase-admin');

var serviceAccount = require('../service-account-key.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://blood-plus-fchltb.firebaseio.com"
});
const db = admin.firestore();

module.exports = {
  db,
}
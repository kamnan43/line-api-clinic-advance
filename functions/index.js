const functions = require('firebase-functions').region('asia-northeast1');
const webhook = require('./webhook');
const fulfillment = require('./fulfillment');
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.api = functions.https.onRequest((request, response) => {
  response.send("Hello from Firebase!");
});

exports.webhook = functions.https.onRequest(webhook.app);
exports.fulfillment = functions.https.onRequest(fulfillment.handler);

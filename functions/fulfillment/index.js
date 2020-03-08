// import { Router } from 'express';
const df = require('dialogflow-fulfillment');
const handleRegisterLastDonate = require('./register-lastdonate');
const handleRequestMobile = require('./request-mobile');
const handleFindLocation = require('./find-location');

function handler(request, response) {
    const agent = new df.WebhookClient({ request, response });
    // console.log('Dialogflow Request headers: ' + JSON.stringify(request.headers));
    // console.log('Dialogflow Request body: ' + JSON.stringify(request.body));
    console.log('Dialogflow Request LINEID: ' + JSON.stringify(request.body.originalDetectIntentRequest.payload.data.source.userId));

    const intentMap = new Map();
    intentMap.set('register-lastdonate', handleRegisterLastDonate);
    intentMap.set('request-mobile', handleRequestMobile);
    intentMap.set('find-location', handleFindLocation);
    agent.handleRequest(intentMap);
}

module.exports = {
    handler,
}
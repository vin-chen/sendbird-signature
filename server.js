const VoiceResponse = require('twilio').twiml.VoiceResponse;
const PORT = process.env.PORT || 5000;
const express = require('express');
const app = express();


app.get("/", (req, res, next)=>{
    const twiml = new VoiceResponse();

    twiml.say('Hello Vincent! Vincent! Vincent! Have fun.');

    res.writeHead(200, { 'Content-Type': 'text/xml' });
    res.end(twiml.toString());
})

app.listen(PORT, ()=>{
    console.log('TwiML server running at http://127.0.0.1:'+PORT);    
})



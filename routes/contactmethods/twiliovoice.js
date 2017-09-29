// Twilio Credentials 
const accountSid = 'ACca5b7d9accca612e21697fde01d221a8'; 
const authToken = '1aaa373ba0aacedca82d4d67571b7b0c'; 
let client = require('twilio')(accountSid, authToken); 
const http = require('http');
const twilio = require('twilio');
let vmailurl = '127.0.0.1:1337';

http
  .createServer((req, res) => {
    const twiml = new twilio.twiml.VoiceResponse();
    twiml.say('Hello from your pals at Twilio! Have fun.');
    res.writeHead(200, { 'Content-Type': 'text/xml' });
    res.end(twiml.toString());
  })
  .listen(1337, '127.0.0.1');
console.log("TwiML servin' server running at http://127.0.0.1:1337/");

function voice(to){
client.calls.create({ 
	url: 'https://e9ad1677.ngrok.io',
    to: to, 
    from: "+18582391142" 
}, function(err, message) { 
    console.log(message); 
});
};

module.exports = voice;


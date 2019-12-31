const express = require('express');

const PORT = process.env.PORT || 5000;
const app = express();


app.get("/", (req, res, next)=>{
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end("cool");
})

app.listen(PORT, ()=>{
    console.log('TwiML server running at http://127.0.0.1:'+PORT);    
})



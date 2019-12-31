const express = require('express');

const PORT = process.env.PORT || 5000;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.get("/", (req, res, next)=>{
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end("cool");
})

app.post("/webhook", (req, res, next)=>{
    res.json(req);
})

app.listen(PORT, ()=>{
    console.log('TwiML server running at http://127.0.0.1:'+PORT);    
})



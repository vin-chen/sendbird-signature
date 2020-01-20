const express = require('express');
const crypto =  require('crypto');

const PORT = process.env.PORT || 5000;
const app = express();
app.use(express.json({type:'application/json',verify: (req, res, buf, encoding)=>{
    req.rawBody = buf.toString(encoding || 'utf8');
    // req.rawBody = buf;
}}));
app.use(express.urlencoded({ extended: true }))


const MASTER_TOKEN = '0a9c1297db403d32b76763c496dc0f54b22680a7';

app.get("/", (req, res, next) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end("cool");
})

app.post("/webhook", (req, res, next) => {

    console.log("========================================================================================================");
    console.log("========================================================================================================");
    console.log("========================================================================================================");
    
    // const body = JSON.stringify(req.body);
    const result = {
        headers: req.headers,
        body: req.body,
        rawBody: req.rawBody
    }
    const sign = req.headers['x-sendbird-signature'];
    const hash = crypto.createHmac('sha256', MASTER_TOKEN).update(req.rawBody).digest('hex');
    console.log(result);
    console.log("sign: " + sign);
    console.log("hash: " + hash);


    if (hash === sign) {
        res.status(200);
    } else {
        res.status(400);
    }
    res.json({
        'hash': hash,
        'x-signature': sign
    });
})

app.listen(PORT, () => {
    console.log('server running at port ' + PORT);
})



const express = require('express');
const crypto =  require('crypto');

const PORT = process.env.PORT || 5000;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.get("/", (req, res, next) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end("cool");
})

app.post("/webhook", (req, res, next) => {

    console.log("========================================================================");

    const result = {
        headers: req.headers,
        body: JSON.stringify(req.body)
    }
    
    console.log(result);
    const body = JSON.stringify(req.body)
    const sign = req.headers['x-sendbird-signature'];
    const hash = crypto.createHmac('sha256', '0a9c1297db403d32b76763c496dc0f54b22680a7').update(body).digest('hex');
    
    console.log("sign: " + sign);
    console.log("hash: " + hash);


    if (hash === sign) {
        res.json({match: true});
    } else {
        res.json({match: false});
    }
})

app.listen(PORT, () => {
    console.log('TwiML server running at http://127.0.0.1:' + PORT);
})



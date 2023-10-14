const express = require('express');
const app = express();


app.get('/', (res, req) => {
    req.send('Yo there')
});

app.listen(5000);
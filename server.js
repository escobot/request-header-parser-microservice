'use strict';

const express = require('express');
const app = express();
const port = process.env.PORT || 8000;

app.get('/api/whoami/', function (req, res) {
    const ipaddress = (req.headers['x-forwarded-for'] || '').split(',').pop().trim() || 
    req.socket.remoteAddress;
    const language = req.headers["accept-language"].split(",")[0];
    const software = req.headers["user-agent"].match(/\(([^)]+)\)/)[1];
    res.send({ipaddress, language, software});
})

app.listen(port);
console.log('Server is running on port ' + port);

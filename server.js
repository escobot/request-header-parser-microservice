'use strict';

const express = require('express');
const app = express();

app.get('/api/whoami/', function (req, res) {
    const ipaddress = (req.headers['x-forwarded-for'] || '').split(',').pop().trim() || 
    req.connection.remoteAddress || 
    req.socket.remoteAddress || 
    req.connection.socket.remoteAddress;
    const language = req.headers["accept-language"].split(",")[0];
    const software = req.headers["user-agent"].match(/\(([^)]+)\)/)[1];
    res.send({ipaddress, language, software});
})

app.listen(3000);
console.log('App running on http://localhost:3000');
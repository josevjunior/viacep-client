const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname + '/dist/viacep-api-client'));

app.use('/*', function(req, res){
    res.sendFile(path.join(__dirname+'/dist/viacep-api-client/index.html'));
});

app.listen(process.env.PORT || 8080);
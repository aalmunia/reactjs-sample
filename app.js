var express = require('express');
var app = express();

/* app.get('/', function(oRequest, oResponse) {

}); */

app.use(express.static(__dirname + '/public'));
app.listen(8090, function(oRequest, oResponse) {
    console.log('ReactJS app listening in http://127.0.0.1:8090....');
});
var express    = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

var dummyData = [{data:"master2"}];
app.get('/api/get-data', function(req, resp) {
  resp.json({data:dummyData});
})
app.post('/api/post-data', function(req, resp) {
  var newData = req.body.data;
  dummyData.push(newData);
  resp.json({data:dummyData});
});


app.listen(9000, function() {
  console.log("Server is up");
});

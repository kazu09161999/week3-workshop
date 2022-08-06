var express = require('express'); //used for routing
var app = express();
// var http = require('http').Server(app); //used to provide http functionality
var bodyParser = require('body-parser');
app.use (bodyParser.json()); 

app.use(express.static(__dirname + '/www'));

app.listen(3000, ()=>{
  var d = new Date();
  var n = d.getHours();
  var m = d.getMinutes();
  console.log('Server has been started at : ' + n + ':' + m);
});

app.get('/', function(req, res){

  res.sendFile(__dirname + '/www/index.html');
});

app.post('/api/login', function(req,res){
  let users = [{'email':'abc@com.au', 'pwd':'123'},{'email':'abd@com.au', 'pwd':'123'},{'email':'abe@com.au', 'pwd':'123'} ]

  if (!req.body) {
    return res.sendStatus(400)
  }
  var customer = {};
  customer.email = req.body.email;
  customer.upwd = req.body.upwd;
  customer.valid = false;
for (let i=0;i<users.length;i++){
  if (req.body.email == users[i].email && req.body.upwd == users[i].pwd) {
    customer.valid = true;
  }
}
  res.send(customer);
});
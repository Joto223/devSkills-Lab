const express = require('express');
const app = express();
const path = require('path');
const router = express.Router
const skillCtrl = require('./controllers/skillsCtrl');
const bodyParcer = require('body-parcer');

//Template engine
app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, 'views'));
var urlencodedParser = bodyParser.urlencoded({ extended: false })

//static files
// app.use(express.static('./'));
//controllers
skillCtrl(app);
 
app.get('/', function(req, res){
    res.render('home');
});

app.get('/skills', function(req, res) {
    res.render('views/skills', {
        skills: skillsList.getAll()
    });
  });
// app.post('/', function(req, res){
//     res.send('intro-version');
// });

app.listen('3000', function(){
    console.log('app is listening to port 3000');
});
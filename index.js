const   express = require('express'),
        mongoose = require('mongoose'),
        app     = express(),
        path = require('path'),
        keys = require('./config/keys'),
        isValidUrl = require('./middleware/isValidUrl');

        require('./models/urls');
const   shortenUrl = require('./handler/shortenUrl'),
        showShortUrl = require('./handler/showShortUrl');


const PORT = process.env.PORT || 5500;
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(__dirname+'/views'));
app.use(express.static(__dirname+'/public'));

//set up mongoose
mongoose.set("debug",true);
mongoose.Promise = Promise;
mongoose.connect(keys.MONGO_URI, {keepAlive:true});

app.get('/',(req,res)=>{
  //  res.send({test:'you are here!'})
    res.sendFile('index.html');
});

app.get('/new/:url(*)', isValidUrl,shortenUrl);

app.get('/:shortUrl',showShortUrl);
app.listen(PORT,()=>{
    console.log('Server started on port ',PORT);
})
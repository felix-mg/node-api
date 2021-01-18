const express = require('express');
const app = express();
var exphbs  = require('express-handlebars');

const path = require('path');

const PORT = process.env.PORT || 5000;

//Set handlebars middleware
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

//Set handlebar routes which are dynamic
app.get('/', function (req, res) {
    res.render('home', {
        stuff: "about.html"
    });
});


//Set static folder
app.use(express.static(path.join(__dirname, 'public')));



app.listen(PORT, () => console.log('Server Listening on port ' + PORT)); 
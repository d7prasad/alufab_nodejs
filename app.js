const express = require('express');
const router = express.Router();
const path = require('path');
const exphbs  = require('express-handlebars');
const app = express();
const port = process.env.PORT || 5000;


// Handlebars middlewares - This will tell the system that we want to use handlebars
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Express static - To load assets from public folder
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('index',{
        title: "title"
    })
})

app.get('/sliding_window', (req, res) => {
    res.render('sliding_window')
})

app.get('/alu_part', (req, res) => {
    res.render('alu_part')
})


app.listen(port, () =>{
    console.log(`Server started ${port}`)
})
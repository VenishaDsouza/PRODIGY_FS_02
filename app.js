require('dotenv').config();

const express = require('express');
const cookieParser = require('cookie-parser');
const expressLayout = require('express-ejs-layouts')
const flash = require('connect-flash')
const session = require('express-session')
const methodOverride = require('method-override')
const connectDB = require('./server/config/db')

const app = express();

const port = 8000 || process.env.PORT;

//connect to database
connectDB();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

app.use(methodOverride('_method'))

//static files
app.use(express.static('public'));

//Express session
app.use(
    session({
        secret:'secret',
        resave: false,
        saveUninitialized: true,
        cookie:{
            maxAge: 1000*60*60*24*7, //1 week
        }
    })
);

//Flash messages
app.use(flash({sessionKeyName: 'flashMessage'}));


//templating engine
app.use(expressLayout);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');

//Routes
app.use('/auth', require('./server/routes/auth'));
app.use('/', require('./server/routes/employee'))

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})
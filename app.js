require('module-alias/register');
require('dotenv').config();

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');


const bodyParser = require('body-parser');
const mailRoutes = require('./routes/mailRoutes');


var app = express();
const apiRouter = require('@routes/api');


const port = process.env.PORT || 3000;



//const port1 = process.env.PORT1 || 3001;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
// !!!!!!! Para comprobar que se conecta bien a la base de datos !!!!!!
// const sequelize = require('@configs/dbConfig');
//
// sequelize.authenticate()
//     .then(() => {
//         console.log('Conexión establecida correctamente.');
//     })
//     .catch(err => {
//         console.error('No se pudo conectar a la base de datos:', err);
//     });
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', apiRouter);
app.use('/', indexRouter);
app.use('/users', usersRouter);



app.use(bodyParser.json());
app.use('/api/mail', mailRoutes);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
    console.log("err");
    console.log(req);
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});



//app.listen(port1, () => {
//   console.log(`Servidor corriendo en el puerto ${port1}`);
//});

module.exports = app;

require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');
const cokieParser = require('cookie-parser');
const morgan = require('morgan')
const usersRouter = require('./controllers/users');
const resetPasswordRouter = require('./controllers/resetpassword');
const loginRouter = require('./controllers/login');
const todosRouter = require('./controllers/todos');
const { userExtractor } = require('./middleware/auth');
const logoutRouter = require('./controllers/logout');
 
(async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI_TEST);
        console.log('conecto a mongoDB');
    } catch (error) {
        console.log(error);
        console.log('no conecto a mongoDB');

    }
})();


app.use(cors());
app.use(express.json());   
app.use(cokieParser());




//rutas frontend 
app.use('/', express.static(path.resolve('views', 'home')));
app.use('/signup', express.static(path.resolve('views', 'signup')));
app.use('/login', express.static(path.resolve('views', 'login')));
app.use('/todos', express.static(path.resolve('views', 'todos')));
app.use('/components', express.static(path.resolve('views', 'components')));
app.use('/reset-password', express.static(path.resolve('views', 'resetpassword')));
app.use('/reset-password/:token', express.static(path.resolve('views', 'resetpassword')));
app.use('/images', express.static(path.resolve('img')));
app.use('/verify/:id/:token', express.static(path.resolve('views', 'verify')));


app.use(morgan('tiny'));

//rutas backend
app.use('/api/users', usersRouter);
app.use('/api/resetpassword', resetPasswordRouter);
app.use('/api/login', loginRouter);
app.use('/api/logout', logoutRouter);
app.use('/api/todos',userExtractor ,todosRouter);


module.exports = app; 
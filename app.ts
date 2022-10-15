import express from 'express';

import route_index from './routes/index'

const APP =  express()

APP.set('port', process.env.PORT || 8000);

APP.set('view engine', 'pug');
APP.set('views', './views')

APP.use(express.static('static'));

APP.use('/', route_index)

APP.use((req, res, next)=>{
    res.render('error');
})

APP.listen(APP.get('port'), ()=>{
    console.log(`Server running on port ${APP.get('port')}`);
})
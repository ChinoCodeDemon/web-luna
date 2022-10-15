import express from 'express';

const APP =  express()

APP.set('port', process.env.PORT || 8000);

APP.use(express.static('static'));

APP.get('/', (req, res)=>{
    res.render('index.pug');
})

APP.listen(APP.get('port'), ()=>{
    console.log(`Server running on port ${APP.get('port')}`);
})
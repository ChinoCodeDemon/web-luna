import express from 'express';

const ROUTER = express.Router();

ROUTER.get('/', (req,res)=>{
    res.render('index');
});

export default ROUTER
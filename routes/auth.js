/* 
USERS ROUTES
aplicacion de rutas para usuarios

aplication of routes for users

*/

const { Router } = require('express');
const router = Router();
const { check } = require('express-validator');

const { createUser, loginUser, renewUser, getRenewUser } = require('../controllers/auth');



//GET request

router.get( '/renew', getRenewUser );

//POST request

router.post(
    
    '/new', 
    check('name', 'El nombre es obligatorio').not().isEmpty(),
    createUser );

router.post('/login', loginUser );



router.post('/renew', renewUser );












module.exports = router;
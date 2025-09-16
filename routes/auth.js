/* 
USERS ROUTES
aplicacion de rutas para usuarios

aplication of routes for users

*/

const { Router } = require('express');
const router = Router();

const { createUser, loginUser } = require('../controllers/auth');



router.post('/new', createUser )

router.post('/login', loginUser )

router.post('/renew', (req, res) => {

    res.json(
        {ok: true, msg: 'renew' }
    )
})







module.exports = router;
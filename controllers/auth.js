const { response } = require('express');

const  createUser =  (req, res = response ) => {

    const { name, email,  password } = req.body;

    if( name.length  <= 5 ){
       
        return res.status(400).json({
            ok: false,
            msg: 'El nombre debe tener al menos 5 caracteres'
        });
    }
    

    // For now return received values and the empty user template
    res.json({
        ok: true,
        msg: 'create user',
        name,
        email,
        password,
       
    });
};


const loginUser =  (req, res = response) => { 
    
    const { email, password } = req.body;

    res.json({
        ok: true,
        msg: 'loginUser',
        email,
        password
    });
}

const renewUser = (req, res = response ) => {
    res.json({
        ok: true,
        msg: 'renewUser'
    });
}

const getRenewUser = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'getRenewUser'
    });
}




module.exports = {
    createUser,
    loginUser,
    renewUser,
    getRenewUser
};
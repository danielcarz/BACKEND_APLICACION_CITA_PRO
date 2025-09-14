const  createUser =  (req, res) => { 
    res.json({
        ok: true,
        msg: 'create user'
    });
};


const loginUser =  (req, res) => { 
    res.json({
        ok: true,
        msg: 'loginUser'
    });
}


module.exports = {
    createUser : createUser,
    loginUser  : loginUser
};
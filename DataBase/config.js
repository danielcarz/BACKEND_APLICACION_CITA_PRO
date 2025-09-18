/* 

File to configure database connections.


*/

const mongoose = require('mongoose');

const dbConnection = async() => {

    const uri = process.env.DB_CNN;

    try {

       await mongoose.connect( uri )

       console.log('DB Online');
        
       
    } catch (error) {

        console.log(error);
        throw Error('Error a la hora de iniciar la BD');

    }

}

module.exports = {

    dbConnection
}


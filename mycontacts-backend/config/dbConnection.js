    const mongooes = require("mongoose");

    const connectionDb = async() => {
        try{
            const connect = await mongooes.connect(process.env.CONNECTION_STRING);
            console.log("Databasd is connected :", connect.connection.host, connect.connection.name);
        }catch(err){
            console.log(err);
            process.exit(1);
        }
    };


    module.exports = connectionDb;
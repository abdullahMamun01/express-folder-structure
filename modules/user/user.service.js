const UserDB = require("../../db")



const getAllUser = () => {

    return new UserDB().getAllUser()
}

const createUserToDB = (payload) => {
    const db = new UserDB()
    const isUser = db.getAllUser().find(user => user.id === payload.id)
    if(isUser){
        const error = new Error('User already exist');
        error.statusCode = 409; 
        throw error;
    }

    db.addUser(payload)
    return payload
}


const userService = {
    getAllUser,
    createUserToDB
}

module.exports = userService
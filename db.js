
const db = [
    {
        id: 1,
        name: 'John Doe',
        email: 'john@example.com'
    },
    {
        id: 2,
        name: 'Jane Doe',
        email: 'jane@example.com'
    }
]

 class UserDB {
    constructor(id, name, email) {
        this.users = db

    }

     getAllUser(){
        return this.users
    }

    addUser (payload) {
        this.users.push(payload)
    }
   
}

module.exports = UserDB


const catchAsync = require("../../utils")
const userService = require("./user.service")


const getUsers = (req, res) => {
    const allUser = userService.getAllUser()
    res.json({ message: 'success', data: allUser })
}

const createUser = catchAsync((req, res) => {
    const payload = req.body
    const newUser = userService.createUserToDB(payload)

    res.json({ message: 'success', data: newUser })
})


const userController = {
    getUsers,
    createUser
}

module.exports = userController
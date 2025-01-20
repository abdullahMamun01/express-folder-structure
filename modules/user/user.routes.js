const express = require('express');
const userController = require('./user.controller');
const router = express.Router();

// Route definition
router.get('/', userController.getUsers);
router.post('/', userController.createUser);

// Export the router
module.exports = router;

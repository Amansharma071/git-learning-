const express = require('express');
const router = express.Router();

module.exports = router;

const { registerUser, loginUser, getProfile } = require('../controller/authcontroller');

// Register route
router.post('/register', registerUser);
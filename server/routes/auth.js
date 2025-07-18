const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.get('/login', authController.loginForm);
router.post('/login', authController.handleLogin);
router.get('/logout', authController.logout);

module.exports = router;

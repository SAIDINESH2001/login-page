const express = require('express');
const router = express.Router();
const registerController = require('../controllers/registerControllers');

router.post('/login', registerController.searchUserByEmail);
router.post('/register', registerController.postUsers);


module.exports = router;
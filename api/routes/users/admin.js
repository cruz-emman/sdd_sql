const express = require('express');

const { login } = require('../../controllers/users/admin.js');

const router = express.Router();


router.post('/', login)

module.exports = router;

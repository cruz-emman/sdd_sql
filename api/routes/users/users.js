const express = require('express');
const { getAllUsers, addUser, getSingleUser, updateUser, deleteUser } = require('../../controllers/users/user');

const router = express.Router();


router.get('/', getAllUsers )
router.post('/', addUser)
router.get('/find/:id', getSingleUser)
router.put('/:id', updateUser)
router.delete('/:id', deleteUser )

module.exports = router;

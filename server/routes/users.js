const express = require('express');
const userController = require('../controllers/userController.js');

const router = express.Router();

router.post('/signUp', userController.signUp, (req, res) => {
    res.sendStatus(200);
});

router.get('/login', userController.login, (req, res) => {
    res.status(200).json(res.locals);
})

module.exports = router;
const express = require('express');
const userController = require('../controllers/userController.js');

const router = express.Router();

router.post('/signUp', (req, res, next) => {
    console.log('USERS ROUTER SIGN UP');
    return next();
}, userController.signUp, (req, res) => {
    res.send(res.locals.json());
});

router.post('/login', userController.login, (req, res) => {
    res.send(res.locals.json());
})

module.exports = router;
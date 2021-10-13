const express = require('express');
const userController = require('../controllers/userController.js');

const router = express.Router();

router.post('/signUp', userController.signUp, (req, res) => {
    res.sendStatus(200);
});

router.get('/login', userController.login, (req, res) => {
    res.status(200).json(res.locals);
})

// get user's saved shows+services
router.get('/getAll', userController.getUserShows, (req, res) => {
    res.status(200).json(res.locals);
});

router.delete('/deleteShow', userController.deleteShow, (req, res) => {

})

module.exports = router;
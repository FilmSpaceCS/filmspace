const express = require('express');
const mediaController = require('../controllers/mediaController.js');

const router = express.Router();

// get streaming platforms from API
router.get('/show', mediaController.getServices, (req, res) => {
    res.status(200).json(res.locals);
});

// add show+platform+user to DB
router.post('/add', mediaController.addShow, (req, res) => {
    res.status(200);
})

module.exports = router;
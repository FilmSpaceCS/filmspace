const db = require('../models/filmspaceModel.js');
const bcrypt = require('bcrypt');

const userController = {};
const hashRounds = 10;



userController.signUp = (req, res, next) => {
    const { username, password } = req.body;
    let hashedPass;

    bcrypt.hash(password, saltRounds, (err, hash) => {
        hashedPass = hash;
    })

    const queryStr = 'INSERT INTO users (username, password) VALUES ($1, $2);'
    const params = [username, hashedPass];

    db.query(queryStr, params)
        .then(data => {
            res.locals.data = data;
            return next();
        })
        .catch(error => {
            return next(error);
        })
}

userController.login = (req, res, next) => {
    const { username, password } = req.body;

    const queryStr = 'SELECT password FROM users WHERE username = $1 LIMIT 1;';
    const params = [username];
    
    db.query(queryStr, params)
        .then(data => {
            let success = false;
            bcrypt.compare(password, data, (err, result) => {
                res.locals.hashResult = result;
                return next();
            });
        })
        .catch(error => {
            return next(error)
        })
}

module.exports = userController;
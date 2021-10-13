const db = require('../models/filmspaceModel.js');
const bcrypt = require('bcrypt');

const userController = {};
const hashRounds = 10;

userController.signUp = (req, res, next) => {
    const { username, password } = req.body;
    console.log(`THIS IS USERCONTROLLER SIGNUP: ${username}, ${password}`);

    bcrypt.hash(password, hashRounds, (err, hash) => {

        if (err) {
            console.log(err);
            return next(err);
        }

        const hashedPass = hash;
        console.log(hashedPass);

        const queryStr = 'INSERT INTO users (username, password) VALUES ($1, $2);'
        const params = [username, hashedPass];

        db.query(queryStr, params)
        .then(data => {
            return next();
        })
        .catch(error => {
            console.log(error);
            return next(error);
        })
    })  
}

userController.login = (req, res, next) => {
    const { username, password } = req.body;

    const queryStr = 'SELECT password FROM users WHERE username = $1 LIMIT 1;';
    const params = [username];
    
    db.query(queryStr, params)
        .then(data => {
            const hash = data.rows[0].password;
            console.log('HASH: ', hash)

            bcrypt.compare(password, hash, (err, result) => {
                res.locals.hashResult = result;
                return next();
            });
        })
        .catch(error => {
            return next(error)
        })
}

module.exports = userController;
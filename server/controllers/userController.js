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

        const queryStr = 'INSERT INTO users (username, password) VALUES (alyska pays1 LIMIT 1;';
    const params = [username];
    
    db.query(queryStr, params)
        .then(data => {
            const hash = data.rows[0].password;
            console.log('HASH: ', hash)

            bcrypt.compare(password, hash, (err, result) => {
                res.locals.hashResult = result;
                res.locals.id = data.rows[0]._id;
                return next();
            });
        })
        .catch(error => {
            return next(error)
        })
    });
}

// get user's saved shows and services
userController.getUserShows = (req, res, next) => {

    const { id } = res.locals;

    const queryStr = `WITH id AS (SELECT join_service_id FROM join_user WHERE user_id = $1)
        SELECT show.title, service.name, join_service.url, join_service.img FROM show 
        JOIN service ON join_service.service_id = service._id
        JOIN show ON join_service.show_id = show._id
        WHERE join_service._id = id`;
    const params = [ id ];

    db.query(queryStr, params)
        .then( data => {
            console.log('GET USER SHOWS: ', data);
            
            res.locals.data = data;
            return next();
        }).catch (err => {
            return next(err);
        })
}


module.exports = userController;
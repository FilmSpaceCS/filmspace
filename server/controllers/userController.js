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

        const queryStr = 'INSERT INTO users (username, password) VALUES ($1, $2) LIMIT 1;';
        const params = [username, hashedPass];
        
        db.query(queryStr, params)
            .then(data => {
                const hash = data.rows[0].password;

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

// get user's saved shows and services
userController.getUserShows = (req, res, next) => {

    const { id } = res.locals;
    const queryStr = `SELECT show.title, service.name, join_service.url, service.img FROM join_user
        INNER JOIN join_service ON join_service._id = join_user.join_service_id
        INNER JOIN show ON show._id = join_service.show_id
        INNER JOIN service ON service._id = join_service.service_id
        WHERE join_user.user_id = $1;`;

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
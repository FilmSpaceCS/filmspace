const fs = require('fs');

const db = require('../models/filmspaceModel.js');
const response = require('../../friendsQuery.json');


const mediaController = {};

// get services for a show from API
mediaController.getServices = (req, res, next) => {
    const { showName } = req.body;

    const results = fs.readFileSync(response, 'utf8');
    res.locals.locs = results.results[0].locations;
};

// add show+platform+user to DB
mediaController.addShow = (req, res, next) => {
    const { user_id, show, service, url, img } = req.body;
    const queryStr = 'SELINSERT INTO shows () VALUES ()'
    db.query(queryStr)
        .then(data => {
            console.log('successfully inserted show')
    })
        .catch(err => {
            console.log(err);
            return next(err);
    })
}


module.exports = mediaController;
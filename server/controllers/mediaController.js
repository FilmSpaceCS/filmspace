const fs = require('fs');
const dotenv = require('dotenv');
const axios = require("axios");
const path = require('path');
dotenv.config();

const db = require('../models/filmspaceModel.js');
const response = require('../../friendsQuery.json');


const mediaController = {};

// get services for a show from API
mediaController.getServices = (req, res, next) => {
    const { showName } = req.body;

    // const options = {
    //     method: 'GET',
    //     url: 'https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup',
    //     params: {term: 'bojack', country: 'us'},
    //     headers: {
    //         'x-rapidapi-host': process.env.apiHost,
    //         'x-rapidapi-key': process.env.apiKey
    // }
    // };

    // axios.request(options).then(function (response) {
    //     console.log(response.data);
    // }).catch(function (error) {
    //     console.error(error);
    // });

    const results = JSON.parse(fs.readFileSync(path.resolve(__dirname,'../../friendsQuery.json'), 'utf8'));
    console.log('GET SERVICES: ', results);
    
    res.locals.locs = results.results[0].locations;
    res.locals.name = results.results[0].name;

    return next();
};

// add show+platform+user to DB
mediaController.addShow = (req, res, next) => {
    console.log('ADD SHOW REQ.BODY: ', req.body);
    const { userId, show, service, url, img } = req.body;
    const params = [userId, show, service, url, img];


    const queryArr = [`INSERT INTO show (title) VALUES ($1) ON CONFLICT (title) DO UPDATE SET title = $1 RETURNING _id;`,    // one query to insert show, returning showid
    `INSERT INTO service (name, img) VALUES ($1, $2) ON CONFLICT (name) DO UPDATE SET name = $1 RETURNING _id;`,    // one query to insert service, returning serviceid
    `INSERT INTO join_service (show_id, service_id, url) VALUES ($1, $2, $3) RETURNING _id;`,    // one query to insert join_service, returning join_serviceid
    `INSERT INTO join_user (user_id, join_service_id) VALUES ($1, $2);`    // one query to insert join_user, done
    ];

    db.query(queryArr[0], [params[1]]) //get the show_id
        .then( data => {
            console.log('querying')
            params.push(data.rows[0]._id); // push show_id to slot #6
            db.query(queryArr[1], [params[2], params[4]]) // get service_id

        .then( data => {

            params.push(data.rows[0]._id); // push service_id to slot #7
            db.query(queryArr[2], [params[5], params[6], params[3]]) // get join_service_id

        .then( data => {

            params.push(data.rows[0]._id); // push join_service_id to slot #8
            db.query(queryArr[3], [params[0], params[7]]) // finish with join_user

        .then( data => {
            //done
            return next();

        });});});
    })
        .catch(err => {
            console.log(err);
            return next(err);
    });
};


module.exports = mediaController;
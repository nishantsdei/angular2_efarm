const express = require('express');
const router = express.Router();
var userDB = require('../models/user.js');
var bcrypt = require('bcrypt');

/**
* @swagger
* /:
*   get:
*     description: Returns the API information
*     tags: [Default]
*     responses:
*       200:
*         description: API is working.
*         schema:
*           type: object
*/
router.get('/', (req, res) => {
  res.json({message: 'api works'});
});

/**
* @swagger
* tags:
*   - name: Default
*     description: 
*/

/**
* @swagger
* tags:
*   - name: Authentication
*     description: verifying the identity of a user.
*/

/**
* @swagger
* /login:
*   post:
*     description: Login to the application
*     tags: [Authentication]
*     produces:
*       - application/json
*     parameters:
*       - name: username
*         description: Username to use for login.
*         in: formData
*         required: true
*         type: string

*       - name: password
*         description: User's password.
*         in: formData
*         required: true
*         type: string
*     responses:
*       200:
*         description: login
*         schema:
*           type: object
*/
router.post('/login', function(req, res) {
    try {
        var email = req.body.username;
        var password = req.body.password;
        var filter = {
            email: email        
        }
        userDB.findOne(filter, function(err, user) {
            if (!user) {
                return res.status(400).send({ "message": "EmailID not found" });
            } else if(bcrypt.compareSync(password, user.password)) {
                return res.status(200).send(user);
            } else {
            	return res.status(400).send({ "message": "Password not Matched" });
            }
        })
    } catch (err) {

    }
});





/**
* @swagger
* /register:
*   post:
*     description: register to the application
*     tags: [Authentication]
*     produces:
*       - application/json
*     parameters:
*       - name: username
*         description: Username to use.
*         in: formData
*         required: true
*         type: string

*       - name: password
*         description: password to use.
*         in: formData
*         required: true
*         type: string
*     responses:
*       200:
*         description: register
*         schema:
*           type: object
*/
router.post('/register', function(req, res) {
    try {
        const body = req.body;
        if (!body.firstName) return res.status(400).send({ "message": "First name is required" });
        if (!body.lastName) return res.status(400).send({ "message": "Last name is required" });
        if (!body.email) return res.status(400).send({ "message": "Email is required" });
        if (!body.password) return res.status(400).send({ "message": "Password is required" });
        if (body.password != body.confirmPassword) return res.status(400).send({ "message": "Password and confirm Password Not Matched" });
        userDB.findOne({ "email": body.email }, function(err, user) {
            if (user) {
                return res.status(400).send({ "message": "User already exists" });
            } else {
                userDB.create(body, function(err, result) {
                    if (err) return res.status(401).send(err);
                    res.status(200).send(result);
                })
            }
        })
    } catch (err) {
        console.log("err", err)
    }
});



module.exports = router;

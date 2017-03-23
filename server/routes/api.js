const express = require('express');
const router = express.Router();

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

    var email = req.body.email;
   	var password = req.body.password;

    if( (email == 'admin' && password == '12345')){
        res.status(200).send({message: "login Successful", login: true});
    }else{
        res.status(400).send({message: "login Error", login: false})
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

    var username = req.body.username;
    var password = req.body.password;

    if( (username == 'admin')){
        res.json({message: "username already registered.", data: req.body});
    }else{
        res.json({message: "user registered Successfully.", data: req.body});
    }    
});

module.exports = router;

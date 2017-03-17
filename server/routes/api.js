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
    res.json(req.body);
});

module.exports = router;

// Get dependencies
const express    = require('express');
const path       = require('path');
const http       = require('http');
const bodyParser = require('body-parser');

/* Swagger Configuration */
const swaggerUi       = require('swagger-ui-express');
var swaggerJSDoc 	  = require('swagger-jsdoc');

// Get our API routes
const api = require('./server/routes/api');

const app = express();

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

// Set our api routes
app.use('/api', api);

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3000';
app.set('port', port);

var defaultUrl = 'localhost:'+port
var swaggerDefinition = {
    info: { // API informations (required)
        title: 'eFarm API Documentation', // Title (required)
        version: '1.0.0', // Version (required)
        description: 'API Documentation', // Description (optional)
    },
    host:  defaultUrl, // Host (optional)
    basePath: '/api', // Base path (optional)
};

// Options for the swagger docs
var options = {
    // Import swaggerDefinitions
    swaggerDefinition: swaggerDefinition,
    // Path to the API docs
    apis: ['./server/routes/api.js'],
};


var swaggerSpec = swaggerJSDoc(options);

app.get('/swagger.json', function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
});


app.use('/documentation', swaggerUi.serve, swaggerUi.setup(swaggerSpec));


// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});


/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on http://localhost:${port}`));
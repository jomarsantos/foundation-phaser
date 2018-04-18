// Config
const configFile = require('./config.json')
const env = configFile.environment;
const config = configFile[env];

// Init express app
const express = require('express');
const path = require("path");
const app = express();

// Routes
app.get('/',function(req, res) {
	res.sendFile(path.join(__dirname, '/client/index.html'));
});
app.use('/', express.static(path.join(__dirname, '/client')));

// Start server
const server = app.listen(config.port, function() {
  console.log('INFO: Server started on port ' + config.port);
});

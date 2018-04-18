// Config
const configFile = require('./config.json')
const env = configFile.environment;
const config = configFile[env];

// Init express app
const express = require('express');
const app = express();

// Routes
app.get('/',function(req, res) {
	res.sendFile(__dirname + '/client/index.html');
});
app.use('/client', express.static(__dirname + '/client'));

// Start server
const server = app.listen(config.port, function() {
  console.log('INFO: Server started on port ' + config.port);
});

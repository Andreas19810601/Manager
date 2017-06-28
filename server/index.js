/* eslint consistent-return:0 

else {
		res.send({
			user: {
				name: 'error',
				role: 'ADMIN',
			},
			successful: false
		});
	}

	let übergabe = JSON.stringify(req.body.name);
	if (übergabe == 'jk') {
*/

const express = require('express');
const logger = require('./logger');

const argv = require('minimist')(process.argv.slice(2));
const setup = require('./middlewares/frontendMiddleware');
const isDev = process.env.NODE_ENV !== 'production';
const ngrok = (isDev && process.env.ENABLE_TUNNEL) || argv.tunnel ? require('ngrok') : false;
const resolve = require('path').resolve;
const app = express();
const bodyParser = require('body-parser');

// If you need a backend, e.g. an API, add your custom backend-specific middleware here
// app.use('/api', myApi);
//app.use('/api/login',bodyParser.json());

app.use(bodyParser.json());

const userDb = [
	{
		username: 'jk',
		password: 'pass',
		displayName: 'Jurij Koch'
	},
	{
		username: 'af',
		password: 'pass',
		displayName: 'Andreas Franck'
	}
];






app.post('/api/login', function (req, res) {
	//console.log(req.body);
	for (i = 0; i < userDb.length; ++i) {
		if (userDb[i].username == req.body.username && userDb[i].password == req.body.password) {
			res.send({
				user: {
					userName: userDb[i].username,
					displayName: userDb[i].displayName,
					role: 'ADMIN',
				},
				successful: true
			})
			return;
		}
	}
	res.send({
		successful: false
	});
});

// app.post('/api/login', function (req, res) {
// 	//console.log(req.body);
// 	if('jk'==req.body.username){
// 		res.send({
// 			user: {
// 				userName: 'jk',
// 				displayName: 'Jurij Koch',
// 				role: 'ADMIN',
// 			},
// 			successful: true
// 		});
// 		return;
// 	}

// 	res.send({
// 		successful: false
// 	});
// });

// In production we need to pass these values in instead of relying on webpack
setup(app, {
	outputPath: resolve(process.cwd(), 'build'),
	publicPath: '/',

});



// get the intended host and port number, use localhost and port 3000 if not provided
const customHost = argv.host || process.env.HOST;
const host = customHost || null; // Let http.Server use its default IPv6/4 host
const prettyHost = customHost || 'localhost';

const port = argv.port || process.env.PORT || 3000;

// Start your app.
app.listen(port, host, (err) => {
	if (err) {
		return logger.error(err.message);
	}

	// Connect to ngrok in dev mode
	if (ngrok) {
		ngrok.connect(port, (innerErr, url) => {
			if (innerErr) {
				return logger.error(innerErr);
			}

			logger.appStarted(port, prettyHost, url);
		});
	} else {
		logger.appStarted(port, prettyHost);
	}
});

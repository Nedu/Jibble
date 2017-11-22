var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var request = require("request");
var mcache = require('memory-cache');
var throttledRequest = require('throttled-request')(request);

//This will throttle the requests so no more than 5 are made 
// every second 

throttledRequest.configure({
 requests: 5,
 milliseconds: 1000
});

// Caching
var cache = (duration) => {
	return (req, res, next) => {
	  let key = '__express__' + req.originalUrl || req.url
	  let cachedBody = mcache.get(key)
	  if (cachedBody) {
		res.send(cachedBody)
		return
	  } else {
		res.sendResponse = res.send
		res.send = (body) => {
		  mcache.put(key, body, duration * 1000);
		  res.sendResponse(body)
		}
		next()
	  }
	}
}

app.use(function(req, res, next) {
if (req.method !== 'OPTIONS' && req.headers['authorization'] !== 'Bearer af24353tdsfw') {
	res.statusCode = 501;
	return next(new Error('Please provide  authorization'));
}
res.statusCode = 200;
return next();
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

var postRoutes = require("./api/routes/posts");
var collectionRoutes = require("./api/routes/collections");

app.use("/api", postRoutes);
app.use("/api", collectionRoutes);

app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// Tell Express to listen for requests (start server)
app.listen(3000, function () {
	console.log("Server has started");
})
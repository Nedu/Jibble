var express = require("express");
var router = express.Router();
var request = require("request");
var cors = require('cors');

// INDEX - show all posts
router.get("/posts", function(req, res){
    const options = {  
        url: 'https://jsonplaceholder.typicode.com/posts',
        headers: {
            'User-Agent': 'request',
            'Accept': 'application/json',
            'Accept-Charset': 'utf-8',
            'Authorization': 'Bearer' + 'af24353tdsfw'
            
        }
    };
	request(options, function(error, response, body){
		if(!error && response.statusCode == 200) {
            var data = JSON.parse(body);
            res.send(data);
            console.log('Status:', response.statusCode);
		} else {
            res.status(501).send('Something went wrong, ERROR: ' + error + " STATUS CODE: " + response.statusCode);
        }
	})
})

// CREATE - add new post
router.post("/posts", function(req, res) {
	const options = {  
        url: 'https://jsonplaceholder.typicode.com/posts',
        body: req.body,
        method: 'POST',
        json: true,
        headers: {
            'User-Agent': 'request',
            'content-type': 'application/json',
            'Accept-Charset': 'utf-8',
            'Authorization': 'Bearer ' + 'af24353tdsfw'
            
        }
    };
	request(options, function(error, response, body){
		if(!error) {
            var data = JSON.stringify(body);
            res.send(data);
            console.log(data);
            console.log('Status:', response.statusCode);
		} else {
            res.status(501).send('Something went wrong, ERROR: ' + error + " STATUS CODE: " + response.statusCode);
        }
	})
});


// SHOW - shows more info about one post 
router.get('/posts/:id', function(req, res){
    var id = req.params.id;    
	const options = {  
        url: 'https://jsonplaceholder.typicode.com/posts/' + `${id}`,
        headers: {
            'User-Agent': 'request',
            'Accept': 'application/json',
            'Accept-Charset': 'utf-8',
            'Authorization': 'Bearer ' + 'af24353tdsfw'
            
        }
    };
	request(options, function(error, response, body){
		if(!error && response.statusCode == 200) {
            var data = JSON.parse(body);
            res.send(data);
            console.log('Status:', response.statusCode);
		}
	})
});


// UPDATE POST
router.put("/posts/:id", function(req, res) {
    var id = req.params.id;
	const options = {  
        url: 'https://jsonplaceholder.typicode.com/posts/' + `${id}`,
        body: req.body,
        method: 'PUT',
        json: true,
        headers: {
            'User-Agent': 'request',
            'content-type': 'application/json',
            'Accept-Charset': 'utf-8',
            'Authorization': 'Bearer ' + 'af24353tdsfw'
            
        }
    };
	request(options, function(error, response, body){
		if(!error) {
            var data = JSON.stringify(body);
            res.send(data);
            console.log(data);
            console.log('Status:', response.statusCode);
		} else {
            res.status(501).send('Something went wrong, ERROR: ' + error + " STATUS CODE: " + response.statusCode);
        }
	})
});

// DESTROY CAMPGROUND ROUTE
router.delete("/posts/:id", function(req, res) {
    var id = req.params.id;
	const options = {  
        url: 'https://jsonplaceholder.typicode.com/posts/' + `${id}`,
        method: 'DELETE',
        headers: {
            'User-Agent': 'request',
            'Accept': 'application/json',
            'Accept-Charset': 'utf-8',
            'Authorization': 'Bearer ' + 'af24353tdsfw'
            
        }
    };
	request(options, function(error, response, body){
		if(!error && response.statusCode == 200) {
            res.send("DELETED");
            console.log('Status:', response.statusCode);
		}
	})
});

var corOption = {
    optionsSuccessStatus: 200
};


router.use(cors(corOption));

module.exports = router;
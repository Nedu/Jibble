var express = require("express");
var router = express.Router();
var request = require("request");

// COLLECTION ROUTE
router.get("/collection", function(req, res){
    var requests = [{  
        url: 'https://jsonplaceholder.typicode.com/posts',
        method: 'GET',
        headers: {
            'User-Agent': 'request',
            'Accept': 'application/json',
            'Accept-Charset': 'utf-8',
            'Authorization': 'Bearer' + 'af24353tdsfw'
            
        }
    }, {
        url: 'https://jsonplaceholder.typicode.com/albums',
        method: 'GET',
        headers: {
            'User-Agent': 'request',
            'Accept': 'application/json',
            'Accept-Charset': 'utf-8',
            'Authorization': 'Bearer' + 'af24353tdsfw'            
        }
    }, {
        url: 'https://jsonplaceholder.typicode.com/users',
        method: 'GET',
        headers: {
            'User-Agent': 'request',
            'Accept': 'application/json',
            'Accept-Charset': 'utf-8',
            'Authorization': 'Bearer' + 'af24353tdsfw'
            
        }
    }];

    Promise.all(requests, function(obj){
        return request(obj).then(function(body){
            return JSON.parse(body);
        });
    })
    .then(results => {
        let [posts, albums, users] = results;
        return res.json({
            posts: posts.data,
            albums: albums.data,
            users: users.data
        });
    })
    .catch(err => {
        return res.status(500).send(err);
    });
})

module.exports = router;
var express = require("express");
var router = express.Router();
var request = require("request-promise-native");

// COLLECTION ROUTE
router.get("/collection", async(req, res, next) => {
    try {
        let randomArray = (arr) => arr.sort(() => .5 - Math.random() );
        const [posts, albums, users] = await Promise.all([
            request.get({  
                url: 'https://jsonplaceholder.typicode.com/posts',
                method: 'GET',
                json: true,
                headers: {
                    'User-Agent': 'request',
                    'Accept': 'application/json',
                    'Accept-Charset': 'utf-8',
                    'Authorization': 'Bearer' + 'af24353tdsfw' 
                }   
            }),
            request.get({
                url: 'https://jsonplaceholder.typicode.com/albums',
                method: 'GET',
                json: true,
                headers: {
                    'User-Agent': 'request',
                    'Accept': 'application/json',
                    'Accept-Charset': 'utf-8',
                    'Authorization': 'Bearer' + 'af24353tdsfw'            
                }
            }),
            request.get({
                url: 'https://jsonplaceholder.typicode.com/users',
                method: 'GET',
                json: true,
                headers: {
                    'User-Agent': 'request',
                    'Accept': 'application/json',
                    'Accept-Charset': 'utf-8',
                    'Authorization': 'Bearer' + 'af24353tdsfw'
                }
            })
        ]);
        const aggr = [];

        for (let i = 0; i < 30; i++) {
            aggr.push({
            post: posts[i % posts.length],
            album: albums[i % albums.length],
            user: users[i % users.length]
            });
        }
        randomArray(aggr);
        return res.status(200).send(aggr);
    } catch  (e){
        return next(e);
    }
})

module.exports = router;
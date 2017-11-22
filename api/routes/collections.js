var express = require("express");
var router = express.Router();
var request = require("request");

function getPosts() {
    return request.get('http://jsonplaceholder.typicode.com/posts');
}

function getAlbums() {
    return request.get('http://jsonplaceholder.typicode.com/albums');
}
function getUsers() {
    return request.get('http://jsonplaceholder.typicode.com/users');
}

// Colle
router.get("/collection", function(req, res){
    var collect = function (req, res, next) {
        Promise.all([
                getPosts(),
                getAlbums(),
                getUsers()
            ])
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
            })
        }
    collect();
})

module.exports = router;
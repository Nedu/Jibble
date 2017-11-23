# Instructions
Build a nodejs server based on any Framework you like. It will act as an API server providing a set of CRUD endpoints as well as an aggregation one. You will use https://jsonplaceholder.typicode.com/ as a datasource and more specifically the following 3 resources.

/posts
/users
/albums


All endpoints must be behind an /api/ prefix/. The CRUD routes are only applicable to the posts resource while the aggregated one, which should be called /collection, is a simple GET method.

Every endpoint must be protected by an Auth layer and only reply 200 when the 'Authorization' header is present in every request. The value of the header should be a token of 'Bearer af24353tdsfw' and if it's missing or invalid the server response must be a 501.
The /collection route is aggregating all 3 resources returning a collection of only 30 items each of which should contain random items from each resource, finally looking something like this
"post" : {...},

"album" : {...}

"user" : {...}

},

...

]

We do not care about the extra items remaining from each resource.
Finally, add a provision for caching and request throttling. Do not implement them, just provide a skeleton interface that if it where to be implemented these 2 features would work out of the box.

Some tips:

* Use any nodejs framework you like or not, up to you
* Provide instructions on how to install-run your server as well as how to test it
* Focus on future-proofing your code

You get bonus points for:
* Using Typescript or ES6
* Using TDD
* Providing good documentation

## Installation
1. Clone the repository
2. Change the directory to ```Jibble```
3. Run ```npm install``` to install node dependencies.

## Usage
 Run ```npm start``` and then navigate to ```localhost:3000``` to view the application


/* Lab 6 Q's & A's:
 * Exercise 6.1
 * a. Identify the request methods that you can and can’t test using the two tools listed above. If a method cannot be testing using a particular tool, explain why this is the case. List the Curl commands you used successfully.  
 * 
 * ANSWER:
 * Chrome developer tools, without the aid of any additional extensions, can only
 * show requests and responses based on the elements a browser can normally interact  
 * with.  For example, if you navigate to any URL, you can see the GET request in action, 
 * and if there is a form with POST, PUT, and DELETE features, the developer tools will
 * show those requests and the responses being made.
 * 
 * As for Curl, HEAD produced a "bad range" response, and it also printed out the Hello, * Express Route! message. I was able to successfully test GET at any URL, but of course 
 * I needed to specifically be on localhost:3000/user to get a good response to PUT, 
 * POST, and DELETE. Amusingly, LISTEN gives a response too, but the response code is 
 * empty.
 * 
 * b. What is the most appropriate HTTP response code for pages that aren’t defined by an Express route?
 * 
 * ANSWER:
 * I would say your run-of-the-mill 404 NOT FOUND would be best for that.
 * 
 * Exercise 6.1
 * a. What HTTP methods do forms support?
 * 
 * ANSWER:
 * PUT, POST, AND DELETE.
 * 
 * b. How is the form data being passed back to the server and what syntactic form does it take? Is the data modified in any way?
 * 
 * ANSWER: 
 * The form data is being passed to the server as an HTTP request, in javascript I guess?
 * There isn't really anything to modify, but using cookie/set does create a cookie file.
 * 
 *
 * This implements some HTTP method/code, form and cookie examples.
 */

const express = require('express')
const app = express();
const http_status = require('http-status-codes');
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

const HOST = "localhost";
const PORT = 3000;

var HttpStatus = require('http-status-codes');

// var statusCodes = {};

// // app.all('/', function (request, response) {
// //     response.status(HttpStatus.OK)
// //     response.send('ok');
// // });
// //     response
// //         .status(HttpStatus.INTERNAL_SERVER_ERROR)
// //         .send({
// //             error: HttpStatus.getStatusText(HttpStatus.INTERNAL_SERVER_ERROR)
// //         });

//     // response.status(HttpStatus.NOT_FOUND)
//     // response.send(error: HttpStatus.getStatusText(HttpStatus.NOT_FOUND))
// // });   
// // });

// statusCodes[exports.NOT_FOUND = 404] = "Not Found";

exports.getStatusText = function(statusCode) {
    if (statusCodes.hasOwnProperty(statusCode)) {
        return statusCodes[statusCode];
    } else {
        throw new Error("Status code does not exist: " + statusCode);
    }
};

// app.get('/', function (req, res) {
//     var client = redis.createClient();
//     client.ping(function (err, msg) {
//         if (err) {
//             return res.send(HTTPStatus.INTERNAL_SERVER_ERROR);
//         }
//         res.send(msg, HTTPStatus.OK);
//     });
// });

app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

// --------------------------------
// HTTP route and return code examples.

// This responds to GET requests for a hello message.
app.get('/', function(req, res) {
    res.send("Hello, Express route!");
});

// This rejects access to this "lost" resource.
app.get('/lost', function(req, res) {
    res.sendStatus(http_status.NOT_FOUND);
});

// --------------------------------
// HTTP form example

// Responds to form posts from the forms/index.html example.
app.post('/forms', function(req, res) {
    res.send('Hello, form POST!<br>Posted message: <code>'
	     + req.body.user_message + '</code>');
});

// --------------------------------
// HTTP cookies examples

// This implements routes to list/create/delete cookies.
app.get("/cookies", function(req, res) {
    let cookieMessage = 'cookieName not set...';
    if (req.cookies.cookieName) {
        cookieMessage = "cookieName: " + req.cookies.cookieName;
    }
    res.send("Hello, cookies!<br> " + cookieMessage);
});

app.get("/cookies/set", function(req, res) {
    res.cookie("cookieName", "cookieValue")
    res.send("Cookie is set.");
});

app.get("/cookies/clear", function(req, res) {
    res.clearCookie("cookieName");
    res.send("Cookie is deleted.");
});

app.post('/', function (req, res) {
  res.send('Got a POST request');
});

app.put('/user', function (req, res) {
  res.send('Got a PUT request at /user');
});

app.delete('/user', function (req, res) {
  res.send('Got a DELETE request at /user');
});

app.all('*', function(req, res) {
    res.sendStatus(http_status.NOT_FOUND);
});

app.listen(PORT, HOST, () => {
    console.log("listening on " + HOST + ":" + PORT + "...");
});


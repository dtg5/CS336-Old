/**
 * This file provided by Facebook is for non-commercial testing and evaluation
 * purposes only. Facebook reserves all rights not expressly granted.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
 * FACEBOOK BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
 * ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

var fs = require('fs');
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

//lab 10
var MongoClient = require('mongodb').MongoClient
var db;

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//              Remember to mask password!
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
MongoClient.connect('mongodb://cs336:bjarne@ds041939.mlab.com:41939/cs336_lct6', function (err, dbConnection) {
  if (err) throw err

   db = dbConnection; 
})


app.set('port', (process.env.PORT || 3000));

var APP_PATH = path.join(__dirname, 'dist');
app.use('/', express.static(APP_PATH));
//app.use('/', express.static(path.join(__dirname, 'dist')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Additional middleware which will set headers that we need on each request.
app.use(function(req, res, next) {
    // Set permissive CORS header - this allows this server to be used only as
    // an API server in conjunction with something like webpack-dev-server.
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Disable caching so we'll always get the latest comments.
    res.setHeader('Cache-Control', 'no-cache');
    next();
});


//COMMENTS
app.get('/api/comments', function(req, res) {
    db.collection("VGScomments").find({}).toArray(function(err, docs) {
        if (err) throw err;
        res.json(docs);
    });
});

//EVENTS
app.get('/api/events', function(req, res) {
    db.collection("VGSevents").find({}).toArray(function(err, docs) {
        if (err) throw err;
        res.json(docs);
    });
});

//COMMENTS
app.post('/api/comments', function(req, res) {
    var newComment = {
        id: Date.now(),
        author: req.body.author,
        text: req.body.text,
    };
    db.collection("VGScomments").insertOne(newComment, function(err, result) {
        if (err) throw err;
        var newId = result.insertedId;
        db.collection("VGScomments").find({}).toArray(function(err, docs) {
            if (err) throw err;
            res.json(docs);
        });
    });
});

//EVENTS
app.post('/api/events', function(req, res) {
    var newEvent = {
        id: Date.now(),
        title: req.body.title,
        startDate: req.body.startDate,
        description: req.body.description,
        time: req.body.time,
    };
    db.collection("VGSevents").insertOne(newEvent, function(err, result) {
        if (err) throw err;
        var newId = result.insertedId;
        db.collection("VGSevents").find({}).toArray(function(err, docs) {
            if (err) throw err;
            res.json(docs);
        });
    });
});

//Get, put, delete with id COMMENTS
app.get('/api/comments/:id', function(req, res) {
    db.collection("VGScomments").find({"id": Number(req.params.id)}).toArray(function(err, docs) {
        if (err) throw err;
        res.json(docs);
    });
});

app.put('/api/comments/:id', function(req, res) {
    var updateId = Number(req.params.id);
    var update = req.body;
    db.collection('VGScomments').updateOne(
        { id: updateId },
        { $set: update },
        function(err, result) {
            if (err) throw err;
            db.collection("VGScomments").find({}).toArray(function(err, docs) {
                if (err) throw err;
                res.json(docs);
            });
        });
});

app.delete('/api/comments/:id', function(req, res) {
    db.collection("VGScomments").deleteOne(
        {'id': Number(req.params.id)},
        function(err, result) {
            if (err) throw err;
            db.collection("VGScomments").find({}).toArray(function(err, docs) {
                if (err) throw err;
                res.json(docs);
            });
        });
});

//Get, put, delete with id EVENTS
app.get('/api/events/:id', function(req, res) {
    db.collection("VGSevents").find({"id": Number(req.params.id)}).toArray(function(err, docs) {
        if (err) throw err;
        res.json(docs);
    });
});

app.put('/api/events/:id', function(req, res) {
    var updateId = Number(req.params.id);
    var update = req.body;
    db.collection('VGSevents').updateOne(
        { id: updateId },
        { $set: update },
        function(err, result) {
            if (err) throw err;
            db.collection("VGSevents").find({}).toArray(function(err, docs) {
                if (err) throw err;
                res.json(docs);
            });
        });
});

app.delete('/api/events/:id', function(req, res) {
    db.collection("VGSevents").deleteOne(
        {'id': Number(req.params.id)},
        function(err, result) {
            if (err) throw err;
            db.collection("VGSevents").find({}).toArray(function(err, docs) {
                if (err) throw err;
                res.json(docs);
            });
        });
});

app.use('*', express.static(APP_PATH));


app.listen(app.get('port'), function() {
    console.log('Server started: http://localhost:' + app.get('port') + '/');
});

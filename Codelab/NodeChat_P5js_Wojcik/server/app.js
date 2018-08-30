
// npm imports
var express     = require('express');
var http        = require('http');
var socketio    = require('socket.io');

// web server app
var app     = express();
var server  = http.createServer(app);
var io      = socketio(server);

// web server meta
var webroot     = __dirname + '/../client/';
var port        = 3000;

// static hosting
app.use('/', express.static(webroot));

// run the server
server.listen(port, function () {
    console.log('hosting from ' + webroot);
    console.log('ready to serve on http://10.10.98.211:' + port + '/');
});

// for each connected web socket

var users = [];
var dict = {};

io.sockets.on('connection', function (socket) {
    console.log("connected");
    dict["User " + socket.id] = { 
        userID : socket.id,
        userColor : randomColor
    };
  
    console.log(dict);
    socket.emit('start', dict["User " + socket.id]);
    var message = { text : 'Hello!' };
    socket.emit('welcome', message);
    
    socket.on('user', function (name) {
        console.log(name + ' connected\nusers: ' + (users.length + 1)); // log the connection
        users.push(name); // store the user in an array
        socket.user = name; // store the user on the socket
        socket.broadcast.emit('otherUserConnect', name); //broadcast the event
    });
    
    socket.on('disconnect', function() {
        if(!socket.user) 
            return;
        if(users.indexOf(socket.user) > -1) { 
        users.splice(users.indexOf(socket.user), 1); 
        socket.broadcast.emit('otherUserDisconnect', socket.user); 
        console.log(socket.user + ' disconnected\nusers: ' + (users.length + 1)); 
        }
    });
    
    socket.on('message', function(data) {
        var message = {
            user: socket.user,
            message: data
        };
        io.sockets.emit('message', message);
        console.log(socket.user + ': ' + data);
    });
    
    socket.on('mouse',function(data) {

    var info = {};
    for(var key in dict) {
        if (dict[key].userID == data.sender) { 
            info = {
                x : data.x,
                y : data.y 
            }
        }
    }
        socket.broadcast.emit('mouse', circleData);
    });
});


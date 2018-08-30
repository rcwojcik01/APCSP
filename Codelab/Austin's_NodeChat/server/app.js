// npm imports
var express   = require('express');
var http      = require('http');
var socketio  = require('socket.io');

//web server app
var app       = express();
var server    = http.createServer(app);
var io        = socketio(server);

// web server meta
var webroot   = __dirname + '/../client/';
var port      = 3000;

// static hosting
app.use('/', express.static(webroot));

// run the server
server.listen(port, function() {
    console.log('hosting from ' + webroot);
    console.log('ready to serve http://10.10.100.81:' + port + '/');
});
 
var users = []; //Create array for chat users
var dict = {}; //Create dictionary for drawing users
var randomColor = []; //Create an array for the r, g, b values of a color that will be generated later

// for each connected web socket
io.sockets.on('connection', function(socket) {
    //Generate random RGB values and add to randomColor array
    randomColor = [Math.floor(Math.random() * 255),Math.floor(Math.random() * 255),Math.floor(Math.random() * 255)];
    // add user to the list with each user's own dictionary with their ID and color
    dict["User " + socket.id] = { 
        userID : socket.id,
        userColor : randomColor
    };
    // log the dictionary to see the connected users each time they connect
    console.log(dict);
    //send the information of a new user to the clients
    socket.emit('start', dict["User " + socket.id]);
    
    // create object for message text
    var message = { text : 'Hello!' };
    // send the message to clients
    socket.emit('welcome', message);
    
    // when a user signs into the name box
    socket.on('user', function (name) {
        users.push(name); // store the user in an array
        console.log(name + ' connected\nusers: ' + users.length ); // log the connection
        socket.user = name; // store the user on the socket
        socket.broadcast.emit('otherUserConnect', name); // broadcast the event
        
    });
    
    // when a user disconnects
    socket.on('disconnect', function() {
        delete dict["User " + socket.id]; // remove user from dictionary
        console.log(dict); // log the dictionary
        
        
        if (!socket.user) // make sure socket has a user before proceeding
            return;
        
        if(users.indexOf(socket.user) > -1) { // otherwise this could be null
            users.splice(users.indexOf(socket.user), 1); // remove user from array
            socket.broadcast.emit('otherUserDisconnect', socket.user); // broadcast the change
            console.log(socket.user + ' disconnect\nusers: ' + users.length); // log it  
        }
    });
    
    // when a client sends a message
    socket.on('message', function(data) {
        var message = { // create message object with user id and message
            user : socket.user,
            message : data
        };
        io.sockets.emit('message', message); // send the message to clients
        console.log(socket.user + ': ' + data); // log the user and their message
    });
    
    // when a client hits the clear button
    socket.on('clear', function(data) {
       io.sockets.emit('clear', true); // tell the clients to clear the screen
    });
    
    // when a draws on the screen
    socket.on('mouse',
      function(data) {
        
        // create an info object for the users color and position
        var info = {};
        for(var key in dict) { // loop through users to find which one is sending the data
            if (dict[key].userID == data.sender) { // once user is matched
                info = {
                    neededColor : dict[key].userColor, // color is the users designated color from dictionary
                    x : data.x, //pass the x back
                    y : data.y //pass the y back
                }
            }
        }
//        console.log(info);
        socket.broadcast.emit('mouse', info); // send the info to clients
    });
    
});
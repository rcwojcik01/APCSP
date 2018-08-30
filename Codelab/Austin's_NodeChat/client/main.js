var socket = io.connect('http://10.10.100.81:3000'); // create connection
var name; // name of user when name is entered
var mainBrushColor = []; //RGB array for user's color

function setup() {
    // set RGB values for a default
    mainBrushColor = [255,255,255];
    
    // when user is connected
    socket.on('start', function(data) {
        // make sure the event is from this client
        if (data.userID == socket.id) {
            mainBrushColor = data.userColor; // set color to designated color
        }
    }); 
    
    // when user connects 
    socket.on('welcome', function(data) {
        chat(data.text); // add welcome text to chat
    }); 
    // when another user connects
    socket.on('otherUserConnect', function(data) {
       chat(data + ' connected'); // let users know when a client has connected in chat
    });
    
    // when another user disconnects
    socket.on('otherUserDisconnect', function(data) {
       chat(data + ' disconnected'); // let users know when a client has disconnected in chat
    });
    // when a user sends a message
    socket.on('message', function(data) {
       chat(data.user + ': ' + data.message); // add message text to chat
    });
    // when user saves their name
    $('#user-save').click(function() {
        var username = $('#user-name'); // set username
        var txt = username.val().trim(); // prevent XSS
        if (txt.length > 0) { 
            name = txt;
            username.prop('disabled', true);
            $(this).hide(); // Hide name controls
            $('#controls').show(); // show chat controls
            $('#message').prop('disabled',false);
            $('#send').prop('disabled', false);
            socket.emit('user', name); // send user name to server
        }
    });
    
    // when user sends a message
    $('#send').click(function () {
        var input = $('#message'); // set input
        var text = input.val().trim(); //prevent XSS
        if (text.length > 0) {
            socket.emit('message', text); // send message to server
        }
        input.val(''); // erase input
    });
    // allows user to hit enter in input
    $('#user-name').on('keyup', function(e) {
        var ENTER_KEY = 13;
        if(e.keyCode === ENTER_KEY) {
            $('#user-save').click(); // calls user save event
        }
    });
    // allows user to hit enter in input
    $('#message').on('keyup', function(e) {
        var ENTER_KEY = 13;
        if(e.keyCode === ENTER_KEY) {
            $('#send').click(); // calls send event
        }
    });
    
    // create canvas with width of screen and height of 600px, background of 255, fill of 0;
    createCanvas(displayWidth, 600);
    background(255);
    fill(0);
    
    // when user hits clear button
    $('#clear').click(function () {
        socket.emit('clear', true); // send clear event to server
    });
    
    // when server sends mouse data
    socket.on('mouse', function(data) {
        // make sure color is not undefined
        if (data.neededColor != undefined) {
            noStroke(); // set no stroke
            fill(data.neededColor[0],data.neededColor[1],data.neededColor[2]);
//            fill(Math.floor(Math.random() * 255),Math.floor(Math.random() * 255),Math.floor(Math.random() * 255));
            ellipse(data.x, data.y, 50, 50); // set circle's position to the recieved x and y position with size of 50
        }
    });
    // when client recieves clear event
    socket.on('clear', function(data) {
       if (data) { //check to see if clear is true
           background(255); // clear background
       }
    });

}

// draw every frame
function draw() {
    noStroke(); // set no stroke
    fill(mainBrushColor[0],mainBrushColor[1],mainBrushColor[2]); // fill with designated RBG values
//    fill(Math.floor(Math.random() * 255),Math.floor(Math.random() * 255),Math.floor(Math.random() * 255));
    
    // create ellipse with mouse x and y position with size 50
    ellipse(mouseX, mouseY, 50, 50);
    // create object with client's id, mouse x position, and mouse y position
    var stuff = {
        sender : socket.id,
        x : mouseX,
        y : mouseY
    };
    socket.emit('mouse', stuff); // send the data to server
}

    // add chat text to chat
   function chat(msg) {
        $('<div/>').text(msg).appendTo('#log');
    }
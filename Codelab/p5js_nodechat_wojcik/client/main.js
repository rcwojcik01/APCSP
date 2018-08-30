
// this code tells the program to broadcast to the entered ip address
var socket = io.connect('http://10.10.98.0:3000');
// create a variable called name
var name;

$(document).ready(function () {

    // when a user connects to, display a welcome message
    socket.on('welcome', function (data) {
        chat(data.text);
    });
    
    // let the user know when another user has connected
    socket.on('otherUserConnect', function (data) {
        chat(data + ' connected');
    });
    
    // let the user know when another user has disconnected
    socket.on('otherUserDisconnect', function(data) {
        chat(data + ' disconnected');
    });
    
    // display the user's name with a colon before displaying the user's message
    socket.on('message', function(data) {
        chat(data.user + ': ' + data.message);
    });
    

    // when the user clicks save, the name he entered is stored and sent to the server
    $('#user-save').click(function () {
        var username = $('#user-name');
        var txt = username.val().trim();
        if (txt.length > 0) {
            name = txt;
            username.prop('disabled', true);
            $(this).hide();
            $('#controls').show(); // enables and disables the chat box based on if the user enters a username
            $('#message').prop('disabled', false);
            $('#send').prop('disabled', false);
            socket.emit('user', name);
        }
    });
    // when the user clicks send, the client sends the message to the server
    $('#send').click(function() {
        var input = $('#message');
        var text = input.val().trim();
        if (text.length > 0) {
            socket.emit('message', text);
        }
        input.val('');
    });
    
    // when the user presses the enter key when in the user input, the entered information is sent to the server
    $('#user-name').on('keyup', function(e) {
        var ENTER_KEY = 13;
        if(e.keyCode === ENTER_KEY) {
            $('#user-save').click();
        }
    });
    
    // when the user presses the enter key when in the message input, the entered information is sent to the server
    $('#message').on('keyup', function(e) {
        var ENTER_KEY = 13;
        if(e.keyCode === ENTER_KEY) {
            $('#send').click();
        }
    });
    
    // p5js code that creates a canvas on the user's screen
    createCanvas(800, 600);
    // set the background to white
    background(255);
    // fill black
    fill(0);
    
    // creates an elipse with the data from the server
    socket.on('mouse', function(data) {
        noStroke();
        fill(100);
        ellipse(data.x, data.y, 50, 50);
    });
});

// display an ellipse on the webpage
function draw() {
    ellipse(mouseX, mouseY, 50, 50);
    // create a variable that stores the user's name, x data, and y data
    var circleData = {
        user : socket.id,
        x : mouseX,
        y: mouseY
    }
    // send circleData to the server
    socket.emit('mouse', circleData);
}

    // make the messages visible in the console
    function chat(msg) {
        $('<div/>').text(msg).appendTo('#log');
    }

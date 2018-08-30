
var socket = io.connect("http://http://10.10.97.121:3000/");
var name;
var mainBrushColor = [];

function setup () {

    socket.on('welcome', function (data) {
        chat(data.text);
    }); 
    socket.on('otherUserConnect', function (data) {
        chat(data + ' connected');
    });
    socket.on('otherUserDisconnect', function(data) {
        chat(data + ' disconnected');
    }); 
    socket.on('message', function(data) {
        chat(data.user + ': ' + data.message);
    });
    var name;  
    $('#user-save').click(function () {
        var username = $('#user-name');
        var txt = username.val().trim();
        if (txt.length > 0) {
            name = txt;
            username.prop('disabled', true);
            $(this).hide();
            $('#controls').show();
            $('#message').prop('disabled', false);
            $('#send').prop('disabled', false);
            socket.emit('user', name);
        }
    });
    $('#send').click(function() {
        var input = $('#message');
        var text = input.val().trim();
        if (text.length > 0) {
            socket.emit('message', text);
        }
        input.val('');
    });
    $('#user-name').on('keyup', function(e) {
        var ENTER_KEY = 13;
        if(e.keyCode === ENTER_KEY) {
            $('#user-save').click();
        }
    });
    $('#message').on('keyup', function(e) {
        var ENTER_KEY = 13;
        if(e.keyCode === ENTER_KEY) {
            $('#send').click();
        }
    });
    
    createCanvas(300, 300);
    background(255);
    fill(0);
    
    socket.on('mouse', function(data) {
            ellipse(data.x, data.y, 50, 50);
    });

}


function draw() {
    ellipse(mouseX, mouseY, 50, 50);

    var circleData = {
        sender : socket.id,
        x : mouseX,
        y : mouseY
    };
    socket.emit('mouse', circleData);
}
   function chat(msg) {
        $('<div/>').text(msg).appendTo('#log');
    }

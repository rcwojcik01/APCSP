$(document).ready(function() {
    
    // this code makes the music box play when you mouse over it
    var cNote = document.getElementById('cAudio');
    $('#c').mouseover(function() {
        cNote.currentTime = 0;
        cNote.play();
    });
    var dNote = document.getElementById('dAudio');
    $('#d').mouseover(function() {
        dNote.currentTime = 0;
        dNote.play();
    });
    var eNote = document.getElementById('eAudio');
    $('#e').mouseover(function() {
        eNote.currentTime = 0;
        eNote.play();
    });
    var fNote = document.getElementById('fAudio');
    $('#f').mouseover(function() {
        fNote.currentTime = 0;
        fNote.play();
    });
    var gNote = document.getElementById('gAudio');
    $('#g').mouseover(function() {
        gNote.currentTime = 0;
        gNote.play();
    });
    var aNote = document.getElementById('aAudio');
    $('#a').mouseover(function() {
        aNote.currentTime = 0;
        aNote.play();
    });
    var bNote = document.getElementById('bAudio');
    $('#b').mouseover(function() {
        bNote.currentTime = 0;
        bNote.play();
    });
    
// this code makes the music box play when you click it
     var cNote = document.getElementById('cAudio');
    $('#c').mousedown(function() {
        cNote.currentTime = 0;
        cNote.play();
    });
    var dNote = document.getElementById('dAudio');
    $('#d').mousedown(function() {
        dNote.currentTime = 0;
        dNote.play();
    });
    var eNote = document.getElementById('eAudio');
    $('#e').mousedown(function() {
        eNote.currentTime = 0;
        eNote.play();
    });
    var fNote = document.getElementById('fAudio');
    $('#f').mousedown(function() {
        fNote.currentTime = 0;
        fNote.play();
    });
    var gNote = document.getElementById('gAudio');
    $('#g').mousedown(function() {
        gNote.currentTime = 0;
        gNote.play();
    });
    var aNote = document.getElementById('aAudio');
    $('#a').mousedown(function() {
        aNote.currentTime = 0;
        aNote.play();
    });
    var bNote = document.getElementById('bAudio');
    $('#b').mousedown(function() {
        bNote.currentTime = 0;
        bNote.play();
    });
    
// this code plays a note when you press a key    
    $(document).keypress(function(key) {
        if(key.keyCode == 99) {
            cNote.currentTime = 0;
            cNote.play();
        } else if(key.keyCode == 100) {
            dNote.currentTime = 0;
            dNote.play();
        } else if(key.keyCode == 101) {
            eNote.currentTime = 0;
            eNote.play();
        } else if(key.keyCode == 102) {
            fNote.currentTime = 0;
            fNote.play();
        } else if(key.keyCode == 103) {
            gNote.currentTime = 0;
            gNote.play();
        } else if(key.keyCode == 97) {
            aNote.currentTime = 0;
            aNote.play();
        } else if(key.keyCode == 98) {
            bNote.currentTime = 0;
            bNote.play();
        }
});
    
// this code lights up the boxes when the keys are pressed
    
    $(document).keydown(function(key) {
        if(key.keyCode == 67 || key.which == 67) {
            $('#c').removeClass('c').addClass('hover-c');
        } if(key.keyCode == 68 || key.which == 68) {
            $('#d').removeClass('d').addClass('hover-d');
        } if(key.keyCode == 69 || key.which == 69) {
            $('#e').removeClass('e').addClass('hover-e');
        } if(key.keyCode == 70 || key.which == 70) {
            $('#f').removeClass('f').addClass('hover-f');
        } if(key.keyCode == 71 || key.which == 71) {
            $('#g').removeClass('g').addClass('hover-g');
        } if(key.keyCode == 65 || key.which == 65) {
            $('#a').removeClass('a').addClass('hover-a');
        } if(key.keyCode == 66 || key.which == 66) {
            $('#b').removeClass('b').addClass('hover-b');
        }
    });
    
     $(document).keyup(function(key) {
        if(key.keyCode == 67 || key.which == 67) {
            $('#c').removeClass('hover-c').addClass('c');
        } if(key.keyCode == 68 || key.which == 68) {
            $('#d').removeClass('hover-d').addClass('d');
        } if(key.keyCode == 69 || key.which == 69) {
            $('#e').removeClass('hover-e').addClass('e');
        } if(key.keyCode == 70 || key.which == 70) {
            $('#f').removeClass('hover-f').addClass('f');
        } if(key.keyCode == 71 || key.which == 71) {
            $('#g').removeClass('hover-g').addClass('g');
        } if(key.keyCode == 65 || key.which == 65) {
            $('#a').removeClass('hover-a').addClass('a');
        } if(key.keyCode == 66 || key.which == 66) {
            $('#b').removeClass('hover-b').addClass('b');
        }
    });
    
});
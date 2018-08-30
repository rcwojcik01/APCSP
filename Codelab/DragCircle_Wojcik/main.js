
var bg;
var draggingCircle = false;
var num = 5;
var arr = [];

function setup() {
    createCanvas(800, 800);
    bg = color(200);
    
    for(var i = 0; i < num; i++) {
        arr.push(new DraggableCircle(random(0, 800), random(0, 800), random(30, 80)));
        arr[i].fill = color(random(0,255), random(0,255), random(0,255));
    }
}

function draw() {
    background(bg);
    for(var i = 0; i < arr.length; i++) {
        arr[i].display();
    }
}

// a class called 'DraggableCircle'
function DraggableCircle(x, y, r) {
    
    // explicit reference to self
    var self = this;
    
    // public on the 'class'
    self.x = x;
    self.y = y;
    self.r = r;
    
    //private stuff
    var dragging = false;
    var dx = 0;
    var dy = 0;
    self.fill = 0;
    
    self.display = function() {
        
        // we need to draw when the mouse is down
        if(mouseIsPressed) {
            var d = dist(self.x, self.y, mouseX, mouseY);
            if(d <= r/1.8 && !draggingCircle) {
                dragging = true;
                draggingCircle = true;
                dx = self.x - mouseX;
                dy = self.y - mouseY;
            }
            if(dragging) {
                self.x = mouseX + dx;
                self.y = mouseY + dy;
            } 
        } else {
            dragging = false;
            draggingCircle = false;
        }
        noStroke();
        fill(self.fill);
        ellipse(self.x, self.y, self.r, self.r);
    };
}

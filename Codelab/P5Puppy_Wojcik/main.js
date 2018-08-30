
function setup() {
    createCanvas(640, 480);
}

function draw() {
    
    background('#FFFAED');
    var x = width/2;
    var y = height/2;
    
    //face
    noStroke();
    fill('#ffeec1');
    ellipse(x, y - 150, 150, 150);
    
    //neck
    fill('#ffeec1');
    rect(x - 25, y - 100, 50, 200);
    
    //left leg
    fill('#ffeec1');
    rect(x - 60, y + 150, 30, 90);
    
    //right leg
    fill('#ffeec1');
    rect(x + 25, y + 150, 30, 90);
    
    //body
    fill('#ffeec1');
    ellipse(x, y + 100, 160, 170);
    
    // eyeLeft
    fill('#FFFFFF');
    ellipse(x + 32, y - 150, 50, 50);
    
    // pupilLeft
    fill('#472f1b');
    ellipse(x + 32, y - 150, 30, 30);
    
    // eyeRight
    fill('#FFFFFF');
    ellipse(x - 32, y - 150, 50, 50);
    
    // pupilRight
    fill('#472f1b');
    ellipse(x - 32, y - 150, 30, 30);
    
    // earLeft
    fill('#8c5b31');
    push();
    translate(x + 65, y - 220);
    rotate(Math.PI / 10);
    ellipse(0, 0, 40, 70);
    pop();
    
    //earRight
    fill('#8c5b31');
    push();
    translate(x + - 65, y - 220);
    rotate(-Math.PI / 10);
    ellipse(0, 0, 40, 70);
    pop();
    
    // mouth
    fill('#633326');
    ellipse(x, y - 100, 50, 20);
    
    // tongue
    fill('#EE3E36');
    arc(x, y  - 96, 30, 50, 0, (PI+QUARTER_PI) * 4/5, CHORD);
    
    // spot
    fill('#8c5b31');
    ellipse(x - 40, y + 100, 40, 40);
    
    // spot
    fill('#8c5b31');
    ellipse(x + 20, y + 80, 20, 20);
    
    // spot
    fill('#8c5b31');
    ellipse(x + 35, y + 120, 30, 30);
    
    // spot
    fill('#8c5b31');
    ellipse(x - 20, y + 150, 20, 20);
    
    // spot
    fill('#8c5b31');
    ellipse(x - 30, y + 45, 35, 35);
}


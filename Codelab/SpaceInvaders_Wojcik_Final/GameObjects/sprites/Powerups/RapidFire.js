function RapidFire(x, y, team) {
    Sprite.call(this, x, y, team);
    this.speed = 5;
}

RapidFire.prototype = Object.create(Sprite.prototype);
RapidFire.prototype.constructor = RainDropEnemy;
RapidFire.prototype.r = 40;

RapidFire.prototype.move = function() {
    this.y += this.speed;
    if(this.y > height) {
        this.x = random(width);
        this.y = random(-250, -50);
    }
}

RapidFire.prototype.display = function() {
    fill(0, 255, 255);
    ellipse(this.x, this.y, this.r, this.r);
    this.collisions();
}

RapidFire.prototype.collisions = function() {
    for(var i = 0; i < _sprites.length; i++) {
        if(this.isColliding(_sprites[i]) && _sprites[i].team == 1) {
            //put something in here to increase the player's speed
        }
    }
}


function Speed(x, y, team) {
    Sprite.call(this, x, y, team);
    this.speed = 5;
}

Speed.prototype = Object.create(Sprite.prototype);
Speed.prototype.constructor = Speed;
Speed.prototype.r = 40;

Speed.prototype.getTarget = function() {
    for(var i = 0; i < _sprites.length; i++) {
        if(_sprites[i].team == 1) {
            return _sprites[i];
        }
    }
}

Speed.prototype.move = function() {
    this.y += this.speed;
    if(this.y > height) {
        this.x = random(width);
        this.y = random(-250, -50);
    }
}

Speed.prototype.collisions = function() {
    for(var i = 0; i < _sprites.length; i++) {
        if(this.isColliding(_sprites[i]) && _sprites[i].team == 1) {
            if(this.visible = true) {
            var powerup = this;
            var player = this.getTarget();
            player.speed = 10;
            setTimeout(function() {
                player.speed = 6;
            }, 3000);
            powerup.visible = false;
            setTimeout(function() {
                powerup.visible = true;
            }, 20000);
            
            }
        }
    }
}

Speed.prototype.display = function() {
    fill(0, 0, 255);
    ellipse(this.x, this.y, this.r, this.r);
    this.collisions();
}
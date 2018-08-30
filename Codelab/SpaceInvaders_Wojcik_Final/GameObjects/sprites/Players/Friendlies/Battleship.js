
function Battleship(x, y, team) {
    Sprite.call(this, x, y, team);
    this.speed = 6;
    this._canFire = true;
    this.vector = createVector(0, -7);
}

Battleship.prototype = Object.create(Sprite.prototype);
Battleship.prototype.constructor = Battleship;
Battleship.prototype.r = 50;

Battleship.prototype.fire = function() {
    var self = this;
    
    if(keyIsDown(32)) {
        if(this._canFire == true) {
            self._canFire = false;
            _sprites.push(new Bullet(this.x, this.y, this.team, this.vector));
        
            for(var i = 0; i < _sprites.length; i++) {
                //console.log(_sprites[i]);
            }
            setTimeout(function() {
                self._canFire = true;
            }, 300);
        }
    }
}

Battleship.prototype.collisions = function() {
    for(var i = 0; i < _sprites.length; i++) {
        if(this.isColliding(_sprites[i]) && _sprites[i].team == 2) {
            _sprites[i].handleCollision();
            this.handleCollision();
        }
    }
}

Battleship.prototype.move = function() {
    
    if(keyIsDown(65)) {
        this.x -= this.speed;
        } else if(keyIsDown(68)) {
            this.x += this.speed;
        } else {
            this.x += 0;
        }
    
    if(keyIsDown(87)) {
        this.y -= this.speed;
        } else if(keyIsDown(83)) {
            this.y += this.speed;
        } else {
            
        }
}

Battleship.prototype.display = function() {
    fill(255, 0, 120);
    ellipse(this.x, this.y, this.r, this.r);
}

// override
Battleship.prototype.control = function() {
    this.move();
    this.display();
    this.fire();
    this.collisions();
}
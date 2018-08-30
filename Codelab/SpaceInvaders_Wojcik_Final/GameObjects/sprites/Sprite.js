function Sprite(x, y, team) {
    this.x = x;
    this.y = y;
    this.team = team;
    this.visible = true;
}

Sprite.prototype.handleCollision = function() {
    _sprites.splice(_sprites.indexOf(this),1);
}

Sprite.prototype.isColliding = function(other) {
    /* the p5js funciton dist implements the 
       distance formula which can be rewritten as:
       sqrt((this.x - other.x)^2 + (this.y - other.y)^2)
    */
    //var d = dist(this.x, this.y, other.x, other.y);
    var d = sqrt(((this.x - other.x)*(this.x - other.x)) + ((this.y - other.y)*(this.y - other.y)))
    return d < this.r/2 + other.r/2 ? true : false;
}

Sprite.prototype.control = function() {
    if(this.visible) {
        this.move();
        this.display();
    }
}
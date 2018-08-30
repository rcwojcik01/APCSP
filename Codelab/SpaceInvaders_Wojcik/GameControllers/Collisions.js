
function Collisions(object, bullets) {
    for(var i = 0; i < bullets.length; i++) {
        if(dist(object.x, object.y, bullets[i].x, bullets[i].y) < ((object.r/3) + (bullets[i].r / 3))) {
            if(friendlies.indexOf[object] != -1) {
                object.die();
            }
        }
    }
}
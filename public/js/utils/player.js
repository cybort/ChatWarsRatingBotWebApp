var map = { 72: false, 69: false, 76: false, 80: false };
var audio = new Audio('/resources/sound/help.mp3');
$(document).keydown(function(e) {
    if (e.keyCode in map) {
        map[e.keyCode] = true;
        if (map[72] && map[69] && map[76] && map[80]) {									
            audio.play();
        }
    }
}).keyup(function(e) {
    if (e.keyCode in map) {
        map[e.keyCode] = false;
    }
});
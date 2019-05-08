const KEY_LEFT_ARROW = 37;
const KEY_UP_ARROW = 38;
const KEY_RIGHT_ARROW = 39;
const KEY_DOWN_ARROW = 40;
const KEY_SPACE = 32;

var pause = false;

function setupInput () {

    document.addEventListener('keydown', keyPressed);
    document.addEventListener('keyup', keyReleased);

    player1.setupInput(KEY_UP_ARROW, KEY_RIGHT_ARROW, KEY_DOWN_ARROW, KEY_LEFT_ARROW, KEY_SPACE);
}

function keySet(evt, robbo, setTo) {
    // console.log("keyset()");

    if(evt.keyCode == robbo.controlKeySpace){
        robbo.keyHeld_Space = setTo;



        

    }
    if (evt.keyCode == robbo.controlKeyLeft) {
        robbo.keyHeld_Left = setTo;
    }
    if (evt.keyCode == robbo.controlKeyRight) {
        robbo.keyHeld_Right = setTo;

    }
    if (evt.keyCode == robbo.controlKeyUp) {
        robbo.keyHeld_Up = setTo;
    }
    if (evt.keyCode == robbo.controlKeyDown) {
        robbo.keyHeld_Down = setTo;
    }
   
   
}

function keyPressed(evt) {
    // console.log("keypressed()");
    keySet(evt, player1, true);
    pauseFn(evt.key);

    evt.preventDefault();
}
function pauseFn(key, click) {
    var options = document.getElementById('options')
    if (key == 'p' || click == true) {
        if (pause == false) {
            
            pause = true
            clearInterval(interval)
            clearInterval(interval1)
            canvas.style.display = 'none'

            options.style.display = 'block'
            options.requestFullscreen();
            
        } else {

        var framesPerSecond = 10;
        pause = false
        interval1 = setInterval(updateAll, 1000/framesPerSecond);
        interval = setInterval(function(){bat1.move();},500);
        canvas.style.display = 'block'
        options.style.display = 'none'
        canvas.requestFullscreen();
        }
    }
}

function keyReleased(evt) {
    
    keySet(evt, player1, false);
}

var canvas, canvasContext;

var player1 = new Robbo();
var bat1 = new Bat();

window.onload = function() {

    canvas = document.getElementById('gameCanvas');
    canvasContext = canvas.getContext('2d');
    colorRect(0, 0, canvas.width, canvas.height, 'black');
    // debugger;
    loadImages();
};

function imagesLoaded() {

    var framesPerSecond = 10;
    
    setInterval(updateAll, 1000/framesPerSecond);

    setupInput();
    loadLevel(levelList[currentLevel]);
    // bat1.move1();
    // var interval2 = setInterval(function(){bat1.move2();},500);
    var interval = setInterval(function(){bat1.move();},500);

  


    // bat1.move();
    // updateAll();
    // bat1.move();
    // setInterval(bat1.move(),2000);
    // setInterval(bat1.draw(),2000);

    
}
function bat(){
    bat1.move();
    bat1.draw();
}

function loadLevel(level) {
    
    worldGrid = level.slice();
    player1.reset(worldPics[PLAYER], worldPics[ARROW], worldPics[BOW]);
    bat1.reset(ENEMY_BAT);
}

function updateAll() {


    moveAll();
    drawAll();
    
}

function moveAll() {
    // player1.moveArrow();
    player1.shoot();
    player1.move();
    
    
    
    // bat1.move();
 
        // bat1.move();
    // moveBat(x,y);
}

function drawAll() {

    drawWorlds();
    player1.draw();
    player1.drawArrow();
    // bat();
    bat1.draw();
    // drawBat(x,y);
    //  // setInterval(drawEnemy, 10000);

}

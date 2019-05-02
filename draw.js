function drawRobot(b, x, y) {

    canvasContext.save();
    canvasContext.translate(x, y);
    canvasContext.drawImage(worldPics[2], -worldPics[2].width / 2, -worldPics[2].height / 2);
    canvasContext.restore();
}


function drawBat(b, x, y) {

    canvasContext.save();
    canvasContext.translate(x, y);
    canvasContext.drawImage(worldPics[ENEMY_BAT], -worldPics[ENEMY_BAT].width/2, -worldPics[ENEMY_BAT].width/2);
    canvasContext.restore();
}
function colorRect(x, y, width, height, fillColor) {

    canvasContext.fillStyle = fillColor;
    canvasContext.fillRect(x, y, width, height);
}
function drawArrow(b, x, y) {

    canvasContext.save();
    canvasContext.translate(x, y);
    canvasContext.drawImage(worldPics[ARROW], -worldPics[ARROW].width / 2, -worldPics[ARROW].height/2);
    canvasContext.restore();
}

function drawBow(b, x, y) {

    canvasContext.save();
    canvasContext.translate(x, y);
    canvasContext.drawImage(worldPics[BOW], -worldPics[BOW].width / 2, -worldPics[BOW].height/2);
    canvasContext.restore();
}
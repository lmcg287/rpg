const WORLD_W = 50;
const WORLD_H = 50;
const WORLD_COLS = 16;
const WORLD_ROWS = 12;

var hud = [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7,
           7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 8, 7];



function drawHud(hud){

    var i = 0;
    var drawTileX = 0;
    var drawTileY = 0;
    for(var eachRow=0;eachRow<WORLD_ROWS;eachRow++) {
        for(var eachCol = WORLD_ROWS * WORLD_H; eachCol < canvas.height; eachCol++) {
            var tileKind = hud[i];
            
            var useImg = worldPics[tileKind];
            canvasContext.drawImage(useImg, drawTileX, drawTileY);
            drawTileX += WORLD_W;
            i++;
        }
        drawTileY += WORLD_H;
        drawTileX = 0;
    }
}
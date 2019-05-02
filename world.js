const WORLD_W = 50;
const WORLD_H = 50;
const WORLD_COLS = 16;
const WORLD_ROWS = 14;

var levelList = [levelOne,levelTwo];
var currentLevel = 0;
var worldGrid = [];

const TILE_GROUND = 0;
const TILE_WALL = 1;
// const TILE_PLAYERSTART = 2;
const PLAYER = 2;
const TILE_GOAL = 3;
const TILE_KEY = 4;
const TILE_DOOR = 5;
const TILE_MOVE = 6;
const HUD = 7
const HUD_HEART = 8;
const ENEMY_BAT = 9;
const TILE_DOOR_O = 10;
const N0 = 11;
const N1 = 12;
const N2 = 13;
const N3 = 14;
const N4 = 15;
const N5 = 16;
const N6 = 17;
const N7 = 18;
const N8 = 19;
const N9 = 20;
const ARROW = 21;
const BOW = 22;
const BLOOD = 23;
const MOVE_GROUND =24;
function tileIsBat(tile){
    return (tile == ENEMY_BAT);
}

function tileTypeHasTransparency(tile) {

    return (tile == TILE_DOOR ||
            tile == TILE_GOAL ||
            tile == TILE_KEY ||
            tile == TILE_DOOR_O ||
            tile == MOVE_GROUND
            // tile == ENEMY_BAT
            );
}

function returnTileTypeAtColRow(col, row) {

    if(col >= 0 && col < WORLD_COLS &&
        row >= 0 && row < WORLD_ROWS) {
        var worldIndexUnderCoord = rowColToArrayIndex(col, row);
        return worldGrid[worldIndexUnderCoord];
   } 
}

// function right(arrayIndex,this.x) {
//     while(worldGrid[arrayIndex]== TILE_GROUND)
//         this.x +=5;
// }

function rowColToArrayIndex(col, row) {

    return col + WORLD_COLS * row;
}
// function drawBat(x,y){
   

//             canvasContext.drawImage(worldPics[ENEMY_BAT], x, y);
//             moveBat(x,y);
// }
// function moveBat(x,y){
//     if(x < 700){
//         x += 50
//     }
   
//     drawBat(x,y);
// }

function drawWorlds() {

    var i = 0;
    var drawTileX = 0;
    var drawTileY = 0;
    var x1 = 0;
    for(var eachRow=0;eachRow<WORLD_ROWS;eachRow++) {
        for(var eachCol=0;eachCol<WORLD_COLS;eachCol++) {
            var tileK = worldGrid[x1];
            console.log(x1)

            // console.log(tileK)
                        var useImg = worldPics[tileK];
                        // console.log(tileK)

           
            // if (worldGrid[x1] == ENEMY_BAT){
            // console.log(x1)
        // }
            // if ( tileKind == ENEMY_BAT){
            //    setInterval(function(){if(worldGrid != TILE)}, 2000)
            // }
            // if (tileIsBat(tileK)){
            //     drawBat(i);
            //     var di = i;
            //     var dx = drawTileX + 50;
            //     var dy = drawTileY;
            //     console.log("dx" +dx)
            //     console.log("dy" + dy)
            //     worldGrid[i+1]= ENEMY_BAT;
            // }
           
            if (tileTypeHasTransparency(tileK)){
                canvasContext.drawImage(worldPics[TILE_GROUND], drawTileX, drawTileY);
                }
                 if(!tileIsBat(tileK)){
            canvasContext.drawImage(useImg, drawTileX, drawTileY);
             x1++;
        }
     
            //  if(tileK == ENEMY_BAT){

            //     drawBat(worldPics[ENEMY_BAT],drawTileX,drawTileY);  
            
            // }
                
            drawTileX += WORLD_W;
            i++; 
            
            
            
            
            // var useImg = worldPics[tileK];
            // canvasContext.drawImage(useImg, drawTileX, drawTileY);
            // drawTileX += WORLD_W;
            // i++;   
}

drawTileY += WORLD_H;
        drawTileX = 0;
    

} 

        

}

// function drawEnemy() {
//     var drawX = 0;
//     var drawY = 0;
//     for(var row=0;row<WORLD_ROWS;row++) {
//         drawY+= 50;
//         drawX= 0;
//         for(var col=0;col<WORLD_COLS;col++){
//             drawX+=50;

//             var index = rowColToArrayIndex(col, row);

//              // var x =function(){ 
//                 if((worldGrid[index] == ENEMY_BAT && worldGrid[index-16]!= TILE_WALL)|| worlGrid[index+16]==TILE_WALL){
//                     // setInterval(x, 1000);
//                 console.log("index"+index)
//                 console.log("drawx "+ drawX)
//                 console.log("drawy "+ drawY)
// worldGrid[index]= TILE_GROUND;
// worldGrid[index-16] = ENEMY_BAT;
// }
// else if(worlGrid[index-16]==TILE_WALL){
//     worldGrid[index]=TILE_GROUND;
//     worldGrid[index+16]=ENEMY_BAT;
// }
 // }}
                // if(worldGrid[index- WORLD_H] != TILE_WALL){
                // canvasContext.drawImage(worldPics[ENEMY_BAT], drawX, drawY- WORLD_H);


            // }
                // worldGrid[index] = TILE_GROUND;
                // worldGrid[index-WORLD_COLS] == ENEMY_BAT;

                
//         }     
// }
   
    


// }
function moveEnemy(){

}
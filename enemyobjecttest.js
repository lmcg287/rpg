 var vel =50;

function Bat() {
    var interval = null;
this.hit = false;
    this.right = true;
    this.left = false;
	this.reset = function (image) {
       
        this.pic = image;
        

        for (var eachRow = 0; eachRow < WORLD_ROWS; eachRow++) {
            for (var eachCol = 0; eachCol < WORLD_COLS; eachCol++) {
                var arrayIndex = rowColToArrayIndex(eachCol, eachRow);
                if (worldGrid[arrayIndex] == ENEMY_BAT) {
                   this.myBat =arrayIndex;
                    worldGrid[arrayIndex] = TILE_GROUND;
                    // worldGrid[arrayIndex] = ENEMY_BAT;

                    this.x = eachCol * WORLD_W + WORLD_W / 2;
                    this.y = eachRow * WORLD_H + WORLD_H / 2;
//                     if(worldGrid[arrayIndex]== TILE_GROUND){
//                         this.x +=20;

// }
                    return;
                }
            }
        }      
    };
//     
	this.move = function(){ 
        
         this.x += vel;
        var worldCol = Math.floor(this.x / WORLD_W);
        var worldRow = Math.floor(this.y / WORLD_H);
        if(worldCol >= 0 && worldCol < WORLD_COLS &&
           worldRow >= 0 && worldRow < WORLD_ROWS) {
            var tile = returnTileTypeAtColRow(worldCol, worldRow);
            var arrayIndex = rowColToArrayIndex(worldCol, worldRow);
            

    
    

            if(worldGrid[arrayIndex+1]==TILE_WALL || worldGrid[arrayIndex-1]==TILE_WALL ){
                // this.left=-this.right;
                // this.right=-this.left;
   vel =-vel
               
                
            //     // if(this.hit){

            //     //     console.log("golpeado")
            //     // }
               
            //     // worldGrid[arrayIndex+1]==ENEMY_BAT;
            //     // bat1.draw();
            }
            
                  // else {console.log("+x"); }
                    // if(worldGrid[arrayIndex+1]==TILE_WALL || worldGrid[arrayIndex+1]==TILE_WALL)         {
                  
                 
                  
// }


                   // setInterval(()=> bat1.move2, 1500)
                   // interval = setInterval(()=> this.move2(),1500);
                     
}

 

};
// this.hit = function(){
//     if(player1.xArrow==this.x&&player1.yArrow==this.y){
//         // console.log("hit")
//         // this.pic.src= "./images.blood.png"
//         return true
//     }
// };

this.draw = function () {

        drawBat(this.pic, this.x, this.y);
    };
}
    
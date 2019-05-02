 const PLAYER_MOVE_SPEED = 50;
var invulnerable = false;
var shoot;
var shooting = false;
var count =0;
var left;
var right = true;
var up;
var down;
var test= {x:this.x,y:this.y,direction:""}


var storeArrows = [];
var arrowIndex= 0;
var hit = false;
for(var i =0; i<100;i++){
    storeArrows.push(test)
        
    }
function Robbo() {

    
        this.invulnerable = false;

    this.keyHeld_Up = false;
    this.keyHeld_Down = false;
    this.keyHeld_Left = false;
    this.keyHeld_Right = false;
    this.KeyHeld_Space = false;

    this.setupInput = function (up, right, down, left, space) {

        this.controlKeyUp = up;
        this.controlKeyRight = right;
        this.controlKeyDown = down;
        this.controlKeyLeft = left;
        this.controlKeySpace = space;
    };

    this.reset = function (image, arrowImage, bow) {
        console.log(image)
        this.bow = bow;
        this.arrow = arrowImage;
        this.pic = image;
        this.keys = 0;
        this.health = 2;
        this.lives = 3;

        for (var eachRow = 0; eachRow < WORLD_ROWS; eachRow++) {
            for (var eachCol = 0; eachCol < WORLD_COLS; eachCol++) {
                var arrayIndex = rowColToArrayIndex(eachCol, eachRow);
                if (worldGrid[arrayIndex] == PLAYER) {
                    worldGrid[arrayIndex] = TILE_GROUND;
                    this.x = eachCol * WORLD_W + WORLD_W / 2;
                    this.y = eachRow * WORLD_H + WORLD_H / 2;
                    this.xArrow = this.x;
                    this.yArrow = this.y;
                    return;
                }
            }
        }  

    };

    this.move = function ()  {
              
        var previousX = this.x;
        var previousY = this.y;

        if (this.keyHeld_Up) {
            up = true;
            down = false;
            right= false
            left = false
            this.y -= PLAYER_MOVE_SPEED;
            if(!shooting){ this.arrow.src = "./images/arrow_up.png"}
                              
        }
        if (this.keyHeld_Down) {
            up = false;
            down = true;
            left= false
            right= false            
            this.y += PLAYER_MOVE_SPEED;
            if(!shooting){ this.arrow.src = "./images/arrow_down.png"  }

        }
       
        if (this.keyHeld_Left) {
            
            this.x -= PLAYER_MOVE_SPEED;
            this.pic.src= "./images/robot1.png"
            this.bow.src = "./images/bow_1.png"
            right = false;
            left = true;
            up = false;
            down = false;    
            if(!shooting){ this.arrow.src = "./images/arrow_left.png"          }  
        }
        
        if (this.keyHeld_Right) {
                        
            this.x += PLAYER_MOVE_SPEED;
            this.pic.src= "./images/robot.png"
            this.bow.src = "./images/bow_2.png"
            left = false;
            right = true;
            up=false;
            down= false;   
            if(!shooting){
            this.arrow.src ="./images/arrow_right.png"
        }
        }
           
        var worldCol = Math.floor(this.x / WORLD_W);
        var worldRow = Math.floor(this.y / WORLD_H);

        if(worldCol >= 0 && worldCol < WORLD_COLS &&
            worldRow >= 0 && worldRow < WORLD_ROWS) {
            var tile = returnTileTypeAtColRow(worldCol, worldRow);
            var arrayIndex = rowColToArrayIndex(worldCol, worldRow);
                var x = this.x
                var y = this.y
                var x1 = bat1.x
                var y1 = bat1.y

                var vx = x1 - x
                var vy = y1 - y
                var dist = Math.sqrt(vx ** 2 + vy ** 2)
                // console.log(dist)
                // if () {console.log('dead')}
            // if (worldGrid[arrayIndex] = ENEMY_BAT) {console.log('bat')}

            
            if(dist == 0){
                // console.log('dead')
                // console.log(this.health)
                if(!this.invulnerable){
                           
                this.health--;
                this.invulnerable = true;
                setTimeout(function(){player1.invulnerable = false;},3000);}
                
                if(this.health == 0){
                    this.lives--;
                    this.health = 2;
                    } 
                if(this.lives == 2){
                    console.log('hud')
                    worldGrid[222] = HUD;
                }
                if(this.lives == 1){
                    worldGrid[221] = HUD;
                }
                if(this.lives == 0){
                    this.keyHeld_Up = false;
                    this.keyHeld_Down = false;
                    this.keyHeld_Left = false;
                    this.keyHeld_Right = false;

                    worldGrid[220] = HUD;
                    alert("you died");                         
                    loadLevel(levelList[currentLevel]);
                    this.lives = 3;
                }                                       
            }
            if (tile == TILE_KEY) {
                worldGrid[arrayIndex] = TILE_GROUND;
                this.keys++;
                               
            } else if (tile == TILE_DOOR && this.keys > 0) {
                worldGrid[arrayIndex] = TILE_DOOR_O;
                this.keys--;
            } else if (tile == TILE_GOAL) {
                // debugger
                ++currentLevel;
                loadLevel(levelList[1]);
            } 
            else if (tile == TILE_MOVE){
                if (this.keyHeld_Right && worldGrid[arrayIndex+1] == HUD){
                    worldGrid[arrayIndex]= TILE_GROUND;
                    worldGrid[arrayIndex+1]=MOVE_GROUND;
                }
            
                else if (this.x <previousX || this.x > previousX){
                    if( this.x < previousX && worldGrid[arrayIndex-1] == TILE_GROUND){
                        worldGrid[arrayIndex-1]=TILE_MOVE;
                        worldGrid[arrayIndex]= TILE_GROUND;
                    }else if( worldGrid[arrayIndex-1] != TILE_GROUND){
                        this.x = previousX;
                    }
                   else if( this.x >previousX && worldGrid[arrayIndex+1] == TILE_GROUND){
                        worldGrid[arrayIndex+1]=TILE_MOVE;
                        worldGrid[arrayIndex]= TILE_GROUND;
                    }else if( worldGrid[arrayIndex+1] != TILE_GROUND){
                        this.x = previousX;
                    }
                }

                else if( this.y < previousY || this.y > previousY){
                    if( this.y < previousY && worldGrid[arrayIndex-WORLD_COLS] == TILE_GROUND){
                        worldGrid[arrayIndex-WORLD_COLS] = TILE_MOVE;
                        worldGrid[arrayIndex] = TILE_GROUND;
                    }else if (worldGrid[arrayIndex-WORLD_COLS] != TILE_GROUND){
                    }
                    if( this.y >previousY && worldGrid[arrayIndex+WORLD_COLS] == TILE_GROUND){
                        worldGrid[arrayIndex+WORLD_COLS] = TILE_MOVE;
                        worldGrid[arrayIndex] = TILE_GROUND;
                    }else if (worldGrid[arrayIndex+WORLD_COLS] != TILE_GROUND || worldGrid[arrayIndex+WORLD_COLS] != MOVE_GROUND){
                    }
                }
                }
                    if (!(tile == TILE_GROUND || tile ==TILE_DOOR_O || tile == MOVE_GROUND)) {
                this.x = previousX;
                this.y = previousY;
                }                              
        }                                              
    };
    
    this.draw = function () {
        // console.log(this.pic)

        drawRobot(this.pic, this.x, this.y);
    };

    
    this.shoot = function () {
        if(!shooting){

            storeArrows[arrowIndex].x= this.x;
            storeArrows[arrowIndex].y= this.y;        

            if(right){storeArrows[arrowIndex].direction = 'right';}
            if(left){storeArrows[arrowIndex].direction = 'left';}
            if(up){storeArrows[arrowIndex].direction = 'up';}
            if(down){storeArrows[arrowIndex].direction = 'down';}
        }
          
        if (this.keyHeld_Space&&!shooting){//si presiona espacio
      
       
            hit = false;
            console.log("disparando")
                        
            // debugger;
   
                    
                                 // debugger;
           
            shooting = true;                //entonces ahora esta disparando

            
            shoot = setInterval(function(){player1.moveArrow();},5);//inicia intervalo               
        }
    };

    this.moveArrow = function(){//intervalo iniciado

        // var arrowX = storeArrows[arrowIndex].x;
        // var arrowY = storeArrows[arrowIndex].y;

        // var x1 = bat1.x
        // var y1 = bat1.y

        // var vx = arrowX - x1
        // var vy = arrowY - y1

        // var dist = Math.sqrt(vx ** 2 + vy ** 2)

        // console.log('dist', dist)
        // console.log(vx, vy)

    var bulletVel= 1;


    var worldCol = Math.floor(storeArrows[arrowIndex].x / WORLD_W);
    var worldRow = Math.floor(storeArrows[arrowIndex].y / WORLD_H);

    var tile = returnTileTypeAtColRow(worldCol, worldRow);
    var arrayIndex = rowColToArrayIndex(worldCol, worldRow);
            // if(!shooting){
        if(tile != TILE_WALL){
            if(storeArrows[arrowIndex].x == bat1.x && storeArrows[arrowIndex].y == bat1.y){
                console.log("   PINCHE MURCIELAGOOOOOOOOOO")
                worldGrid[arrayIndex] = BLOOD

                delete(bat1.x)
                delete(bat1.y)
                clearInterval(shoot);
              
               hit= true;
               arrowIndex++;
               shooting = false;
            }
                    
            if(storeArrows[arrowIndex].direction== 'up'){
                storeArrows[arrowIndex].y -=bulletVel;
                storeArrows[arrowIndex].direction.src= "./images/arrow_up.png"

            }else if(storeArrows[arrowIndex].direction=='down'){
                storeArrows[arrowIndex].y +=bulletVel;
                storeArrows[arrowIndex].direction.src="./images/arrow_down.png"

            }else if(storeArrows[arrowIndex].direction=='left'){
                storeArrows[arrowIndex].x -=bulletVel;
                storeArrows[arrowIndex].direction.src= "./images/arrow_left.png"
                        
            }else if(storeArrows[arrowIndex].direction=='right'){
                storeArrows[arrowIndex].x +=bulletVel;        
                storeArrows[arrowIndex].direction.src= "./images/arrow_right.png"           
            }
                                
        }

        // else if (storeArrows[arrowIndex].x == bat1.x && storeArrows[arrowIndex].y == bat1.y){


            
        // }
        else{
           clearInterval(shoot);
          
           hit= true;
           arrowIndex++;
           shooting = false;
           console.log("hit")          
        }            
    };
    
    this.drawArrow = function() {
    //    switch(storeArrows[arrowIndex].direction){
    //                                             case 'up' : storeArrows[arrowIndex].direction.src= "./images/arrow_up.png"
    //                                             break;
    //                                             case 'down': storeArrows[arrowIndex].direction.src="./images/arrow_down.png"
    //                                             break;
    //                                             case 'right':storeArrows[arrowIndex].direction.src= "./images/arrow_right.png"
    //                                             break;
    //                                             case 'left':storeArrows[arrowIndex].direction.src= "./images/arrow_left.png"
    //                                             break;
    // }
               
        //DIBUJA MIENTRAS NO DISPARA
        if(!shooting&& up){//si no esta disparando
            drawBow(this.bow, this.x, this.y);
            drawArrow(this.arrow, this.x, this.y);//mueve flecha mientras no dispara y coloca flecha derecha o izkierda

        }else if(!shooting&&down ){//si esta disparando y mirando izquierda
            drawBow(this.bow, this.x, this.y);
            drawArrow(this.arrow, this.x, this.y);//coloca flecha a la izquierda de this.x

        }if(!shooting&& left){//si no esta disparando
            drawBow(this.bow, this.x-20, this.y);
            drawArrow(this.arrow, this.x-20, this.y);//mueve flecha mientras no dispara y coloca flecha derecha o izkierda               

        }else if(!shooting&&right ){//si esta disparando y mirando izquierda
            drawBow(this.bow, this.x+20, this.y);
            drawArrow(this.arrow, this.x+20, this.y);//coloca flecha a la izquierda de this.x
        }
            
        if( right){
            drawBow(this.bow, this.x+20, this.y);

        }else if( left){
            drawBow(this.bow, this.x-20, this.y);
        }

//DIBUJA MIENTRAS DISPARA
        if(shooting&&storeArrows[arrowIndex].direction =='left'){//si esta disparando y mirando izquierda
            drawArrow(storeArrows[arrowIndex].direction, storeArrows[arrowIndex].x-20, storeArrows[arrowIndex].y);//coloca flecha a la derecha de this.x

        }
        else if(shooting&&storeArrows[arrowIndex].direction=='right'){//si esta disparando y mirando derecha
            drawArrow(storeArrows[arrowIndex].direction, storeArrows[arrowIndex].x+20, storeArrows[arrowIndex].y);//coloca flecha a la derecha de this.x
                       
        }else if(shooting&&storeArrows[arrowIndex].direction=='down'){//si esta disparando y mirando derecha
            drawArrow(storeArrows[arrowIndex].direction, storeArrows[arrowIndex].x, storeArrows[arrowIndex].y);//coloca flecha a la derecha de this.x
                       
        }else if(shooting&&storeArrows[arrowIndex].direction=='up'){//si esta disparando y mirando derecha
            drawArrow(storeArrows[arrowIndex].direction, storeArrows[arrowIndex].x, storeArrows[arrowIndex].y);//coloca flecha a la derecha de this.x                       
        }      
    };
}
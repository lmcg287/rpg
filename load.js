var robot = document.createElement("img");
// var arrow = document.createElement("img");
var worldPics = [];
var enemies = [];
var picsToLoad = 0;
var numbers=[];
var ae = [];
var audioFx = {
    'GoblinDeath':{
        'src':'./GoblinDeath.ogg'
    },
    'aargh1':{
        'src':'./aargh1.ogg'
    },
    'upshort':{
        'src':'./upshort.ogg'
    },
    'door_lock':{
        'src':'door_lock copy 2.mp3'
    },
    'open_door_3':{
        'src':'open_door_3 copy 2.mp3'
    }
}
var audioList = {
    '42b4b':{
        'src':'./audio/42b4b.ogg'
    },
    'A Darkness Opus':{
        'src':'./audio/A Darkness Opus.ogg'
    },
    'Dark Quest':{
        'src':'./audio/Dark Quest.ogg'
    },
    'Devilish design':{
        'src':'./audio/Devilish design.mp3'
    },
    'flaremain':{
        'src':'./audio/flaremain.ogg'
    },
    'gtbass':{
        'src':'./audio/gtbass.ogg'
    },
    'Path to Lake Land':{
        'src':'./audio/Path to Lake Land.ogg'
    },
    
};
var au = []
// var imageList = [{imgVar, filePath},{worldType, filePath},{enemy, filePath}]
function loadAudio() {
    console.log('e')
    for (var audio in audioList) {
        var temp = new Audio();
        temp.src = audioList[audio].src
        au.push(temp);
    }
    for (var audio in audioFx) {
        var temp = new Audio;
        temp.src = audioFx[audio].src;
        ae.push(temp);
    }
}
function countLoadedImagesAndLaunchIfReady() {

    picsToLoad--;

    if (picsToLoad == 0) {
        imagesLoaded();
    }
}

function beginLoadingImage(imgVar, filePath) {

    imgVar.onload = countLoadedImagesAndLaunchIfReady;
    imgVar.src = filePath;
}

function loadImageForWorldCode(worldCode, filePath) {

    worldPics[worldCode] = document.createElement("img");
    beginLoadingImage(worldPics[worldCode], filePath);

}
function loadImageForEnemy(worldCode, filePath) {
    enemies[worldCode] = document.createElement('img');
    beginLoadingImage(enemies[worldCode], filePath);
}

function loadImages() {

   var imageList = [
        { worldType: PLAYER, filePath: "./images/robot.png" },
        // { filePath: "./images/robot1.png"},
        { worldType: BLOOD, filePath: "./images/blood.png"},
        { worldType: BOW, filePath: "./images/bow_2.png"},
        { worldType: ARROW, filePath: "./images/arrow_right.png"},
        { worldType: TILE_GROUND, filePath: "./images/tile_ground.png" },
        { worldType: TILE_WALL, filePath: "./images/tile_wall.png" },
        { worldType: TILE_GOAL, filePath: "./images/tile_goal.png" },
        { worldType: TILE_KEY, filePath: "./images/tile_key.png" },
        { worldType: TILE_DOOR, filePath: "./images/tile_door.png" },
        { worldType: TILE_DOOR_O, filePath: "./images/tile_opendoor.png"},
        { worldType: TILE_MOVE, filePath: "./images/tile_move.png" },
        { worldType: HUD_HEART, filePath: "./images/hud_heart.png" },
        { worldType: HUD, filePath: "./images/hud.png" },
        { enemy: ENEMY_BAT, filePath: "./images/bat.png" },
        { enemy: ENEMY_GIANT, filePath: "./images/ww.png"},
        { worldType: N0, filePath: "./images/0.png"},
        { worldType: N1, filePath: "./images/1.png"},
        { worldType: N2, filePath: "./images/2.png"},
        { worldType: N3, filePath: "./images/3.png"},
        { worldType: N4, filePath: "./images/4.png"},
        { worldType: N5, filePath: "./images/5.png"},
        { worldType: N6, filePath: "./images/6.png"},
        { worldType: N7, filePath: "./images/7.png"},
        { worldType: N8, filePath: "./images/8.png"},
        { worldType: N9, filePath: "./images/9.png"},
        { worldType: MOVE_GROUND, filePath: "./images/tile_move.png" }
       
    ];
    picsToLoad = imageList.length;

    for (var i = 0; i < imageList.length; i++) {
        if (imageList[i].imgVar != undefined) {
            beginLoadingImage(imageList[i].imgVar, imageList[i].filePath);
        } 
        else if(imageList[i].worldType != undefined) {
             loadImageForWorldCode(imageList[i].worldType, imageList[i].filePath);
             console.log(imageList[2].worldType)
        }
        else{
            loadImageForWorldCode(imageList[i].enemy,imageList[i].filePath);
        }
    }
}

var database, position;
var gameState=0, playerCount=0;
var game,player,form;
var allPlayers, distance=0;

function setup(){
    createCanvas(500,500);
    database=firebase.database();
    game=new Game();
    game.getState();
    game.start();
}

function draw(){
    background("white");
    if(playerCount===4){
        game.update(1);
    }
    if(gameState===1){
        clear();
        game.play();
    }
    
}


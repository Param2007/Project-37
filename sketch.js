var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var players, player1, player2;

var track, player1_img, player2_img;

var yVal, jumpCounter, upPressed;

function preload(){
  // track = loadImage("../images/track.jpg");
  // player1_img = loadImage("../images/player1.png");
  // player2_img = loadImage("../images/player2.png");
  // ground = loadImage("../images/ground.png");
}

function setup(){
  canvas = createCanvas(windowWidth - 20, windowHeight - 20);
  database = firebase.database();
  jumpCounter = 0;
  yVal = 175;
  upPressed = 0;
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
}

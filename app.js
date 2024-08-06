"use strict";

//Canvas Variables
let canvas = document.getElementById("canvas");
let g = canvas.getContext("2d");

let uiWindow = createRect(600,200,300,300);

//Gamestate Variables
const GAMESTATE_START = 0;
const GAMESTATE_INGAME = 1;
const GAMESTATE_GAMEOVER = 2;

const INGAMESTATE_START = 0;
const INGAMESTATE_INGAME = 1;
const INGAMESTATE_END = 0;

let gameState = GAMESTATE_START;
let ingameState = INGAMESTATE_START;

//Pawn Variables
let boardPositionSize = 50;
let pawnPositions = [];
let boardPositions = [];
let playerAmountButtons = [];

let images = {};

//Ractangle Function
function createRect(x,y,w,h)
{
    let rectangle = {
        x:x,
        y:y,
        x2:x+w,
        y2:y+h,
        w:w,
        h:h,
    };
    return rectangle;
}

function clearCanvas()
{
    g.fillStyle = "lightslategray";
    g.fillRect(0,0,canvas.with, canvas.height);
}

function draw()
{
    clearCanvas();  
    if(gameState == GAMESTATE_START){
        drawGameStart();
    }else if(gamestate == GAMESTATE_INGAME){
        drawInGame();
    }
}

function createBoardPositions()
{
    let x= 0;
    let y = canvas.height-boardPositionSize;
    let path = [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1] ;

    for(let i =0 ; i<path.length;i++)
    {

        if(path[i] == 1)//gaan naar rechts
        {
            x = x + 55;
        }
        else if(path[i] == 3)//gaan naar links
        {
            x = x - 55; 
        }
        else if(path[i] == 0)//gaan hier naar boven
        {
            y = y - 55; 
        }
        boardPositions.push(createRect(x,y,boardPositionSize,boardPositionSize));
    }
}


function drawInGame(){
    for (let i = 0; i < boardPositions.length; i++) 
    {
        let pos = boardPositions[i];

        g.fillStyle = "#004400";
        g.fillRect(pos.x,pos.y,pos.w,pos.h);
        g.fillStyle = "#FFFFFF";
        g.fillText((i+1)+"",pos.x,pos.y+20);
    }
}

function initGame()
{
    createBoardPositions();
    for (let i = 0; i < 4; i++) {
        let button = createRect(uiWindow.x+5 + (i*55),uiWindow.y+50,50,50);
        button.playerAmount=i+1;
        playerAmountButtons.push(button);
    }
}

function drawInGame()
{
    for(let i =0 ; i<boardPositions.length;i++)
    {
       let pos = boardPositions[i];

       g.fillStyle = "#004400";
       g.fillRect(pos.x,pos.y,pos.w,pos.h);
       g.fillStyle = "#FFFFFF";
       g.fillText((i+1)+"",pos.x,pos.y+20);
    }
}

function drawGameStart()
{
    for (let i = 0; i < playerAmountButtons.length; i++) {

        g.fillStyle = "#004400";
        g.fillRect(playerAmountButtons[i].x,playerAmountButtons[i].y,playerAmountButtons[i].w,playerAmountButtons[i].h);
        g.fillStyle = "#FFFFFF";
        g.fillText((i+1)+"",playerAmountButtons[i].x,playerAmountButtons[i].y+20);

        g.drawImage(images["pawn"+i+".png"],playerAmountButtons[i].x,playerAmountButtons[i].y,playerAmountButtons[i].w,playerAmountButtons[i].h);
    } 
    g.fillText("Click the amount of players to start",uiWindow.x+10,uiWindow.y);
}

function loadImages()
{
    let sources = [
        "img/dice1.png", "img/dice2.png", "img/dice3.png", "img/dice4.png", "img/dice5.png", "img/dice6.png",
        "img/pawn0.png", "img/pawn1.png", "img/pawn2.png", "img/pawn3.png", 
        "img/snakes.png", 
        "img/trophy.png", 
        "img/window.png", 
    ];
    
    let scope = this;

    let loaded = 0;
    for (let i = 0; i < sources.length; i++)
    {
        let img = new Image();


        img.onload = function ()
        {
            loaded++;
            if (loaded == sources.length)
            {
                imagesLoaded();
            }
        };
        img.src = sources[i];

        images[ sources[i].replace("img/","")] = img;
    }
    initGame();
    draw();
}

function imagesLoaded()
{
    initGame();

}
loadImages();
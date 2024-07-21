"use strict";

//Canvas Variables
let canvas = document.getElementById("canvas");
let g = canvas.getContext("2d");

//Gamestate Variables
const GAMESTATE_START = 0;
const GAMESTATE_INGAME = 1;
const GAMESTATE_GAMEOVER = 2;

const INGAMESTATE_START = 0;
const INGAMESTATE_INGAME = 1;
const INGAMESTATE_END = 0;

//Pawn Variables
let boardPositionSize = 50;
let pawnPositions = [];
let boardPositions = [];
let playerAmountButtons = [];

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
    for (let i = 0; i < boardPositions.length; i++) {
        let pos = boardPositions[i];

        g.fillStyle = "#004400";
        g.fillRect(pos.x,pos.y,50,50);
        g.fillStyle = "#FFFFFF";
        g.fillText((i+1)+"",pos.x,pos.y+20);
        
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

createBoardPositions();
draw();

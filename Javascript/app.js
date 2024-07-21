"use strict";

//Cavas Variables
let cavas = document.getElementById("cavas");
let g = cavas.getContext("2d");

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
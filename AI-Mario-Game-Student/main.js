gamestutus="";
noseX=0;
noseY=0;

function preload() {
	world_start = loadSound("world_start.wav");
	mario_jump=loadSound("jump.wav");
	mario_coin=loadSound("coin.wav");
	mario_gameover=loadSound("gameover.wav");
	mario_die=loadSound("mariodie.wav");
	mario_kick=loadSound("kick.wav");
	setSprites();
	MarioAnimation();
	

}

function setup() {
	canvas =createCanvas(1240,336);
	canvas.parent('canvas');
	instializeInSetup(mario);
	video=createCapture(VIDEO);
	video.size(800,400);
	video.parent('game_consol');
poseNet=ml5.poseNet(video,modelLoded);
poseNet.on('pose',gotposes);
}
function modelLoded(){
	console.log("modelLoded");
}


function gotposes(results){
if (results.length>0){
	console.log(results);
	noseX=results[0].pose.nose.x;
	noseY=results[0].pose.nose.y;

	}

}

function draw() {
	game();
}

function startgame(){
	gamestatus="start";
	document.getElementById("status").innerHTML="game is loading";
}

function game() {
}




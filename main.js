var song="";
var right_wrist_y=0;
var left_wrist_y=0;
var right_wrist_x=0;
var left_wrist_x=0;

function preload(){
song=loadSound("music.mp3");
}

function setup(){
canvas=createCanvas(650, 500);
canvas.position(660, 200);

video=createCapture(VIDEO);
video.hide();

poseNet=ml5.poseNet(video, modelloaded);
poseNet.on('pose', gotPoses);
}

function gotPoses(results){
console.log(results);
right_wrist_y=results[0].pose.rightWrist.y;
left_wrist_y=results[0].pose.leftWrist.y;
right_wrist_x=results[0].pose.rightWrist.x;
left_wrist_x=results[0].pose.leftWrist.x;

console.log("right_wrist_y is "+right_wrist_y+"Left Wrist is-y"+left_wrist_y);
console.log("right wrist-x is"+right_wrist_x+"left wrist-xis"+left_wrist_x);
}

function modelloaded(){
console.log("Model is successfully loaded!");
}

function draw(){
image(video, 0 , 0, 650, 500);

fill("red");
stroke("red");
circle(left_wrist_x, left_wrist_y, 20);
left_wrist_y_no=Number(left_wrist_y);
left_wrist_y_rounded=floor(left_wrist_y_no);
volume=left_wrist_y_rounded/500;
console.log(volume);

document.getElementById("volume_button").innerHTML="Volume = "+volume;
song.setVolume(volume);
}

function play_song(){
song.play();
song.setVolume(1);
song.rate(1);
}


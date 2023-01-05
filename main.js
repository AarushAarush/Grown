noseX = 0;
noseY = 0;
function preload(){
clownnose = loadImage('https://i.postimg.cc/wvTpLXCL/Mustache.png');
}
function setup(){
canvas = createCanvas(450, 400);
canvas.center()
video = createCapture(VIDEO);
video.size(450, 400);
video.hide();
poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}
function draw(){
image(video, 0, 0, 450, 400);
//fill(255,0,0);
//stroke(255,0,0);
//circle(noseX, noseY, 20);
image(clownnose, noseX, noseY, 30, 30);
}
function Snap(){
save('GrownMe.png');
}
function modelLoaded(){
console.log('PoseNet is Initialized');
}
function gotPoses(results){
if(results.length > 0)
{
console.log(results);
noseX = results[0].pose.nose.x-10;
noseY = results[0].pose.nose.y;
console.log("nose x = " + results[0].pose.nose.x);
console.log("nose y = " + results[0].pose.nose.y);
}
}

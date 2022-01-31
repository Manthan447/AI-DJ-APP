song = "";
leftwrist_x = 0; 
leftwrist_y = 0;
rightwrist_x = 0;
rightwrist_y = 0;


function preload() { song = loadSound("music.mp3"); }


function setup(){
    canvas = createCanvas(600,500);
    video = createCapture(VIDEO);
    video.hide();
    canvas.position(300,300);
    poseNet = ml5.poseNet(video,modelloaded);
    poseNet.on('pose',gotPoses);
}

function draw(){
    image(video,0,0,600,500);
}

function play(){
    song.play();
    song.rate(1);
    song.setVolume(1);
}

function modelloaded(){
    console.log("Posenet is intialized");
}

function gotPoses(results){
    if(results.length>0) 
    {
        console.log(results);
        leftwrist_x = results[0].pose.leftWrist.x; 
        leftwrist_y = results[0].pose.leftWrist.y;
        rightwrist_x = results[0].pose.rightWrist.x;
        rightwrist_x = results[0].pose.rightWrist.y;
        
        console.log("leftwrist_x = " + leftwrist_x + "leftwrist_y = "+ leftwrist_y);
        console.log("rightwrist_x = " + rightwrist_x + "rightwrist_y = "+ rightwrist_y);
    }
}
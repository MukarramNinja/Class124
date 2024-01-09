function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 550);
    canvas.position(560,100);

    poseNet = ml5.poseNet(video, modeLoaded);
    poseNet.on('pose', gotPoses);
}
function draw() {
    background("green");
}
function modeLoaded() {
    console.log('PoseNet is Initialized');
}
function gotPoses(results) {
    if(results.length > 0)
    {
        console.log(results);
    }
}
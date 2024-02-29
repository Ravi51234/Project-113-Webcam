function preload(){

}

function setup(){
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video, 80, 80, 450, 300);
    fill("green");
    noFill();
    stroke("green");
    strokeWeight(10);
    rect(40, 40, 550, 400);
    fill("red");
    stroke("red");
    circle(40, 40, 50);
    circle(580, 40, 50);
    circle(40, 440, 50);
    circle(590, 440, 50);
}

function snapshot(){

    save("Image_With_Shapes.png");
}
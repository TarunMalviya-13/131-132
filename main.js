img="";
status="";
function modelLoaded(){
    console.log("model loaded");
    status=true;
    objectDetector.detect(img, gotResult);
}
function gotResult(error,results){
    if(error){
        console.log(error);

    }
    else{
        console.log(results);
    }
}
function preload(){
    img=loadImage("download.jpg");
}
function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML="Status: detecting object"
}
function draw(){
    image(img,0,0,640,420);
    fill('red');
    text("bottal",50,100);
    noFill()
    stroke("green");
    rect(50,60,450,450);

 
}
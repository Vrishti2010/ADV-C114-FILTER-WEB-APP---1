function preload(){}

function setup() {

    canvas = createCanvas(300,300);
    canvas.center();
    webcam= createCapture(VIDEO);
    webcam.size(300,300);
    webcam.hide();
    posenet = ml5.poseNet(webcam,model_loaded);
    posenet.on("pose",got_results); }

function got_results(results){

    if(results.length>0) {
        console.log(results);
        console.log("nose_x= "+results[0].pose.nose.x);
        console.log("nose_y= "+results[0].pose.nose.y);
 }}
    
    
    function model_loaded(){
    console.log("Posenet is intialized"); }

function draw(){
    image(webcam,0,0,300,300); 
}

function takensnapshot(){

    save("image.png");
}
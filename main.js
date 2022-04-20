function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
  classifyer= ml5.imageClassifier("MobileNet",modelloaded)
}

function draw(){
  image(video, 0,0,300,300)
  classifyer.classify(video, gotResult)
}

function modelloaded(){
  console.log("posenetIsloaded")
}

function gotResult(error,results){
  if(error){
    console.error(error)
  }
  else{
    console.log(results)
    document.getElementById("result_object_name").innerHTML= results[0].label
    document.getElementById("result_obect_accrusy").innerHTML= results[0].confidence.toFixed(3)
  }
}

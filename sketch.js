var video
var button
var snapshots =[];

function setup() {
  createCanvas(windowWidth, windowHeight/2);
  background(51)
 video = createCapture(VIDEO , ready);
 video.size(width/2,height/2)
 button =  createButton('snap');
 button .mousePressed(takesnap)
}
var go = false
function ready(){
  go = true
}


function takesnap()
{
  snapshots .push(video.get())
  

  //image(video,0,0)
}


function draw() {
var w = 80;
var h = 60;
var x =  0
var y = 0
  for (var i = 0 ; i <snapshots.length; i++){
    image(snapshots[i],x,y,w,h)
    
    x = x+w
    if(x>width){
      x=0
      y = y+h
    }
  }
  
  
  // image(video,0,0)
}

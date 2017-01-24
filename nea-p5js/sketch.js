var t;
var data;
var entries = [];
var n;
var fontRegular;

var attractor;

var b1;
var b2;
var b3;

var bs = [];

var startText1="The National Endowment for the Arts supports art practices (like ALL of these) across the USA.";
var startText2="The current US government wants to dismantle the NEA. Yet the NEA's modest budget amounts to less than 0.025% of the public funds spent on the US military.";
var startText3="In the United States Census in 2000, more people identified their primary occupation as artist, than as lawyer, doctor, or police officer combined.*";


function preload() {
  fontRegular = loadFont("assets/Museo_Slab_500_2.otf");
};

function setup(){
  textFont(fontRegular);
  textSize(30);

  createCanvas(displayWidth, displayHeight);
  //  createCanvas(window.innerWidth, window.innerHeight);

  bs[0] = new Bubble(220,200,200,0.5,-0.5,startText2, 180,180,0,-10);
  bs[2] = new Bubble(170,100,100,0.2,-0.2,startText1, 150,160,0,-20);
  bs[1] = new Bubble(210,220,250,-0.1,0.1,startText3, 170,230,0,-45);


  //diamter, xposition,yposition, xspeed, yspeed, eText, text width, text hieght, move text x, move text y
};

function draw(){
  background(255);

  for (var i = 0; i < bs.length; i++) {
    //FRICTION
    var c = 0.01;
    var normal = 1;
    var frictionMag = c * normal;
    var friction = bs[i].velocity.copy();
    friction.mult(-1);
    friction.normalize();
    friction.mult(frictionMag);



    bs[i].checkEdges();
    bs[i].update();



    bs[i].display();
    // bs[i].interact();
    stroke(255);
    strokeWeight(1);
  line(bs[2].position.x+3, bs[2].position.y+16,bs[2].position.x+65, bs[2].position.y+16);
  line(bs[2].position.x-10, bs[2].position.y+34,bs[2].position.x-72, bs[2].position.y+34);


  }


  bs[0].collide(bs[1],bs[2]);
  bs[1].collide(bs[0],bs[2]);
  bs[2].collide(bs[1],bs[0]);


};

function mouseMoved() {
  for (var i = 0; i < bs.length; i++) {
    bs[i].handleHover(mouseX, mouseY);
  }
};

function mousePressed() {

  for (var i = 0; i < bs.length; i++) {
    bs[i].handlePress(mouseX, mouseY);
  }
  if(mouseX<bs[2].position.x+75&&mouseX>bs[2].position.x-75&&mouseY<bs[2].position.y+35&&mouseY>bs[2].position.y){
console.log("clicked");
//document.style.cursor = "pointer";
top.window.location.href='http://www.neafunded.us/';
    //location.assign("http://www.neafunded.us/");


  }
};

function mouseDragged() {
  for (var i = 0; i < bs.length; i++) {
    bs[i].handleHover(mouseX, mouseY);
    bs[i].handleDrag(mouseX, mouseY);
  }
};

function mouseReleased() {
  for (var i = 0; i < bs.length; i++) {
    bs[i].stopDragging();
  }
};

function preload(){

  // put preload code here
  //https://drawwithcode.github.io/2019-01-elisamanzoni/
}

function setup() {
  // put setup code here
  createCanvas(windowWidth,windowHeight);
  background("black");
  frameRate(22);

  angleMode(DEGREES);
}

function draw() {



push();


  translate(windowWidth/2, windowHeight/2);

strokeWeight(2)
//stroke("black");
    //line(0,200,cos(frameCount*5)*200,-sin(frameCount*5)*200);

stroke("brown");
    line(0,-100,cos((frameCount*5)+50)*200,-sin(frameCount*5)*200);

strokeWeight(2)
stroke("yellow");
  line(200,0,cos(frameCount*5)*200,sin(frameCount*5)*200);

noStroke();
fill("brown");
  ellipse(cos((frameCount*5)+50)*200,-sin(frameCount*5)*200,20,20);

pop();

push();
translate(windowWidth-100, 100);
strokeWeight(2);
stroke("orange");
  line(0,0,cos(frameCount*5)*200,sin(frameCount*5)*200);
pop();

push();
  translate(windowWidth-250, 250);
  stroke("yellow");
    line(cos(frameCount*5)*50,sin(frameCount*5)*50,cos(frameCount*5)*100,sin(frameCount*5)*100);
pop();

push();
translate(windowWidth-300, 300);
stroke("white");
  line(0,0,cos(frameCount*5)*50,sin(frameCount*5)*50);
pop();


push();
strokeWeight(3);
stroke("white");
  line(mouseX,mouseY,mouseX,mouseY);
pop();

push();
textSize(25);
text('Create the stars', windowWidth-320, windowHeight-80);
fill("wite");
pop();
//razzo

translate(300, 520);
rotate(60);
scale(1.2);

noStroke();

fill("white");
rect(0,0,100,150);

fill("red");
triangle(0, -5, 100, -5, 50, -80);

fill("blue");
triangle(-5, 150, -55, 150, -5, 80);
triangle(105, 150, 155, 150, 105, 80);

fill("orange");
ellipse(50,190,60,60);
triangle(20, 200, 80, 200, 50, 250);

fill("lightblue");
ellipse(50,50,50,50);



//stroke("white");
    //line(pmouseX,pmouseY,0,-200,);



}

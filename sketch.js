var k = 0
function setup(){
    createCanvas(800,400);
    background(200);

}

function draw(){
    strokeWeight(1);
    stroke(0,0,0);
    line(400,399,400,0);
    fill(70,130,180);
    ellipse(200,200,250,250);
    fill(255,255,255);
    ellipse(200,225,200,200);
    ellipse(175,130,50,70);
    ellipse(225,130,50,70);
    line(200,185,200,255);
    line(135,255,266,255);

    stroke(0,0,0);
    fill(128,0,0);
    arc(200,255,140,75,50,60);

    line(260,200,370,176);
    line(260,220,370,225);
    line(260,240,370,270);
    line(30,176,140,200);
    line(30,225,140,220);
    line(30,270,140,240);
    
    strokeWeight(10);
    point(175,130);
    point(225,130);

    strokeWeight(30);
    stroke(200,0,0);
    point(200,170);

    strokeWeight(1);
    stroke(0,0,0);
    line(400,399,400,0);
    fill(70,130,180);
    ellipse(600,200,250,250);
    fill(255,255,255);
    ellipse(600,225,200,200);
    ellipse(575,130,50,70);
    ellipse(625,130,50,70);
    line(600,185,600,255);

    stroke(0,0,0);
    fill(128,0,0);
    var y = 255 + 5* Math.sin(PI/40*k)
    k += 1;
    arc(600,y,140,75,50,60);
   
    line(660,200,770,176);
    line(660,220,770,225);
    line(660,240,770,270);
    line(430,176,540,200);
    line(430,225,540,220);
    line(430,270,540,240);

    
    strokeWeight(10);
    var x = 575 + 5* Math.sin(PI/40*k)
    k += 1;
    point(x,130);
    var x = 625 + 5* Math.sin(PI/40*k)
    k += 1;
    point(x,130);

    strokeWeight(30);
    stroke(200,0,0);
    point(600,170);
    
    
    
}

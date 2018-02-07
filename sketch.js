var loc_x=10;
var pagex = 1260;
var pagey = 660;
var sway = 0;
var iter =0;
var firstrun=true;
var angle;
var xtrans = 35;
var ilist = [];
var idx = 0;
var cg;

var xleaf = [];
var yleaf = [];
var sizes = [];
var sizes2 = [];
var dir =[];
var randclr = [];
var orange;
var yellow;
var green;
var colorz = [];

function setup(){
  orange = color(196, 73, 0);
  yellow = color(228, 178, 17);
  green = color(152, 143, 42);

  colorz = [orange,yellow,green];

    createCanvas(pagex, pagey);
    cg = createGraphics(pagex, pagey);
   var angle1 = random(0.4,PI/3);
   var angle2=(PI/3-angle1)+0.4;
   var angle3 = random([0.4,0.5,0.6,0.7,0.8,0.9,1]);
    console.log(angle1);
    console.log(angle2);
    console.log(angle3);
    
    cg.strokeWeight(0.5);
    cg.stroke(216,215,143);

    for(var i=10;i<pagex-10;i+=30){
        cg.translate(i,320);
        branches(25,angle1);
        cg.resetMatrix();
    }

    cg.stroke(216, 189, 138);
    
    for(var i=20;i<pagex-10;i+=30){
        cg.translate(i,285);
        branches(25,angle2);
        cg.resetMatrix();
    }
    
    cg.stroke(67, 37, 52);
    
    for(var i=15;i<pagex-10;i+=30){
        cg.translate(i,260);
        branches(25,angle3);
        cg.resetMatrix();
    }

  frameRate(30);

  for(var i = 0; i < 20; i++) {
    sizes[i] = random(1, 20);
    sizes2[i] = random(1, 20);
    xleaf[i] = random(0, pagex);
    yleaf[i] = random(0, pagey);
    dir[i] = random(0, 1);
    randclr[i] = random([0,1,2]);
  }
  
}


function draw(){
    background(52, 96, 14)

    //sun
    push();
    noStroke();
    fill(228, 178, 17);
    polygon(10,10,80+sin(frameCount/30)*7,12);
    pop();

    image(cg,0,0);
    

    for(var i=0;i<20;i++){
        fill(colorz[randclr[i]]);
        noStroke();
        translate(xleaf[i], yleaf[i]);
        for (var n = 0; n < 5; n++) {
            ellipse(0, 0, sizes[i], sizes2[i]);
            rotate(PI/4);
        }
        resetMatrix();
        
        if(dir[i] == 0) {
            xleaf[i] += 0.25*sizes[i];
          } else {
            xleaf[i] -= 0.3*sizes2[i];
          }

        yleaf[i] += 0.25*sizes[i];

        if(xleaf[i] > pagex + sizes[i] || xleaf[i] < -sizes[i] || yleaf[i] > pagey + sizes[i]) {
            xleaf[i] = random(0, pagex);
            yleaf[i] = -sizes[i];
          }
        
    }    


     
}



function trees(){
    translate(25, pagey - 10);
    stroke(216,215,143);
    treerow();    
    resetMatrix();
    translate(25,pagey-60);
    stroke(216, 189, 138);
    treerow();
}

function treerow(){
    while(loc_x<pagex-10){
        
        translate(loc_x,0);
        branches(25);
        
        loc_x=loc_x+30;
    }
    loc_x=10;
}

function branches(x,varangle){
  
    cg.line(0,0,0,-x);
    cg.translate(0,-x/2);

    x *= 0.68;
    
    if(x>2){
        cg.push();
        cg.rotate(varangle);
        branches(x,varangle);
        cg.pop();

        cg.push();
        cg.rotate(-varangle);
        branches(x,varangle);
        cg.pop();
    
    }

}

function polygon(x, y, radius, npoints) {
    var angle = TWO_PI / npoints;
    beginShape();
    for (var a = 0; a < TWO_PI; a += angle) {
      var sx = x + cos(a) * radius;
      var sy = y + sin(a) * radius;
      vertex(sx, sy);
    }
endShape(CLOSE);
}

function leaf(){

}


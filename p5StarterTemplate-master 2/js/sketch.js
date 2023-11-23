
//                 0   1   2   3   4     (index numbers)
let circleSizes = [50, 75, 30, 45, 82]
let circleIndex = 0;


function setup() {
    var canvas = createCanvas(800, 800);
    canvas.parent("p5container");
}

function draw() {
    background(220);

    fill(255, 255, 255);
    ellipse (width/2, height/2, circleSizes[circleIndex]);
    
}

function mousePressed (){

    // This statement means that every time the mouse clicks on the screen, the statement will add 1 to the index number (calling on the values from array), increasing the size of the circle with every click of the mouse. 
    // '++' means 'add 1'
    // the circe will stop getting bigger after a few clicks if there are only a few elements in the array because the statementt will keep adding 1, even when there is no element/index for that.
   circleIndex++

   // statement means that: if the circleIndex is the same as circleSizes.length ('.length' means that we are focusing on the length parameter), then we want  to set the circleIndex back to 0.
   // '==' means 'the same as'
   if (circleIndex == circleSizes.length) {
    circleIndex = 0;
   }


}
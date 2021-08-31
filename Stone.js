//create a class for Stone
class Stone{
//create the constructor
constructor(x, y, r){
//declare behaviour
var options = {
//define behaviour
isStatic : false,
density : 1.0
};
//define properties
this.x = x;
this.y = y;
this.r = r;
//create a body for each object
this.body = Bodies.circle(x, y, r, options);
//add each and every object in the World
World.add(world, this.body);
}
//function to show the objects
display(){
//function to store new values
push();
//set a specific size for the outline
strokeWeight(this.r / 10);
//set a specific color for the outline
stroke("green");
//set a specific color to fill the object
fill("blue");
//create a soecific shape's blueprint
ellipse(this.x, this.y, this.r, this.r);
//function to revert back to old settings
pop();
}
}
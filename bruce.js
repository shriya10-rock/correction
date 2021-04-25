class bruce_wayne {

constructor(x,y){

var options={
isStatic:true,
}
this.image=loadImage("Walking Frame/walking_1.png");
this.body=Bodies.circle(x,y,50,options);
this.radius =50;
World.add(world,this.body);

}

display(){
    var pos=this.body.position;

/*push();



translate(pos.x,pos.y)*/

imageMode(CENTER);
// instead of zero just use pos.x, pos.y
image(this.image,0,0,200,200);

pop();

}


}
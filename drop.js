class Drops {
constructor(x,y,r){

 var options={

    isStatic:false,
    density:1,
    friction:0.3,
    restitution:0.1

 }
this.r=r;
this.x=x;
this.y=y;
 this.body=Bodies.circle(x,y,this.r,options);

}
/*display(){

push();

var pos=this.body.position;

ellipseMode(RADIUS);

ellipse(pos.x,pos.y,this.r,this.r);

pop();*/
// not required

   


updatePosition(){

if(this.Drops.position.y>height){
Matter.setPosition(this.Drops,{x:random(0,400),y:random(0,400)});
}


}

// one more function has to be created showDrop
// use ellipse command and fill blue color in it. this will give effect of rain

}
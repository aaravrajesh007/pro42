class Drops{
    constructor(x,y){
        var options={
            friction:0.1
        }
        this.body=Bodies.circle(x,y,r,options)
        this.r=r;
        world.add(world,this.body)
    }
    update(){
    if(this.body.position.x>height){
         ellipseMode(RADIUS);
         ellipse(pos.x,pos.y,this.r,this.r)
         Matter.Body.setPosition(this.body,{x:random(0,600),y:random(0,800)})
    }
    }
}
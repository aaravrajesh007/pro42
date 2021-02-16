class Umbrella{
    constructor(x,y){
        var options={
            isStatic:true
        }
        this.body=Bodies.circle(x,y,r,options)
        this.r=r;
        world.add(world,this.body)
        this.image=loadImage("images/WM/walking_1.png");
        }
      display(){
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
      } 
}
class Paperball{
    constructor(x,y){
        
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2

        }
        
        this.body=Bodies.circle(x,y,40,options)
        World.add(world,this.body)

    }
    display(){
        this.image=loadImage("paper.png")
        strokeWeight(4)
        stroke("blue")
        fill("blue")
    
        push()
        translate(this.body.position.x,this.body.position.y)
        rotate(this.body.angle)


        
        circle(0,0,40)
        pop()
    }
}
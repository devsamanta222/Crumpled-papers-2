class Ground{
    constructor(x,y,width,height){
        var goptions={
            isStatic:true
          }
          this.body=Bodies.rectangle(x,y,width,height,goptions)
          this.width=width
          this.height=height
          World.add(world,this.body)
        
    }
    display(){
        fill("white")
        strokeWeight(4)
        stroke("black")
        rectMode(CENTER)
  rect(this.body.position.x, this.body.position.y, this.width,this.height)

    }
}
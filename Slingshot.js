class Sling{

    constructor(a,b){
        var options={
        bodyA:a,
        bodyB:b,
        stiffness:0.02,
        length:10
        }

        this.sling=Constraint.create(options)
        World.add(world,this.sling)
    }

    display(){

        strokeWeight(4)
        stroke(5)
        line (this.sling.bodyA.position.x,this.sling.bodyA.position.y,
            this.sling.bodyB.position.x,this.sling.bodyB.position.y)
    }
}
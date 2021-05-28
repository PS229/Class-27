class Constrain {
    constructor(bodyA, bodyB) {
        var options = {
            bodyA:bodyA,
            bodyB:bodyB,
            stiffness:0.04,
            length:10
        }
        this.constrain = Constraint.create(options)
        World.add(world,this.constrain)
    }
    display() {
        var pointA = this.constrain.bodyA.position
        var pointB = this.constrain.bodyB.position
        strokeWeight(4)
        line(pointA.x,pointA.y,pointB.x,pointB.y)
    }
}
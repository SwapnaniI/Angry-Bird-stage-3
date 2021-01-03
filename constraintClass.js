class ConstraintChain{
    constructor(obj1,obj2){
var options = {
    bodyA : obj1,
    bodyB : obj2,
    stiffness: 0.6,
    length : 60
}
this.constraint = Constraint.create(options)
World.add(world,this.constraint)
    }
    display(){
        var poA=this.constraint.bodyA.position
        var poB=this.constraint.bodyB.position
        strokeWeight(5)
        line(poA.x,poA.y,poB.x,poB.y)
    }
}
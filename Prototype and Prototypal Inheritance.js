let object ={
    name: 'Asif',
    city: 'Bhiwandi',
    getIntro: function(){
        console.log(this.name + "from" + this.city);
    }
}

let object2 ={
    name: 'Raza'
}

object2.__proto__  = object;

console.log(object2.name)
console.log(object2.city)
console.log(object2.__proto__)
console.log(object.getIntro())
console.log(object2.getIntro())



Function.prototype.mybind = function(){
    console.log('Inheritance')
}

function fun(){

}

console.log(fun.mybind())
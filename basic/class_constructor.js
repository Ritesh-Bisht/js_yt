// ES6 

class user {
    constructor(name, email, password){
        this.name=name
        this.email=email
        this.password=password
    }
    encryptPassword(){
        return `${this.password}abc`
    }
    changecase(){
        return `${this.name.toUpperCase()}`
    }
}


const chai = new user("chai", "@gmail", 123)
console.log(chai.encryptPassword())
console.log(chai.changecase())

// BEHIND THE SCENES
 function u(){

 } // u can behave like objects
 u.prototype.encrypt= function(){

 }

class human{
    constructor(name){
        this.name=name;
    }
    logme(){
        console.log(`USERNAME is ${this.name}`);
    }
}
class teacher extends human{
    constructor(name, email, password){
        super(name) // this will work as .call(this, name)
        this.email=email
        this.password=password
    }
    addCourse(){
        console.log(`A new added by ${this.name}` )
    }
}
 const c = new teacher("chai", "@gmail",123)

 c.addCourse()


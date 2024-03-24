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

class human{ // parent : human class 
    constructor(name){
        this.name=name;
    }
    logme(){
        console.log(`USERNAME is ${this.name}`);
    }
}
class teacher extends human{ // child : teacher class
    constructor(name, email, password){
        super(name) // this will work as .call(this, name)
        this.email=email
        this.password=password
    }
    addCourse(){
        console.log(`A new course added by ${this.name}` )
    }
}
const c = new teacher("chai", "@gmail",123)
c.addCourse()
c.logme()

const t = new human("masala")
t.logme()
console.log(c instanceof(human));

class u1{
    constructor(name){
        this.name=name
    }
    logme(){
        console.log(`USERNAME : ${this.name}`);
    }
    static createId(){
        return `123`
    }
}

const h = new u1("hit")
// console.log(h.createId()); // static can not access

class u2 extends u1{
    constructor(name, email){
        super(name)
        this.email = email
    }
}

const i = new u2("phone", "@gmail")
console.log(i.createId())


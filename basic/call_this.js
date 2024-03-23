function setuser(n){
    // complex DB Calls
    this.n=n; // this of createuser will be called
    console.log(`called`);
}

function createuser(n,e,p){
    // setuser(n) this will not called
   //  setuser.call(n)  this will be called but not hold reference of this execution context
    setuser.call(this,n) // this will give reference  
    this.e=e
    this.p=p

}
const  chai = new createuser("chai104","chai@.com",123)
console.log(chai);
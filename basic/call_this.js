function setuser(n){
    // complex DB Calls
    this.n=n;
    console.log(`called`);
}

function createuser(n,e,p){
    // setuser(n) not called
    setuser.call(this, n)
    this.e=e
    this.p=p

}
const  chai = new createuser("chai104","chai@.com",123)
console.log(chai);
const u={
    name:'h',
    price:199,
    wel:function(){
        console.log(`${this.name} , welcome to our website`)
        console.log(this)
    }

}
// u.wel()
// u.name='hit'
// u.wel()

console.log(this)
function chai(){
    let x='hello'
    console.log(this.x)
}
chai()

const chai2=function(){
    let un='hel'
    console.log(this.un)
}
chai2()
const chai3= () =>{
    uns=`hello`
    console.log(this)
    console.log(this.uns)
}
chai3()

const add= (a,b) =>  {   
    return a+b
}

const add2= (a,b) => (a+b)
const add3= (a,b) => a+b
console.log(add(5,1))
console.log(add2(5,1))
console.log(add3(5,1));

// (IIFE) immediately invoked function expressions
(function chai4(){
    // naned iife
    console.log(`DB CONNECTED`);
})(); //  ( ; ) is must for 2 iife

(  (name) => {
    // un named iife
    console.log(`${name} DB CONNECTED 2`)
}) ('ritesh')


function addt(n1,n2)
{
    console.log(n1+n2)
}
function add2(n1,n2)
{
    return n1+n2
}
addt(6,9)
addt(6,"9")
addt(6,"a")
res=add2(6,9)
console.log("result is : ",res)
function log(u="sam")
{
    if(!u){
        console.log(" please enter a username ")
    return 
}
    return`${u} just logged in`
}
console.log(log("ritesh"))
console.log(log())
function cal(...n1)
{
    return n1
}
console.log(cal(20,70))
console.log(cal(200,300,400,500))
const u1={
    u:"rb",
    price:200
}
function f1(any)
{
    console.log(`username is ${any.u} and price is ${any.price}`)
}
console.log()
f1(u1)
f1({
    u:"h",
    price:300
})
const arr = [2,3,4,5]
function fc2(getarr)
{
    return getarr[2]
}
console.log(fc2(arr))
console.log(fc2([20,30,40,50]))

console.log(one(5))

function one(n){
    return n+1
}

 console.log(two())
const two=function(){
    const web='hi'
}


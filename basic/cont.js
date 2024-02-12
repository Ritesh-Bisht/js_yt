// if 
const isloggedin=true
if(3!=2)
{
    console.log(`hello 1`)
}
if(2=='2')
{
    console.log(`hello 2`)
}
if(2==='2')
{
    console.log(`hello 3`)
}
// falsy values : 0,false,-0,BigInt 0n,"",null,undefined,NaN
// truthy values : "0","false"," ",[],{},function(){}

// nullish coelescing operator (??) : null,undefined
let val1;
val1= 5 ?? 10
val1= null ?? 10
val1= undefined ?? 15
val1=null ?? 10 ?? 20
console.log(`${val1}`)

// cond ? true : false
const ice =100
 ice >=80 ? console.log(`more than or equal`):console.log(`less than`)

 for(let i=0;i<5;i++)
 {

 }

const arr = [7,8,9,6]
const greet="hello"
 for (const i of greet) {
    console.log(`each char is ${i}`)
 }
 
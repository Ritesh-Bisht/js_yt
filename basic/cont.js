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

const mpp= new Map()
mpp.set('in','india')
mpp.set('usa','united')
mpp.set('fr','france');

for(const [k, v] of mpp) // map is not ieteratable only with key
{
    console.log(`${k}:-${v}`)
}
const obj = {
    py:'python',
    c:'c',
    cpp:'c++',
    js:'javascript',
    java:'java'
}
for (const k in obj) {
    console.log(`${k} s the shortcut of ${obj[k]}`)
};
const cd=['js','ruby','python','cpp','c','java']
cd.forEach(function (value){
    console.log(value)
});
cd.forEach(element => {
    console.log(element)
});
function printme(it)
{
    console.log(it)
}
cd.forEach(printme)
const mycd=[ // keys of object can be anything 0,1,2 or a,b,c
    {
        lang:'javascript',
        file:'.js'
    },
    
    {
      lang:'c++',
      file:'.cpp'
    }   
]
mycd.forEach((it)=>
{
    console.log(it.lang," :",it.file)
})

const val2=cd.forEach( (item)=>{
    console.log(item);
    return item; // return undefined always
})
console.log(val2)

const mynums=[6,5,4,3,7,8,9,10,1,2]
const newnums = mynums.filter((num)=> {
   return num > 4 // when {} is used then add return also
}
)
console.log(newnums)
const newnums2=[]
mynums.forEach((num)=> // works same as filter
{
    if(num>4){
        newnums2.push(num) 
    }
})
let u1=mycd.filter( (b)=> b.genre==='history')
let u2=mycd.filter((bk)=> bk.publish>=1995 && bk.genre ==='history')
console.log(u1)
console.log(u2)


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

const tr = (mynums.map((num)=> num+10 ))
console.log(tr)
const newnums3 = mynums
  .map((num)=> num*10 ) // chaning return 10,20,30
  .map((n)=> n+1)
  .filter((n)=> n>=40 );

console.log(newnums3);

// reduce 
const mn=[1,2,3,4,5]

const tl = mn.reduce(function(acc,cur){
    console.log(`accumulator:${acc} and current:${cur}`)
    return acc+cur
},0)
console.log(tl)

const ttl = mn.reduce((a,c)=>a+c,0)
console.log(ttl)
const  shopping=[
    {
        name:"py",
        price:99
    },
    {
        name:"js",
        price:199
    },
    {
        name:"cpp",
        price:299
    },
    {
        name:"dsa",
        price:1299
    },
    {
        name:"web",
        price:1999
    },
    {
        name:"java",
        price:199
    }
]
pay=shopping.reduce((acc,arr)=>acc+arr.price,0)
console.log(pay)
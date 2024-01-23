// treat all js code as newer version
console.log("hello world")
const accountId = 51
let accountEmail='gmail.com'
var accountPassword=1001;
acountCity="dun"
let accountState
// accountId=2   assignment to const variable isn't allowed 
accountEmail='world@'
acountCity="dehradun"
console.log(accountId)
console.table([accountId,accountEmail,accountPassword,acountCity,accountState])
let sc=1
console.log(typeof sc)
console.log(typeof (sc))
let val=String(sc)
console.log(typeof (val))
console.log(val)

let s1="hello "
let s2= "world"
console.log(s1+s2)
console.log("1"+2)
console.log(1+"2")
console.log(1+2+"2")
console.log("1"+2+2)
let n1,n2,n3
n1=n2=n3=6

const id= Symbol('234')
const aid= Symbol('234')
console.log(id==aid)

// const bign=58577777777847589879598697897989n
const arr=["1","2","3"]
let mobj = {
    nm: "r",
    a: 20
}
const  fun=function()
{
  console.log("woorld")
}
console.log(typeof(bign))

const rc=50
const m="x1"
console.log(`hello my name is ${m} and my rc is ${rc}`)
const game = new String('ff-max-fire')
console.log(game.__proto__)
console.log(game.length)
console.log(game.toUpperCase())
console.log(game.charAt(2))
console.log(game.indexOf('f'))

const ns = game.substring(0,2)
console.log(ns)
const ans = game.slice(-3,4)
console.log(ans)
const url = "https://rb.com/r%20b"
console.log(url.replace('%20','-'))
console.log(url.includes('rb'))
console.log(game.split('-'))
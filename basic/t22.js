const mysymbol=Symbol("key2")
const ob1 = {
    name:"ritesh_bisht",
    em:".com",
    [mysymbol]:"hello"
}
console.log(ob1.em)
console.log(ob1["em"])
console.log(ob1["name"])
console.log(ob1[mysymbol])
ob1.em="rb.com"
// Object.freeze(ob1)
console.log(ob1)
ob1.greeting=function(){
    console.log(`hello js user, ${this.name}`)
}
ob1.greeting()
console.log(ob1.greeting())
console.log(ob1.greeting)

const t_user = new Object() // singelton object
const user = {}
user.id=22
user.name="mb"

const r_user = {
    em:"gmail",
    full:{
        first:"hi",
        second:"how"
    }
}
console.log(r_user.full?.second);
const ob2={5:5,6:6}
const ob3={1:"a",2:2}
const ob4={3:"b",4:4}
//  ob5={ob3,ob4}
//const ob6 = Object.assign({},ob3,ob4,ob2)
const ob6={...ob2,...ob3,...ob4}
console.log(ob6)

const muser = [
    {
        id:1,
        uname:"h@gmail"
    },
    {},
    {},
    {},
    {},
]

console.log(Object.keys(ob1))
console.log(Object.values(ob1))
console.log(Object.entries(ob1))

const course = {
    name:"js",
    price:299,
    inst:"hit",
}
const {inst:i}=course
console.log(i)
const navbar = ()=>{

}



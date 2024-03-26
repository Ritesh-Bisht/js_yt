class user {
    constructor(email, password ){
        this.email=email
        this.password=password
    }
    get password(){
        return `${this._password}hit`
    }
    set password(val){
        this._password=val
    }
    get email(){
        return this._email.toUpperCase()
    }
    set email(val){
        this._email=val
    }
}

// method 2

const hit=new user("@gmail","helllo")
console.log(hit.password)
console.log(hit.email)

function User(email, password)
{
    this._email=email
    this._password=password

    Object.defineProperty(this,'email',{
        get:function(){
            return this._email.toUpperCase()
        },
        set:function(val){
            this._email=val
        }
    })
}


// method 3

const u={
    _email:'h@gmail.com',
    _password:'abc',

    get email(){
        return this._email.toUpperCase()

    },
    set email(val){
        this._email=val
    }
}
let obj = Object.create(u)
console.log(obj.email);
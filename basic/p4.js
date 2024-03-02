let num = parseInt(Math.random()*100 + 1)
console.log(` NUMBER : ${num}`);
const sub = document.querySelector('#subt')
const ip = document.querySelector('#guessField')
const gslot = document.querySelector('.guesses')
const rem = document.querySelector('.lastResult')
const loh = document.querySelector('.lowOrHi')
const start = document.querySelector('.resultParas')

const p = document.createElement('p')

let prev = [] // array 
let nguess = 1 // no of guesses
let playgame = true

if(playgame){
    sub.addEventListener('click',function(e){
        e.preventDefault();
        const g = parseInt(ip.value)
        console.log(g);
        valid(g)
    })
}

function valid(guess){
    // validate 
    if(isNaN(guess))
    {
        alert(`PLEASE ENTER A VALID NUMBER `)
    }else 
    if(guess < 1)
    {
        alert(`PLEASE ENTER A VALID NUMBER `)
    } else
    if(guess > 100)
    {
        alert(`PLEASE ENTER A VALID NUMBER `)
    } else{
        prev.push(guess)
        if(nguess >= 11 ){
            display(guess)
            display_message(`GAME OVER , RANDOM NUMBER WAS : ${num}`)
            endgame()

        }else{
            display(guess)
            check(guess)
        }
        
    }



}

function check(guess){
    // 
    if(guess === num){
        display_message(`YOU GUESSED IT RIGHT `)
    }else if( guess < num )
    {
        display_message(`NUMBER IS TOOO LOW`)
    }
    else if(guess > num )
    {
        display_message(`NUMBER IS TOO HIGH `)
    }
}

function display_message(m) {
    //
    loh.innerHTML=` <h2> ${m} </h2>`
}

function display(guess) {
    //
    ip.value = ""
    gslot.innerHTML+=`${guess} , `
    nguess++;
    rem.innerHTML = `${11 - nguess} `
}

function endgame() {
    //
    ip.value = ""
    ip.setAttribute('disabled', '')
    p.classList.add('.button')
    p.innerHTML = `<h2 id="gm" > START NEW GAME </h2>`;
    start.appendChild(p)
    playgame = false;
    newgame()
}
function newgame() {
    //
    const gbutton= document.querySelector('#gm')
    gbutton.addEventListener('click', function(e)
    {
        num = parseInt(Math.random()*100 + 1);
        prev=[]
        nguess=1
        gslot.innerHTML=``
        rem,innerHTML=`${11-num}, `
        ip.removeAttribute('disabled')
        start.removeChild(p)

        playgame = false;
    })
}

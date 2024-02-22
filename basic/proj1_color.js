const bu=document.querySelectorAll('.button')
const b= document.querySelector('body')

bu.forEach(function (bu){
    console.log(bu);
    bu.addEventListener('click',function(e)
    {
        console.log(e);
        console.log(e.target)



        
})

console.log(`ritesh bisht`)
const bu=document.querySelectorAll('.button')
const b= document.querySelector('body');

bu.forEach(function (bu){
    console.log(bu);
    bu.addEventListener('click',function(e)
    {
        console.log(e);
        console.log(e.target)
        if(e.target.id==='green')
        {
            b.style.backgroundColor=e.target.id;
        }
        if(e.target.id==='white')
        {
            b.style.backgroundColor=e.target.id;
        }
        if(e.target.id==='orange')
        {
            b.style.backgroundColor=e.target.id;
        }
        if(e.target.id==='pink')
        {
            b.style.backgroundColor=e.target.id;
        }
        if(e.target.id==='red')
        {
            b.style.backgroundColor=e.target.id;
        }

    });

});
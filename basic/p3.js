const cl = document.getElementById('clock')
// const cl = document.querySelector('#clock')  ..both are same

setInterval(function(){
    let d = new Date();
    console.log(d.toTimeString())
    cl.innerHTML = `<div>
        <p> time string : ${d.toTimeString()} </p>
        <p> date string : ${d.toDateString()} </p>
        <p> locale time string : ${d.toLocaleTimeString()} </p>
        <p> locale date string : ${d.toLocaleDateString()} </p>
        <p> locale string : ${d.toLocaleString()} </p>
        </div>`;
}, 1000)
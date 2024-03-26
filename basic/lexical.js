function outer(){
    let name="hot"

    function inner(){
        console.log("INNER ",name);
    }
   inner()

}
outer()
console.log("TOO OUTER ",name);
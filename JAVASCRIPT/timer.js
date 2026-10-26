let btn=document.getElementById("btn");
let counterValue=document.getElementById("counterValue");
let count=0;
btn.addEventListener("click",()=>{
    count++;
    counterValue.textContent=count;
});

add.addEventListener("click",()=>{
    count++;
    counterValue.textContent=count;
});
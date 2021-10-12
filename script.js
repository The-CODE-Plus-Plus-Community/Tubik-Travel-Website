console.log("gii");
var list = document.querySelectorAll(".list-group");
console.log(list);
list.forEach(e, ()=>{
    // console.log(e)
e.addEventListener("click",()=>{
    e.classList.add("active");
})
})

console.log("hii");

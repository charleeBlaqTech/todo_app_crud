const completed=document.querySelectorAll(".check");

completed.forEach((check)=>{
    check.addEventListener('click',(e)=>{
        e.target.nextElementSibling.classList.toggle("completed")
    })
})
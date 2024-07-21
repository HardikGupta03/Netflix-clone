let allQuestion=document.querySelectorAll(".faquestion");


allQuestion.forEach((element,idx)=>{
    element.addEventListener("click",()=>{
        element.nextElementSibling.classList.toggle("active")
        element.children[1].classList.toggle("ic")
   
    allQuestion.forEach((el,i)=>{
  if(i!=idx){
    el.nextElementSibling.classList.remove("active")
    el.children[1].classList.remove("ic")
  }
    })
})
})
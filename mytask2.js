
// smallscreen navbar drop down 
let bar = document.getElementById("togglecontainer");
var tole=0;
bar.addEventListener("click",(e)=>{
  e.preventDefault();
  let s = document.getElementById("smallnavbar");
  if(tole%2==0){
     s.style.animation="navanim 1s ease forwards"
  tole++;
  }
  else{
     s.style.animation="navanim2 1s ease forwards"
    tole++;
  }
})

// adding bottom border to inputbox with animation
let inp=document.querySelectorAll(".inp");
let inpbox=document.querySelectorAll(".inpbox");
for(let i=0;i<4;i++){
  inp[i].addEventListener("click",()=>{
    inpbox[i].style.animation="textborder1 1s ease forwards"
  })
  inp[i].addEventListener("blur",()=>{
    inpbox[i].style.animation="textborder2 0.5s ease forwards"
  })
}
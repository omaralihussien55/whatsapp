let navLink = document.querySelectorAll(".nav-lin");
let section_WH = document.querySelectorAll(".wh");
let ball = document.querySelectorAll(".ball");
let sliderIMG = document.querySelectorAll(".slider img");
let statusSlider = document.querySelector(".status-slider");
let blockStatus = document.querySelector(".block-status");
let my_status_img= document.querySelector('.my_status_img');
let app = document.querySelector(".content");
let photo = document.querySelector(".photo");
let startChat= document.querySelector(".start-chat");
let blockChat= document.querySelectorAll(".blok-chats");

let srcPhoto ;
navLink.forEach(i=>{
   i.addEventListener('click',function(e){
if(photo.classList.contains("select") ||statusSlider.classList.contains("select") ){

}else{
   navLink.forEach(i=>i.classList.remove("active"));
   section_WH.forEach(i=>i.classList.remove("active"));
   ball.forEach(i=>i.classList.remove("active"));
     document.getElementById(`${e.target.dataset.id}`).classList.add("active");
     document.querySelector(`[data-ball=${e.target.dataset.id}]`).classList.add("active");
      e.target.classList.add('active');
}
   })
})

blockStatus.onclick = function(){
   if(my_status_img.id== "green"){
      navLink.forEach(i=>i.classList.remove("active"));
      section_WH.forEach(i=>i.classList.remove("active"));
      statusSlider.style.display = 'block';
     
   }else{
      app.style.display="none";
    
      photo.classList.add("select")
      photo.src=srcPhoto;
      // srcPhoto = photo.src;
       document.querySelector(".ball").style.display='none';
       document.querySelector(".ball-pen").style.display="none"
      setTimeout(function(){
         photo.classList.remove("select");
         app.style.display="block"
         document.querySelector(".ball").style.display='block';
         document.querySelector(".ball-pen").style.display="block";
         photo.src=srcPhoto
      },3000)
   
   }
 
}

sliderIMG.forEach(i=>{
   i.addEventListener('click',function(e){
      let src =e.target.src;
      let id = e.target.dataset.id;
      statusSlider.style.display = 'none';
      navLink.forEach(i=>i.classList.remove("active"));
      section_WH.forEach(i=>i.classList.remove("active"));
      ball.forEach(i=>i.classList.remove("active"));
   
      document.querySelector(`[data-ball=${e.target.dataset.id}]`).classList.add("active")
        document.getElementById(`${e.target.dataset.id}`).classList.add("active");
        statusSlider.classList.remove("select");
        document.querySelector(".info-status").textContent=""
        my_status_img.src = src;
       srcPhoto = src
        my_status_img.id="red";
   })
})


function camira(){
   navLink.forEach(i=>i.classList.remove("active"));
   section_WH.forEach(i=>i.classList.remove("active"));
   statusSlider.style.display = 'block';
   statusSlider.classList.add("select");
}
document.querySelector(".ball-camera").onclick =camira;
document.getElementById("ball-camera").onclick =camira;
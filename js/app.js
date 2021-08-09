let drowdown_item = document.querySelector('.drop-down .nav-link');
let menu = document.querySelector('.dropdownmenu-small-screen');
let Main_menu = document.querySelector('.navbar-ul');
let close_menu = document.querySelector('.dropdownmenu-small-screen .backBtn');
let checkBox = document.querySelector('.checkbtn');
let collpase_btn = document.querySelectorAll('.collpase-btn');


// menu button
checkBox.addEventListener('click',function(){

     let id =  document.getElementById('show-navbar-ul');
       if(id != null){
        Main_menu.removeAttribute('id','show-navbar-ul');
       }
       else {
         Main_menu.setAttribute('id','show-navbar-ul'); 

       }

  });

  // dropdown function
drowdown_item.addEventListener('click',function(){

   menu.style.display = 'block';

   Main_menu.removeAttribute('id','show-navbar-ul');
 
});

// close function
close_menu.addEventListener('click',function(){

    menu.style.display = 'none';

     Main_menu.setAttribute('id','show-navbar-ul');

 });


 //inner width capture function 
window.onresize = function() {        
   let broswerWidth = window.innerWidth; 
if(broswerWidth > 1050 && broswerWidth < 1180 ){
    menu.style.display = 'none';
    Main_menu.setAttribute('id','show-navbar-ul');
 }
};
window.onresize = function() {        
  let broswerWidth = window.innerWidth; 
if(broswerWidth > 1060 ){
   let link = document.querySelector('.navbar-ul .drop-down .nav-link');
   link.addEventListener('click',function(){
       location.href = location.hostname;
   });
}
}
collpase_btn.forEach(function(btns){
     btns.addEventListener('click',function(e){
     let   target = e.currentTarget.parentElement.lastElementChild;
     target.classList.toggle("show-collapse-menu")
     });
});

//slider 

var current = 0,
    slides = document.querySelectorAll(".slider .img-container .slide");

setInterval(()=>{
   for(let i=0; i<slides.length; i++ ){
       slides[i].style.opacity = 0;
   }
    current  = (current != slides.length - 1) ? current + 1 : 0;
    slides[current].style.opacity = 1;
},6000);
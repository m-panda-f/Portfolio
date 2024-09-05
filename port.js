
        
function dark(){
    const lo= document.getElementById("left");
   const lw=document.getElementById("home");
   const a=document.getElementById("abt");
   const c=document.getElementById("cont");
   const p=document.getElementById("proj");
   const y=document.getElementById("p");
   a.style.background = "black";
   a.style.borderRadius = "12px";
   a.style.color= "white";
   y.style.color='white'
   c.style.background = "black";
   c.style.borderRadius = "12px";
   c.style.color= "white";
   p.style.background = "black";
   p.style.borderRadius = "12px";
   p.style.color= "white";
   lw.style.color = "white";
   lo.style.backgroundColor = "black";
   
}
function light(){
   const lo= document.getElementById("left");
   const lw=document.getElementById("home");
   const a=document.getElementById("abt");
   const c=document.getElementById("cont");
   const p=document.getElementById("proj");
   const y=document.getElementById("p");
   const tt=document.getElementById("toggle-off");

   tt.style.backgroundColor= "black";
   a.style.background = "#fffffff3";
   a.style.color= "black";
   a.style.borderRadius = "12px";
   y.style.color='black'
   p.style.background = "#fffffff3";
   p.style.color= "black";
   p.style.borderRadius = "12px";
   c.style.background = "#fffffff3";
   c.style.color= "black";
   c.style.borderRadius = "12px";
   lw.style.color = "black";
   lo.style.backgroundColor = "#fffffff3";
}
document.getElementById('menu-button').addEventListener('click', function() {
    var navUl = document.querySelector('#navb ul');
    navUl.classList.toggle('active');
});

    
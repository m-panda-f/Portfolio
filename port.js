
        
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
function myFunction(x) {
    x.classList.toggle("change");
  }
document.getElementById('menu-button').addEventListener('click', function() {
    var navUl = document.querySelector('#navb');
    navUl.classList.toggle('active');
});

document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.getElementById('menu-button');
    const navMenu = document.querySelector('#navb ul');

    // Toggle the menu when menu button is clicked
    menuButton.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });

    // Hide the menu when a menu item is clicked
    navMenu.addEventListener('click', function(event) {
        if (event.target.tagName === 'A') {
            navMenu.classList.remove('active');
        }
    });
});


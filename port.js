
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


function updateClock() {
   const currentDate = new Date();
   const options = { day: 'numeric', month: 'short', year: 'numeric' };
   const currentDateString = currentDate.toLocaleDateString('en-US', options);
   const currentTimeString = currentDate.toTimeString().split(' ')[0]; // Format: HH:mm
   
   // Update the displayed current date and time
   document.getElementById("currentDate").innerHTML = currentDateString;
   document.getElementById("currentTime").innerText = currentTimeString;
   document.getElementById('calendar').value = currentDateString;
}

// Call the updateClock function every second
setInterval(updateClock, 1000);

// Initial call to display the current date and time immediately
updateClock();


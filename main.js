//Show and hide nav bar toggle
const navMenu=document.getElementById('nav-Menu'),
    toggleMenu=document.getElementById('toggle-Menu'),
    closeMenu=document.getElementById('close-Menu')

    toggleMenu.addEventListener('click',()=> {
       navMenu.classList.toggle('show')
    })
    closeMenu.addEventListener('click',()=> {
       navMenu.classList.remove('show')
    })
   //contact form validations
     
        // Get the modal
      var modal = document.getElementById('id01');

       // When the user clicks anywhere outside of the modal, close it
      window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
    }
}
/*Prompt box*/
var person = prompt("Please enter your name",  "USER");

if (person == null || person == "") {
    txt = "Welcome to my page";
} else {
    txt = "Hello " + person + "! Welcome to my Page";
}
document.getElementById("greet-text1").innerHTML = txt;

//Display time
setInterval(myFunction, 1000);

function myFunction() {
  let d = new Date();
  document.getElementById("time").innerHTML=
  d.getHours() + ":" +
  d.getMinutes() + ":" +
  d.getSeconds();
};
//social links with window.location
function linkedin() {
  window.location.assign("https://www.linkedin.com/in/achu-agbama-3540951b4/")
}
function github() {
  window.location.assign("https://github.com/Achufam24")
}
//device online
if (navigator.onLine) {
  alert('Device online')
}
else{
  alert('Offline Mode')
}
//history back 
function page() {
  window.history.back();
}
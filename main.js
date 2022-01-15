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
var person = prompt("Please enter your name",  "Harry Potter");

if (person == null || person == "") {
    txt = "Welcome to my page";
} else {
    txt = "Hello " + person + "! Welcome to my Page";
}
document.getElementById("prompt").innerHTML = txt;

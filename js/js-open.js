
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction1() {
  document.querySelector('[myDropdown]').classList.toggle("show");  
}

function myFunction2() {
  document.querySelector('[myDropdown2]').classList.toggle("show");  
}

function myFunction3() {
  document.querySelector('[myDropdown3]').classList.toggle("show");  
}

function myFunction4() {
  document.querySelector('[myDropdown4]').classList.toggle("show");  
}

function myFunction5() {
  document.querySelector('[myDropdown5]').classList.toggle("show");  
}

function myFunction6() {
  document.querySelector('[myDropdown6]').classList.toggle("show");  
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

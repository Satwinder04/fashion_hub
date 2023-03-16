// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 100;
  document.documentElement.scrollTop = 100;
}

function myFunction() {
  var x = document.getElementById("input-search");
  // var x = document.getElementsByClassName("input-search:focus")
  if (x.style.width === "150px") {
    x.style.width = "150px";
  } 
  else {
    x.style.width = "200px";
  }
  
}


  


const toolbarIcon = document.querySelectorAll(".footer-content nav ul li a img");
const toolbarButton = document.querySelectorAll(".footer-content nav ul li a");

document.addEventListener('click', (event) => {
   buttonClicked = event.target.parentNode; 
   buttonIconClicked = buttonClicked.children;

   toolbarButton.forEach(button => {
      if(buttonClicked === button ) {
         console.log("é igual")
         buttonClicked.classList.add('active-toolbar-button')
      } else if (buttonClicked !== button) {
         // console.log(buttonNotClicked[0])
         button.classList.remove('active-toolbar-button');
      }  
   });
});


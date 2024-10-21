function dropdownMenu(){
    let x = document.getElementById("nav-collaps")
    if(x.className === "nav-items"){
        x.className += " responsive"
    }else{
        x.className = "nav-items"
    }
}



function navBorder() { 
  let items = document.getElementsByClassName('item');
  let menus = document.querySelectorAll('.menu-1, .menu-2, .menu-3'); // Use a selector for the specific menu classes

  for (let i = 0; i < items.length; i++) {
    items[i].addEventListener('click', (function(index) {
      return function() {
        // Remove 'nav-border' from all items
        for (let j = 0; j < items.length; j++) {
          items[j].classList.remove("nav-border");
          menus[j].style.display = "none";
        }
        // Add 'nav-border' to the clicked item
        this.classList.add("nav-border");
        menus[index].style.display = "block"; // Show the corresponding menu
      };
    })(i));
  }
}











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
  let menus = document.getElementsByClassName('menu'); 

  for (let i = 0; i < items.length; i++) {
    items[i].addEventListener('click', (function(index) {
      return function() {
        // Remove 'nav-border' from all items
        for (let j = 0; j < items.length; j++) {
          items[j].classList.remove("nav-border");
          menus[j].style.display = "none";
        }
        
        this.classList.add("nav-border");
        menus[index].style.display = "grid"; 
      };
    })(i));
  }
}











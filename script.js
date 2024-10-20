function dropdownMenu(){
    let x = document.getElementById("nav-collaps")
    if(x.className === "nav-items"){
        x.className += " responsive"
    }else{
        x.className = "nav-items"
    }
}
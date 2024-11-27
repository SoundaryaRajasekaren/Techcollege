var productcontainer = document.getElementById("products")
var search = document.getElementById("search")
var productlist = productcontainer.querySelectorAll("div")
search.addEventListener("keyup", function(){
    var enteredvalue = event.target.value.toUpperCase()
    for (i = 0; i < productlist.length; i++) {
        var productname = productlist[i].querySelector("p").textContent
        if (productname.toUpperCase().indexOf(enteredvalue) < 0) {
            productlist[i].style.display = "none"
        }
        else {
            productlist[i].style.display = "block"

        }
    }
}
)
var sidenav=document.querySelector(".side-navbar")
function shownav(){
sidenav.style.left= "0"
}
function closenav()
{
sidenav.style.left="-60%"
}
// Active button on navbar
var headerUl = document.querySelector(".headerUl");
var liLists = headerUl.querySelectorAll("li");
liLists.forEach(liList => {
    var a = liList.querySelector("a");
    if(liList.classList.contains("active")){
        a.style.color = "#FFFFFF";
    }
    liList.addEventListener("click", (e) =>{
        var current = document.querySelectorAll(".active");
        current[0].classList.remove("active");  // remove active class from old active btn
        current[0].querySelector("a").style.color = "#383838"; // reset color
        liList.classList.add("active"); // add active class for new active btn
        liList.querySelector("a").style.color = "#FFFFFF";  // set color
        // console.log(liList);
    });
});
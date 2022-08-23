// Active button on navbar

var headerUl = document.querySelector(".headerUl");
var liLists = headerUl.querySelectorAll("li");
liLists.forEach(liList => {
    liList.addEventListener("click", (e) =>{
        var current = document.querySelectorAll(".active");
        current[0].classList.remove("active");       
        liList.classList.add("active");
        // console.log(liList);
    });
});
const body = document.querySelector("body"),
    nav = document.querySelector("nav"),
    searchBox = document.querySelector(".searchBox"),
    open = document.querySelector(".open"),
    close = document.querySelector(".close");


    searchBox.addEventListener("click", ()=>{
        searchBox.classList.toggle("active");
        // nav.classList.add("active");
    });


//for side bar

open.addEventListener("click",()=>{
    nav.classList.add("active");
})
body.addEventListener("click", e =>{
    let clickedElm = e.target;

    if(!clickedElm.classList.contains("open") && !clickedElm.classList.contains("menu")){
        nav.classList.remove("active");
        searchBox.classList.remove("active");
    }
})

// for data from googlesheets
document.addEventListener('DOMContentLoaded', function () {
    var fullName = localStorage.getItem('fullName');
    if (fullName) {
        document.getElementById('fullName').textContent = fullName;
    } else {
        alert('No user information found.');
        window.location.href = "index.html";
    }
});


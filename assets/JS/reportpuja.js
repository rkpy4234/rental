const body = document.querySelector("body"),
       header = document.querySelector("header"),
       nav = document.querySelector("nav"),
       modeToggle = document.querySelector(".dark-light"),
       searchBox = document.querySelector(".searchBox"),
       open = document.querySelector(".open"),
       close = document.querySelector(".close");
      

       // nav bar scroll up and down with windows

       let prevScrollpos = window.pageYOffset;
       window.addEventListener("scroll", ()=>{
           let currentScrollpos = window.pageYOffset;
       if(prevScrollpos < currentScrollpos){
            header.classList.add("hide");
            arrowTop.classList.add("show");
       }else{
            header.classList.remove("hide");
            arrowTop.classList.remove("show");
       }
       prevScrollpos = currentScrollpos;
       })
       

        // for always selector dark or light mode
        let getMode = localStorage.getItem("mode");
        if (getMode && getMode === "dark-mode"){
         body.classList.add("dark");
        }

//js code to toggle dark and light mode
       modeToggle.addEventListener("click",()=>{
        modeToggle.classList.toggle("active");
        body.classList.toggle("dark");

        //    for always dark or light mode    
    
        if(!body.classList.contains("dark")){
            localStorage.setItem("mode", "light-mode");
        }else{
            localStorage.setItem("mode", "dark-mode");
        }

       });

       //toggle for nav bar
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

    //fullname display
      document.addEventListener('DOMContentLoaded', function () {
        var fullName = localStorage.getItem('fullName');
        if (fullName) {
            document.getElementById('fullName').textContent = fullName;
        } else {
            alert('No user information found.');
            window.location.href = "index.html";
        }
    });

    const scriptURL = 'https://script.google.com/macros/s/AKfycbxqIV-CGecGr91jPwuMjZNwij7FPIFB0QX9HqUlnbdrr9oCQxs2RW5sHphCBAGe3kvQmg/exec?sheet=puja';
    const form = document.forms['problem'];

    form.addEventListener('submit', e => {
        e.preventDefault();
        fetch(scriptURL, { method: 'POST', body: new FormData(form) })
            .then(response => {
                if (response.ok) {
                    alert("Thank You! We will Contact you Soon!");
                    window.location.reload();
                } else {
                    return Promise.reject(new Error('Please Send again!'));
                }
            })
            .catch(error => console.error('Error!', error.message));
    });
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

//for admin page googlesheet details
document.addEventListener('DOMContentLoaded', function () {
    fetch('https://script.google.com/macros/s/AKfycbwJSU7i3ppszAhyKesz1GfJd7OfQEvj9XVSceYjVmWBHLgT-9ZJ5crXZ61rvU7k29-ESg/exec')
        .then(response => response.json())
        .then(data => {
            const tableHeader = document.getElementById('table-header');
            const tableBody = document.getElementById('table-body');

            // Add headers to the table
            let headers = data[0];
            headers.forEach(header => {
                let th = document.createElement('th');
                th.textContent = header;
                tableHeader.appendChild(th);
            });

            // Add data rows to the table
            for (let i = 1; i < data.length; i++) {
                let tr = document.createElement('tr');
                data[i].forEach(cell => {
                    let td = document.createElement('td');
                    td.textContent = cell;
                    tr.appendChild(td);
                });
                tableBody.appendChild(tr);
            }
        })
        .catch(error => console.error('Error:', error));
});
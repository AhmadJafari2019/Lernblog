onload = () => {
    let timing = document.getElementById("tim");

    function now() {
        var date = new Date();
        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        let day = date.getDate();
        let hour = date.getHours();
        let min = date.getMinutes();
        let sec = date.getSeconds();

        // timing.innerHTML = "Date : " + year + "/" + month + "/" + day + "  TIME : " + hour + ":" + min + ":" + sec + " "
        timing.innerHTML = day + "/" + month + "/" + year + " " + "**" + " " + hour + ":" + min + ":" + sec;
        timing.className = "stl";
    }
    setInterval(now);


}

let toggleNavStatus = false;

let toggleNav = function() {
    let getSidebar = document.querySelector(".nav-sidebar");
    let getSidebarUL = document.querySelector(".nav-sidebar ul");
    let getSidebarTitle = document.querySelector(".nav-sidebar span");
    let getSidebarLinks = document.querySelectorAll(".nav-sidebar a");

    if (toggleNavStatus === false) {
        getSidebarUL.style.visibility = "visible";
        getSidebar.style.width = "272px";
        getSidebarTitle.style.opacity = " 0.5";

        let arrayLength = getSidebarLinks.length;
        for (let i = 0; i < arrayLength; i++) {
            getSidebarLinks[i].style.opacity = "1";
        }

        toggleNavStatus = true;
    } else if (toggleNavStatus === true) {
        getSidebar.style.width = "50px";
        getSidebarTitle.style.opacity = " 0.5";

        let arrayLength = getSidebarLinks.length;
        for (let i = 0; i < arrayLength; i++) {
            getSidebarLinks[i].style.opacity = "0";
        }
        getSidebarUL.style.visibility = "hidden";
        toggleNavStatus = false;
    }


}
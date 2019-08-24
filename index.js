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
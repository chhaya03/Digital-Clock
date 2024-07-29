let hour = document.querySelector(".hr");
let min = document.querySelector(".min");
let sec = document.querySelector(".sec");


setInterval(() => {

    let currentTime = new Date();

    hour.innerHTML = currentTime.getHours();
    min.innerHTML = currentTime.getMinutes();
    sec.innerHTML = currentTime.getSeconds();

}, 1000)
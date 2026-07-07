// Set Birthday Date Here

const birthday = new Date("July 08, 2026 00:00:00").getTime();

const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

const timer = setInterval(function () {

    const now = new Date().getTime();

    const distance = birthday - now;

    if (distance <= 0) {

        clearInterval(timer);

        document.querySelector(".countdown").innerHTML =
        "<h2>🎉 Happy Birthday! 🎂</h2>";

        return;

    }

    days.innerHTML = Math.floor(distance / (1000 * 60 * 60 * 24));
    hours.innerHTML = Math.floor((distance % (1000 * 60 * 60 * 24))
        / (1000 * 60 * 60));

    minutes.innerHTML = Math.floor((distance % (1000 * 60 * 60))
        / (1000 * 60));

    seconds.innerHTML = Math.floor((distance % (1000 * 60))
        / 1000);

}, 1000);

document.getElementById("nextBtn").onclick = function () {

    window.location.href = "gallery.html";

};


//Floating Hearts
const hearts = document.querySelector(".hearts");

setInterval(() => {

    const heart = document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = "❤";

    heart.style.left = Math.random() * 100 + "%";

    heart.style.animationDuration = (5 + Math.random() * 5) + "s";

    heart.style.fontSize = (15 + Math.random() * 25) + "px";

    hearts.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 10000);
    }, 400);

window.scrollTo(0, document.body.scrollHeight);

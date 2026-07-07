const message = `

Happy Birthday ❤️

Today is one of the most special days because it celebrates the most wonderful person in my life.

Thank you for every smile,
every laugh,
every memory,
and every moment we have shared.

You make ordinary days feel extraordinary.

I hope this surprise reminds you how deeply you are loved.

May all your dreams come true.

Happy Birthday once again.

❤️ Forever Yours ❤️

`;

const typedText = document.getElementById("typedText");

let index = 0;

function typeWriter(){

    if(index < message.length){
        typedText.innerHTML += message.charAt(index);

        index++;

        setTimeout(typeWriter,40);

    }

}

typeWriter();

document.getElementById("letterNext").onclick=function(){

window.location.href="reasons.html";

};
window.scrollBy(0, 500);


/* Floating Hearts */

const hearts=document.querySelector(".hearts");

setInterval(()=>{
    const heart=document.createElement("div");

heart.classList.add("heart");

heart.innerHTML="❤";

heart.style.left=Math.random()*100+"%";

heart.style.animationDuration=(5+Math.random()*5)+"s";

heart.style.fontSize=(15+Math.random()*20)+"px";

hearts.appendChild(heart);

setTimeout(()=>{

heart.remove();

},9000);

},500);

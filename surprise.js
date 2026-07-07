document.getElementById("restart").onclick=function(){

window.location.href="index.html";

};



const hearts=document.querySelector(".hearts");

setInterval(()=>{

const heart=document.createElement("div");

heart.classList.add("heart");

heart.innerHTML="❤";

heart.style.left=Math.random()*100+"%";

heart.style.fontSize=(15+Math.random()*25)+"px";

heart.style.animationDuration=(5+Math.random()*5)+"s";

hearts.appendChild(heart);

setTimeout(()=>{

heart.remove();

},10000);

},300);
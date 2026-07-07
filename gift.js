const gift=document.getElementById("giftBox");

const content=document.getElementById("giftContent");

gift.onclick=function(){

gift.classList.add("open");

setTimeout(()=>{

content.style.display="block";

},700);

}

document.getElementById("giftNext").onclick=function(){

window.location.href="fireworks.html";

}
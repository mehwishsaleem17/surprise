document.querySelectorAll(".card").forEach(card=>{

card.addEventListener("click",()=>{

card.classList.toggle("flip");

});

});

document.getElementById("reasonNext").onclick=function(){

window.location.href="memories.html";

}
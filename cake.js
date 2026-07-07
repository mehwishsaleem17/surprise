const flames=document.querySelectorAll(".flame");

const message=document.getElementById("cakeMessage");

document.getElementById("blow").onclick=function(){

flames.forEach(flame=>{

flame.style.display="none";

});

message.style.display="block";

};

document.getElementById("cakeNext").onclick=function(){

window.location.href="gift.html";

};
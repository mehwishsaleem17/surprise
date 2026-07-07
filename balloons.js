const balloonArea=document.getElementById("balloonArea");

const score=document.getElementById("score");

const message=document.getElementById("balloonMessage");

let popped=0;

for(let i=0;i<30;i++){

const balloon=document.createElement("div");

balloon.classList.add("balloon");

balloon.style.left=Math.random()*90+"%";

balloon.style.backgroundColor=
`hsl(${Math.random()*360},80%,60%)`;

balloon.style.animationDuration=
(6+Math.random()*5)+"s";

balloon.onclick=function(){

balloon.remove();

popped++;
score.innerHTML=popped;

if(popped>=15){

message.style.display="block";

}

};

balloonArea.appendChild(balloon);

}

document.getElementById("balloonNext").onclick=function(){

window.location.href="cake.html";

}
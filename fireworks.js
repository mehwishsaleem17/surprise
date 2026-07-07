const canvas=document.getElementById("fireCanvas");

const ctx=canvas.getContext("2d");

canvas.width=window.innerWidth;

canvas.height=window.innerHeight;

const particles=[];

function createFirework(x,y){

for(let i=0;i<60;i++){

particles.push({

x:x,

y:y,

dx:(Math.random()-0.5)*8,

dy:(Math.random()-0.5)*8,

life:100,

color:`hsl(${Math.random()*360},100%,60%)`

});

}

}

function animate(){

ctx.clearRect(0,0,canvas.width,canvas.height);

particles.forEach((p,index)=>{

ctx.beginPath();

ctx.arc(p.x,p.y,3,0,Math.PI*2);

ctx.fillStyle=p.color;

ctx.fill();

p.x+=p.dx;

p.y+=p.dy;

p.life--;

if(p.life<=0){

particles.splice(index,1);

}

});

requestAnimationFrame(animate);

}

animate();

canvas.addEventListener("click",function(e){

createFirework(e.clientX,e.clientY);

});

window.addEventListener("resize",()=>{

canvas.width=window.innerWidth;

canvas.height=window.innerHeight;

});

document.getElementById("fireNext").onclick=function(){

window.location.href="surprise.html";

}
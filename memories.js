document.getElementById("memoryNext").onclick=function(){

window.location.href="quiz.html";

};



const memories=document.querySelectorAll(".memory");

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

memories.forEach(memory=>{

observer.observe(memory);

});
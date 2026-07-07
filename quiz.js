const form=document.getElementById("quizForm");

const result=document.getElementById("result");

const next=document.getElementById("quizNext");

form.addEventListener("submit",function(e){

e.preventDefault();

let score=0;

for(let i=1;i<=5;i++){

const answer=document.querySelector(`input[name="q${i}"]:checked`);

if(answer){

score+=Number(answer.value);

}

}

result.style.marginTop="30px";

result.style.fontSize="28px";
result.style.fontWeight="bold";

if(score===5){

result.innerHTML="🎉 Perfect! You know the right answers! ❤️";

}

else if(score>=3){

result.innerHTML="🥰 Almost Perfect! You're amazing! ❤️";

}

else{

result.innerHTML="😂 Nice Try! But today you're still the birthday star! ❤️";

}

next.style.display="inline-block";

});
window.scrollTo(0, document.body.scrollHeight);

next.onclick=function(){

window.location.href="balloons.html";

}

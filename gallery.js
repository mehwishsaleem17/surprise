const images=document.querySelectorAll(".gallery-img");

const lightbox=document.getElementById("lightbox");

const lightboxImage=document.getElementById("lightboxImage");

const close=document.getElementById("close");

images.forEach(img=>{

img.addEventListener("click",()=>{

lightbox.style.display="flex";

lightboxImage.src=img.src;

});

});

close.onclick=function(){

lightbox.style.display="none";

}

lightbox.onclick=function(e){

if(e.target===lightbox){

lightbox.style.display="none";
}

}

document.getElementById("galleryNext").onclick=function(){

window.location.href="letter.html";

}
var myNav=document.getElementById('navegador');
var botoncito=document.getElementById("aparece");
var boton=document.getElementById("become-driver");
var boton1=document.getElementById("boton1");
var items=document.getElementById("nav");
var anchor1=document.getElementById("anchor1");
var anchor2=document.getElementById("anchor2");
var anchor3=document.getElementById("anchor3");
var logo=document.getElementById("logo");
var telefono=document.getElementById("numero");
var nombre=document.getElementById("nombre");
var email=document.getElementById("email");
var ciudad=document.getElementById("ciudad");
var letras=/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/
var mayuscula=/^[A-Z]{1}[a-z]{3,13}$/
var numeros=/^[0-9]$/
var telephone=/^[0-9]{9}$/
var correo=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

 function validar (input,regex) {
   if(input.value.trim().length == 0){
     input.value = "";
     input.nextElementSibling.style.display = "inline-block";
   }
   else if (regex.test(input.value)== true) {
    input.nextElementSibling.style.display = "none";
  }else {
    input.value = "";
    input.nextElementSibling.style.display = "inline-block";
  }
}

ciudad.addEventListener("blur",function () {
  validar(ciudad,letras);
});
telefono.addEventListener("blur",function () {
  validar(telefono,telephone)});
email.addEventListener("blur",function () {
  validar(email,correo)});
nombre.addEventListener("blur",function () {
    validar(nombre,letras)})

telefono.addEventListener("click", function(){
nombre.style.display="inline-block";
email.style.display="inline-block";
ciudad.style.display="inline-block";
});

window.onscroll=function () {
"use strict";
if (document.body.scrollTop >= 120 ) {

       boton1.classList.remove("white-boton");
       boton1.classList.add("pink-boton");
       botoncito.classList.remove("white-boton");
       botoncito.classList.add("pink-boton");
       myNav.classList.remove("antique-nav");
       myNav.classList.add("new-nav");
       logo.removeAttribute('src')
       logo.setAttribute("src","assets/images/img-lyft/logo-pink.png");
       logo.classList.remove("logo-white");
       logo.classList.add("logo-pink");
       botoncito.style.display="inline-block";
       anchor1.classList.remove("white-color");
       anchor1.classList.add("pink-color");
       anchor2.classList.remove("white-color");
       anchor2.classList.add("pink-color");
       anchor3.classList.remove("white-color");
       anchor3.classList.add("pink-color");
   }
   else {
       boton1.classList.add("white-boton");
       boton1.classList.remove("pink-boton");
       botoncito.classList.add("white-boton");
       botoncito.classList.remove("pink-boton");
       myNav.classList.add("antique-nav");
       myNav.classList.remove("new-nav");
       botoncito.style.display="none";
       logo.removeAttribute("src","assets/images/img-lyft/logo-pink.png");
       logo.setAttribute("src","assets/images/img-lyft/logo-white.png");
       logo.classList.remove("logo-pink");
       logo.classList.add("logo-white");
       anchor1.classList.remove("pink-color");
       anchor1.classList.add("white-color");
       anchor2.classList.remove("pink-color");
       anchor2.classList.add("white-color");
       anchor3.classList.remove("pink-color");
       anchor3.classList.add("white-color");
   }
};

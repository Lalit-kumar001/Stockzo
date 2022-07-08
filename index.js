
var on=0;
// var home=document.getElementById('home');
// home.addEventListener('click',function(){
//     home.classList.add('border');
// })


var menu=document.querySelector('.menu');
var ham=document.getElementById('hamburger');
ham.addEventListener('click',function(){
if(on==0){

    menu.style.display="block";
    on=1;

}
else{
    menu.style.display="none";
    on=0;
}

})


let buttonUp=document.createElement('div');
buttonUp.classList.add('buttonUp');
buttonUp.innerHTML='▲';


window.onscroll=function () {
    if(pageYOffset>150 && !buttonUp.offsetWidth){
       $('#container').append(buttonUp);
    }
    else if( pageYOffset<150 && buttonUp.offsetWidth){
        $('.buttonUp').remove();
    }
};

buttonUp.onclick=()=>{
    $('html').animate({scrollTop:0},700);
};

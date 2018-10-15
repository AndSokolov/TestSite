
let ul;
let timer;
order.onmouseenter=function () {
    this.style.height='200px';
    ul=document.createElement('ul');

    for (let i=0; i<3; i+=1){
        let li=document.createElement('li');
        ul.appendChild(li);
    }

    ul.children[0].innerHTML='<a href="https://www.yandex.ru/">Заказать на дом</a>';
    ul.children[1].innerHTML='<a>Заказать столик</a> ';
    ul.children[2].innerHTML='<a>Заказать аренду</a>';


    timer=setTimeout(()=>{this.appendChild(ul)},200);


};
order.onmouseleave=function () {
    clearTimeout(timer);
    this.style.height='';
    if(!isHidden(ul)) ul.parentNode.removeChild(ul);
};

function isHidden(elem) {
    return !elem.offsetWidth && !elem.offsetHeight;
}
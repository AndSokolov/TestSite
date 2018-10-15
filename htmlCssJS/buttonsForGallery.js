(function () {

let butLeft=document.querySelector('.buttonLeft');
let butRight=document.querySelector('.buttonRight');

let ul=document.querySelector('.gallery');

let pos=0;
let step=624;
let maxMargin=-1560;

butRight.onclick=function (e) {
    pos=Math.max(pos-step,maxMargin);
    ul.style.marginLeft=`${pos}px`;
};

butLeft.onclick=function (e) {
    pos=Math.min(pos+step,0);
    ul.style.marginLeft=`${pos}px`;
};

})();

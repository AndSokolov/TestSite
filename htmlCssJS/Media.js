
let links=document.querySelectorAll('.galleryImg__item a');
for(let i=0; i<links.length; i+=1){  //предзагрузим изображения
    let img=document.createElement('img');
    img.src=links[i].getAttribute('href');
}

(function () {

    let gallery=document.querySelector('.galleryImg');
    let bigImg=document.querySelector('.media-content__bigImg img');
    
    gallery.onclick=function (e) {
       let target=e.target.closest('a');
       if(!target) return;

       bigImg.src=target.href;

        return false;
    }
    
    
})();

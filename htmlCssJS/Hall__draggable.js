let chair=document.querySelector('.chair');
let table=document.querySelector('.table');

let field=document.querySelector('.field');
let fieldFurniture=document.querySelector('.field__furniture');

let cordsField=getCords(field);
let cordsFurniture=getCords(fieldFurniture);

let tableCount=1;  // 8 limit
let chairCount=1; // 80 limit
let furniture=[];

document.onmousedown=function (e) {
    let target=e.target;
    if(!target.classList.contains('furniture__draggable')) return false;

    furniture.push(target);
    let cordsTarget=getCords(target);

    let shiftX=e.pageX-cordsTarget.left;
    let shiftY=e.pageY-cordsTarget.top;

    let top,left;
    let typeFurniture=target.classList.contains('table') ? 'table' : 'chair';

    document.body.appendChild(target);
    moveTo(e);

    topStart=top;

    document.onmousemove=function (e) {
        moveTo(e);
    };

    let lastTarget;

    function moveTo(e) {

       left=e.pageX-shiftX;
       top=e.pageY-shiftY;

        if(left<=cordsField.left) left=cordsField.left;
        else if(left+target.offsetWidth>=cordsField.right) left=cordsField.right-target.offsetWidth;

        if(top<=cordsField.top) top=cordsField.top;
        else if(top+target.offsetHeight>=cordsField.bottom) top=cordsField.bottom-target.offsetHeight;

        target.style.left=left+'px';
        target.style.top=top+'px';
    }

    document.onmouseup=function (e) {
        
        if(top>cordsFurniture.bottom && topStart<cordsFurniture.bottom ){
           createClone();

           if(typeFurniture=='table') tableCreateTurn();
        }

        document.onmouseup=document.onmousemove=null;
    };

    function createClone() {
        if(tableCount<8 && typeFurniture=='table' || typeFurniture=='chair' && chairCount<80) {

            let targetClone = target.cloneNode(true);
            targetClone.style.top = '5px';

            if (typeFurniture=='table'){
                targetClone.style.left='5px';
                targetClone.querySelector('.table__count').innerHTML-=1;

                tableCount += 1;
            }
            else{
                targetClone.style.left='160px';
                chairCount += 1;
            }

            fieldFurniture.appendChild(targetClone);
            furniture.push(targetClone);

        }
    }

    function tableCreateTurn() {
        let div=document.createElement('div');
        div.className='table__turn';
        div.innerHTML='↶';
        target.appendChild(div);
    }

    return false;
};

function getCords(elem) {
    cords=elem.getBoundingClientRect();

    return{
        left:cords.left+pageXOffset,
        right:cords.right+pageXOffset,
        top:cords.top+pageYOffset,
        bottom:cords.bottom+pageYOffset
    };
}

let roomButton=document.querySelector('.room__button');


roomButton.onclick=function () {
    if(!furniture.length) return;

    furniture.forEach((item)=> {
        item.remove();
    });

    fieldFurniture.appendChild(table);
    fieldFurniture.appendChild(chair);

    table.style.top=chair.style.top='5px';
    chair.style.left='160px';
    table.style.left='5px';

    table.style.width='150px';
    table.style.lineHeight=table.style.height='85px';

    let turn=table.querySelector('.table__turn');
    if(turn){
        turn.remove();
    }

    tableCount=chairCount=1;
};

document.onclick=function (e) {
    let target=e.target;
    if(!target.classList.contains('table__turn')) return;

    let table=target.parentNode;

    let width=getComputedStyle(table).width;
    let height=getComputedStyle(table).height;

    if(width=='150px'){
        table.style.width='85px';
        table.style.lineHeight=table.style.height='150px';
    }
    else{
        table.style.width='150px';
        table.style.lineHeight=table.style.height='85px';
    }
};
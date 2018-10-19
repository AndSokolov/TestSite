function createCalendar(block, year, month,dateNow){


    let date=new Date(year,month,1);
    let lastDay=new Date(year,month-1,0).getDate();
    let numberDay=date.getDay();

    if(numberDay==0) numberDay=7;


    let countTr=5;
    if(numberDay==1 && lastDay==28) countTr=4;

    let table=document.createElement('table');
    let tr_th=document.createElement('tr');

    tr_th.innerHTML='<th>Пн</th><th>Вт</th><th>Ср</th><th>Чт</th><th>Пт</th><th>Сб</th><th>Вс</th>';
    table.append(tr_th);

    for(let i=0; i<countTr; i++){

        let tr=document.createElement('tr')
        tr.innerHTML='<td></td><td></td><td></td><td></td><td></td><td></td><td></td>';
        table.append(tr);

    }

    let str=table.querySelectorAll('tr');

    numberDay-=1;//Для удобной вставки
    let count=1;
    outer: for(let i=1; i<table.rows.length; i+=1){
        for(let j=0; j<table.rows[i].cells.length; j+=1){



            if(i==1 && j==0) {
                table.rows[i].cells[numberDay].innerHTML=count;
                j=numberDay;
                count+=1;
            }
            else{
                table.rows[i].cells[j].innerHTML=count;
                if(count==dateNow) table.rows[i].cells[j].style.background='lightgray';
                if(count>=lastDay) break outer;
                count+=1;
            }


        }
    }

    block.append(table);
}


let div=document.createElement('div');
div.id='cal';
div.hidden=true;

let date=new Date();
createCalendar(div,date.getFullYear(),date.getMonth(),date.getDate());

document.querySelector('.NavigationMenu').append(div);

let butt=document.querySelector('.butt');
butt.onclick=()=>{
    cal.hidden=!cal.hidden;
};


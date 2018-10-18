
class Clock{
    constructor(options){
        this._template=options.template;
        this._className=options.className;
        this._timer=null;
        this._span=null;
    }

    _render(){

        let date=new Date();

        let hour=date.getHours();
        if(hour<10) hour='0'+hour;

        let min=date.getMinutes();
        if(min<10) min='0'+min;

        let sec=date.getSeconds();
        if(sec<10) sec='0'+sec;


        let template=this._template;
        template=template.replace('h',hour).replace('m',min).replace('s',sec);


        if(!this._span) this._createContainer();

        this._span.innerHTML=template;


    }

    _createContainer(){


        let div = document.createElement('div');
        div.classList.add(this._className);

        let span = document.createElement('span');
        span.classList.add('clock');
        div.append(span);
        document.querySelector('.NavigationMenu').append(div);
        this._span=span;


    }

    start(){
        this._render();
        this._timer=setInterval(()=>{this._render()},1000)
    }

    stop(){
        clearInterval(this._timer);
    }
}

let newClock = new Clock({
    template:'h:m:s',
    className:'container_clock'
});


newClock.start();
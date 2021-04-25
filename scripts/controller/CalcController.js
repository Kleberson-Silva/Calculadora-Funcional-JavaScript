class CalcController{

     constructor(){

         this._operation = [];
         this._locale = 'pt-BR';
         this._displayCalcEl = document.querySelector('#display')
         this._dateEl = document.querySelector('#data')
         this._horaEl = document.querySelector('#hora')
         this._currentDate;
         this.initialize();
         this.initButtonsEvents();
     }
     


     //** */
     initialize()   {

        this.setDisplayDateTime();

            setInterval(()=>{

                this.setDisplayDateTime();

            },1000);


     }
     addEventListenerAll(element, events, fn){

        events.split(' ').forEach(event => {

            element.addEventListener(event, fn), false;
        });

     }
     clearAll(){


     }

     execBtn(value){

         switch (value) {
            case 'ac':
               this.clearAll();
               break;
            case 'ce':
               this.clearAll();
               break;
            case 'ac':
               this.clearAll();
               break;
         
            default:
               break;
         }

     }

     initButtonsEvents(){

        let buttons = document.querySelectorAll("#buttons > g, #parts > g");

        this.execBtn();

       buttons.forEach((btn, index)=>{

        this.addEventListenerAll(btn,'click drag', e => {

            let textbtn = btn.className.baseVal.replace("btn-","");
        });

        this.addEventListenerAll(btn, "mouseover mouseuo mousedown ", e => {

            btn.style.cursor = "pointer";

        });


       });

     }

     setDisplayDateTime(){

        this.displayDate = this.currentDate.toLocaleDateString(this._locale,{
            day:"2-digit",
            month:"long",
            year:"numeric"
        });
        this.displayTime = this.currentDate.toLocaleTimeString(this._locale);

     }

     get displayTime(){

        return this._horaEl.innerHTML;

     }

     get displayDate(){

        return this._dateEl.innerHTML;

     }
     set displayTime(value){

        return this._horaEl.innerHTML = value;

     }

     set displayDate(value){

        return this._dateEl.innerHTML = value;

     }

     get displayCalc(){
        return this._displayCalc.innerHTML;
     }

     set displayCalc(valor){  
        this._displayCalc.innerHTML = value;
     }
     get currentDate(){
         return new Date();
     }
     set currentDate(valor){
       this._currentDate = valor;
    }
}
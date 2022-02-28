var elForm = document.querySelector(".form");
var elInput = document.querySelector(".input");
var elButton = document.querySelector(".button");
var elSpanMan = document.querySelector(".span__man");
var elSpanBicycle = document.querySelector(".span__velosiped");
var elSpanCar = document.querySelector(".span__car");
var elSpanPilot = document.querySelector(".span__pilot");
// var elInputVal = elInput.value;








elForm.addEventListener( "submit", function(event){
    event.preventDefault();
    var elError = document.querySelector(".error");
    var elInputVal = elInput.value;
  
    
    if(elInputVal <= 0 || isNaN(elInputVal)){

        elError.textContent =   " 0  dan katta raqam kiriting , yoki 0 dan katta son  kiriting" ;

        return;
    
      }else
      elError.textContent = ""
    
    
    
    function distationman(){
        var   house =Math.floor( elInputVal / 3.6);
        var soat = ( elInputVal / 3.6).toFixed();
        var   hourse =( elInputVal / 3.6).toFixed(2);
        var  minut =( ((hourse - house)*60).toFixed() );
        return soat + " soat " + minut + " minut ";
    }

    function distationbicycle(){
        var   house =Math.floor( elInputVal / 20.1);
        var soat = Math.round( elInputVal / 20.1);
        var   hourse =( elInputVal / 20.1).toFixed(2);
        var  minut =( ((hourse - house)*60).toFixed() );
        return soat + " soat " + minut + " minut ";
    }

    function distationcar(){
        var   house =Math.floor( elInputVal / 70);
        var soat = Math.round( elInputVal / 70);
        var   hourse =( elInputVal / 70).toFixed(2);
        var  minut =( ((hourse - house)*60).toFixed() );
        return soat + " soat " + minut + " minut ";
    }

    function distationpilot(){
        var   house =Math.floor( elInputVal / 800);
        var soat = Math.round( elInputVal / 800);
        var   hourse =( elInputVal / 800).toFixed(2);
        var  minut =( ((hourse - house)*60).toFixed() );
        return soat + " soat " + minut + " minut ";
        
    }

    

    elSpanMan.textContent =(distationman());
    elSpanBicycle.textContent = (distationbicycle());
    elSpanCar.textContent = (distationcar());
    elSpanPilot.textContent =(distationpilot());
    
});


// Math.round()
// Math.floor()
// Math.ceil()



// Math.random()








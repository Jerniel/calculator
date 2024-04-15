const display = document.getElementById("display");
const small = document.getElementById("display-small");

let checker = false;

function AppendDisplay(input){   
    display.value += input;
    small.value += input;
        
}

function resetDisplay(){
    display.value = "";
    small.value = "";
}

function equalDisplay(input){
    try{  
    display.value = eval(display.value);
} 

catch{
    display.value = "Error!";   
}
}

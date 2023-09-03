let go = document.getElementById('num');

let seg  = 0;
let min  = 0;
let hour = 0;
let inter;


function start(){
     if(!inter){
        inter = setInterval(cont,10);
     }
}

function pause(){
    clearInterval(inter);
    inter=null;
}

function stops(){
    clearInterval(inter);
    seg = 0;
    min = 0;
    hour = 0;
    inter=null;
    go.innerHTML = "00:00:00";
    
}


function cont(){
    seg++
    if(seg ==60){
        min++;
        seg = 0;

        if(min == 60){
            hour++;
            min = 0;
        }
    }
    go.innerHTML = duo(hour) + ":" + duo(min) +":"+ duo(seg);
}

function duo(dois){
    if(dois < 10){
        return( '0' + dois)
    }else{
        return(dois)
    }
}
function dzialanie(str){
    if(str.indexOf('*') != -1){
        var index = str.indexOf('*');
    }else if(str.indexOf('-') != -1){
        var index = str.indexOf('-');
    }else if(str.indexOf('/') != -1){
        var index = str.indexOf('/');
    }else if(str.indexOf('+') != -1){
        var index = str.indexOf('+');
    }
    return str.substring(index,index+1);
}

function element_1(pom, act){
    var quick = parseInt(pom.substring(0,pom.indexOf(act)));
    return quick;
}
function element_2(pom, act){
    var quick = parseInt(pom.substring(pom.indexOf(act)+1));
    return quick;
}

function solution(act,first,second){
    var wynik = 0;
    if(act == '+'){
        wynik = first + second;
    }else if(act == '-'){
        wynik = first - second;
    }else if(act == '/'){
        wynik = first / second;
    }else{
        wynik = first * second;
    }
    return wynik;
}

function number(value){
    if(!isNaN(value)){
        document.getElementById("score").innerHTML += value;
    }else if(value == '*' || value == '/' || value == '+' || value == '-'){
        document.getElementById("score").innerHTML += value;
    }else if(value == 'enter'){
        var pom = document.getElementById("score").innerHTML;
        var action = dzialanie(pom);
        var first = element_1(pom, action);
        var second = element_2(pom, action);
        var wynik = solution(action,first,second);
        document.getElementById("score").innerHTML = wynik;
        document.getElementById("history").innerHTML += "<li>"+first+action+second+" = "+wynik+"</li><hr>";
    }else if(value == 'reset_all'){
        document.getElementById("history").innerHTML = "";
        document.getElementById("score").innerHTML = "";
    }else{
        document.getElementById("score").innerHTML = "";
    }
    
}
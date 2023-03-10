function passwort(){
    let length = document.getElementById("lenght").value;
    let passwort = "";
    for(let i = 0; i < length; i++){
        passwort = passwort + passwortteil();
        if(passwort == "Kapput"){
            break;
        }
    }
    document.getElementById("Password").innerHTML = passwort;
}

function passwortteil(){
    let teil ="";
    let klein = document.getElementById("klein").checked;
    let groß = document.getElementById("groß").checked;
    let zahl = document.getElementById("Zahl").checked;
    let zeichen = document.getElementById("Zeichen").checked;
    if(klein || groß || zahl || zeichen){
        while(true){
            let random = Math.round(Math.random()*3);
            if(klein && random == 0){
                teil = Klein();
                break;
            }else if(groß && random == 1){
                teil = gross();
                break;
            }else if(zahl && random == 2){
                teil = Zahl();
                break;
            }else if(zeichen && random == 3){
                teil = Zeichen();
                break;
            }
        }
    }
    else{
        return "Kapput";
    }
    return teil;
}

function Klein(){
    let rand = Math.round(Math.random()* 25);

    switch(rand){
        case 0: return "a";
        case 1: return "b";
        case 2: return "c";
        case 3: return "d";
        case 4: return "e";
        case 5: return "f";
        case 6: return "g";
        case 7: return "h";
        case 8: return "i";
        case 9: return "j";
        case 10: return "k";
        case 11: return "l";
        case 12: return "m";
        case 13: return "n";
        case 14: return "o";
        case 15: return "p";
        case 16: return "q";
        case 17: return "r";
        case 18: return "s";
        case 19: return "t";
        case 20: return "u";
        case 21: return "v";
        case 22: return "w";
        case 23: return "x";
        case 24: return "y";
        case 25: return "z";
    }
}

function gross(){
    let rand = Math.round(Math.random()* 25);

    switch(rand){
        case 0: return "A";
        case 1: return "B";
        case 2: return "C";
        case 3: return "D";
        case 4: return "E";
        case 5: return "F";
        case 6: return "G";
        case 7: return "H";
        case 8: return "I";
        case 9: return "J";
        case 10: return "K";
        case 11: return "L";
        case 12: return "M";
        case 13: return "N";
        case 14: return "O";
        case 15: return "P";
        case 16: return "Q";
        case 17: return "R";
        case 18: return "S";
        case 19: return "T";
        case 20: return "U";
        case 21: return "V";
        case 22: return "W";
        case 23: return "X";
        case 24: return "Y";
        case 25: return "Z";
    }
}

function Zahl(){
    return Math.round(Math.random()*9);
}

function Zeichen(){
    let rand = Math.round(Math.random()* 25);

    switch(rand){
        case 0: return "!";
        case 1: return "§";
        case 2: return "$";
        case 3: return "%";
        case 4: return "&";
        case 5: return "_";
        case 6: return "(";
        case 7: return ")";
        case 8: return "=";
        case 9: return "?";
        case 10: return "{";
        case 11: return "[";
        case 12: return "]";
        case 13: return "}";
        case 14: return ";";
        case 15: return "^";
        case 16: return ">";
        case 17: return "|";
        case 18: return "#";
        case 19: return "-";
        case 20: return "*";
        case 21: return "+";
        case 22: return "~";
        case 23: return ".";
        case 24: return ",";
        case 25: return ":";
    }
}
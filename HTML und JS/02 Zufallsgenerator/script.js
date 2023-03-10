function generate(){
    let num1 = parseFloat(document.getElementById("number1").value);
    let num2 = parseFloat(document.getElementById("number2").value);

    let ergebnis = Math.round((Math.random()* (num2-num1)))+num1;
    document.getElementById("zahl").innerHTML = ergebnis;
}
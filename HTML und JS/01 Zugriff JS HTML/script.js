function Addition(){
    console.log("clicked");
    let num1 = document.getElementById("number1").value;
    let num2 = document.getElementById("number2").value;

    let result = parseFloat(num1) + parseFloat(num2);

    console.log(result);
}

function Subtraktion(){
    console.log("clicked");
    let num1 = document.getElementById("number1").value;
    let num2 = document.getElementById("number2").value;

    let result = parseFloat(num1) - parseFloat(num2);

    console.log(result);
}

function Multiplikation(){
    console.log("clicked");
    let num1 = document.getElementById("number1").value;
    let num2 = document.getElementById("number2").value;

    let result = parseFloat(num1) * parseFloat(num2);

    console.log(result);
}

function Division(){
    console.log("clicked");
    let num1 = document.getElementById("number1").value;
    let num2 = document.getElementById("number2").value;

    let result = parseFloat(num1) / parseFloat(num2);

    console.log(result);
}
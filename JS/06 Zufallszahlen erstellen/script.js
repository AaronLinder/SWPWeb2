let random = Math.random() * 1000;
let randomAsInteger = Math.round(random);
console.log(randomAsInteger);

if(randomAsInteger > 800){
    console.log("größer als 800");
} else if (randomAsInteger > 500){
    console.log("größer als 500");
} else if ( randomAsInteger > 200){
    console.log("größer als 200");
}else{
    console.log("kleiner als 200");
}
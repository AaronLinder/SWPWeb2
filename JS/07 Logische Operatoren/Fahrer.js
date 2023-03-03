let alter = Math.round(Math.random() *100);
let probeZeit = false;
let schein = true;

if(alter > 24 || schein && probeZeit == false){
    console.log("Darf Motorrad fahren")
} else{
    console.log("Darf kein Motrrad fahren")
}
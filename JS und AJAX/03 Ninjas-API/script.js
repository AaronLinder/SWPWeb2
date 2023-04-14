document.getElementById("input").addEventListener("change", function(event){
    console.log(event);
    loadanimal(event.target.value);
})

function loadanimal(name) {
    fetch("https://api.api-ninjas.com/v1/animals?name=" + name, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "X-Api-Key": "5iYagVMyS9JjOXSm/Ynzfw==VGVeiHsOw6UT5JVb"
        }
    })
    .then(response => response.json())
    .then(data => showAnimal(data))
    .catch(err => console.error(err));
}

function showAnimal(data) {
    let html = "";
    data.forEach(element => {
        html += "<li pointer onClick='getanimalinfo(\""+ element.name + "\")'>" + element.name + "</li>";
    });

    document.getElementById("list").innerHTML = html;
}

function getanimalinfo(name){
    fetch("https://api.api-ninjas.com/v1/animals?name=" + name, {
        method: "GET",
        headers: {
            "X-Api-Key": "5iYagVMyS9JjOXSm/Ynzfw==VGVeiHsOw6UT5JVb"
        }
    })
    .then(response => response.json())
    .then(data => showAnimalInfo(data))
    .catch(err => console.error(err));
}

function showAnimalInfo(data) {
    document.getElementById("searchbar").innerHTML = "neues Tier suchen (englischer Name)";
    let html = "";
    data.forEach(element => {
        html += "<li>"+ "Name: " + element.name + "</li>";
        html += "<li>"+ "Lebensraum: " + element.locations + "</li>"
        html += "<li>"+ "Wissenschaftlichername: " + element.taxonomy.scientific_name + "</li>"
        html += "<li>"+ "Größe: " + element.characteristics.height + "</li>";
        html += "<li>"+ "Gewicht: " + element.characteristics.weight + "</li>";
        html += "<li>"+ "Höchstgeschwindigkeit: " + element.characteristics.top_speed + "</li>";
        html += "<li>"+ "Farbe: " + element.characteristics.color + "</li>";
        html += "<li>"+ "Lebensdauer: " + element.characteristics.lifespan + "</li>";
        
    });

    document.getElementById("list").innerHTML = html;
}
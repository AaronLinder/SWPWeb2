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
    .then(data => showAnimalInfo(data.find(element => element.name == name)))
    .catch(err => console.error(err));
}

function showAnimalInfo(data) {
    document.getElementById("searchbar").innerHTML = "neues Tier suchen (englischer Name)";
    let html = "";
    html += "<li>"+ "Name: " + data.name + "</li>";
    html += "<li>"+ "Lebensraum: " + data.locations + "</li>"
    html += "<li>"+ "Wissenschaftlichername: " + data.taxonomy.scientific_name + "</li>"
    html += "<li>"+ "Größe: " + data.characteristics.height + "</li>";
    html += "<li>"+ "Gewicht: " + data.characteristics.weight + "</li>";
    html += "<li>"+ "Höchstgeschwindigkeit: " + data.characteristics.top_speed + "</li>";
    html += "<li>"+ "Farbe: " + data.characteristics.color + "</li>";
    html += "<li>"+ "Lebensdauer: " + data.characteristics.lifespan + "</li>";

    document.getElementById("list").innerHTML = html;
}
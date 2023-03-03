// Erstelle eine Variable banana mit dem Wert "Banane" 

let banana = "Banane";


// Erstelle eine Variable apple mit dem Wert "Apple" 

let apple = "Apple";

 

// Erstelle eine Variable bananaPricePerKilo mit dem Wert 2.14 

let bananaPricePerKilo = 2.14;

// Erstelle eine Variable applePricePerKilo mit dem Wert 3.43 

let applePricePerKilo = 3.43;

 

// Ein Apfel hat durchschnittlich ein Gewicht von 0.34 Kilo 

let gewichtApple = 0.34;

// Eine Banane hat durchschnittlich ein Gewicht von 0.22 Kilo 

 let gewichtBanane = 0.22;

// Gib folgendes aus: Anzahl Bananen/Äpfel pro Kilo, Preis pro Banane/Apfel 

let anzahlApplesPerKilo = 1/gewichtApple;
let anzahlBananenPerKilo = 1/gewichtBanane;

let pricePerApple = applePricePerKilo/anzahlApplesPerKilo;
let pricePerBanane = bananaPricePerKilo/anzahlBananenPerKilo

console.log("Anzahl Äpfel pro Kilo " + anzahlApplesPerKilo + ", Peris pro Apfel " + pricePerApple);
console.log("Anzahl Bananen pro Kilo " + anzahlBananenPerKilo + ", Peris pro Banane " + pricePerBanane);

// Preis von 8 Äpfeln 

let price = pricePerApple * 8;

console.log("8 Äpfel kosten " + price);

// Preis von 17 Bananen 

price = pricePerBanane * 17;
console.log("17 Bananen kosten " + price);

// Preis von 1 Tonne Äpfel 

price = applePricePerKilo * 1000;
console.log("1 Tonne Äpfel kostset " + price);

// Preis von 1 Tonne Bananen 

price = bananaPricePerKilo * 1000;
console.log("1 Tonne Bananen kostet " + price);
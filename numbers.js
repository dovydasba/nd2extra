const fs = require('fs');

// Skaityti numbers.js failą
const data = fs.readFileSync('numbers.txt', 'utf8');

// Skaidyti failo turinį į skaičius pagal tarpą
const numbers = data.split(' ').map(Number);

// Inicializuoti masyvus lyginiams ir nelyginiams skaičiams
const evenNumbers = [];
const oddNumbers = [];

// Kiekvienam skaičiui...
for (let number of numbers) {
  // Jei skaičius yra lyginis, įtraukti jį į lyginių skaičių masyvą
  if (number % 2 === 0) {
    evenNumbers.push(number);
  }
  // Jei skaičius yra nelyginis, įtraukti jį į nelyginių skaičių masyvą
  else {
    oddNumbers.push(number);
  }
}

// Spausdinti nelyginius skaičius vienoje eilutėje ir lyginius skaičius kitoje eilutėje
console.log("Nelyginiai skaičiai:", oddNumbers.join(' '));
console.log("Lyginiai skaičiai:", evenNumbers.join(' '));

// Spausdinti lyginių ir nelyginių skaičių kiekį
console.log("Nelyginių skaičių kiekis:", oddNumbers.length);
console.log("Lyginių skaičių kiekis:", evenNumbers.length);
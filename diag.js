const fs = require('fs');

// Skaityti CSV failą
const data = fs.readFileSync('mas.csv', 'utf8');

// Skaidyti failo turinį į eilutes
const lines = data.split('\n');

// Inicializuoti 2D masyvą
const matrix = [];

// Kiekvienai eilutei...
for (let line of lines) {
  // Skaidyti eilutę į reikšmes pagal tarpą, konvertuoti jas į skaičius ir įtraukti jas į masyvą
  matrix.push(line.split(' ').map(Number));
}

// Patikrinti, ar masyvas yra 4x4
if (matrix.length === 4 && matrix.every(row => row.length === 4)) {
  console.log("Pradinė matrica:");
  console.log(matrix);

  // Nustatyti įstrižainės reikšmes į 0 iš kairės į dešinę
  for (let i = 0; i < matrix.length; i++) {
    matrix[i][i] = 0;
  }

  // Nustatyti įstrižainės reikšmes į 0 iš dešinės į kairę
  for (let i = 0; i < matrix.length; i++) {
    matrix[i][matrix.length - 1 - i] = 0;
  }

  console.log("Matrica po įstrižainių reikšmių pakeitimo į 0:");
  console.log(matrix);

  // Konvertuoti masyvą į CSV
  const csv = matrix.map(row => row.join(' ')).join('\n');

  // Įrašyti CSV į naują failą
  fs.writeFileSync('new_mas.csv', csv);
} else {
  console.log('Masyvas nėra 4x4');
}
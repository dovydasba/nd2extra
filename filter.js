const fs = require('fs');
const path = 'filter.txt';

if (fs.existsSync(path)) {
    // Skaityti failo turinį
    const data = fs.readFileSync(path, 'utf8').split(' ').map(Number);

    // Atspausdinti pradinius duomenis
    console.log("Pradiniai duomenys: ", data.join(' '));

    // Inicializuoti išlygintus duomenis su ta pačia pradinių duomenų ilgiu
    let smoothed = new Array(data.length).fill(0);

    // Kiekvienam skaičiui pradiniuose duomenyse...
    for (let i = 0; i < data.length; i++) {
        // Jei tai pirmas skaičius, pakeisti jį pirmųjų dviejų skaičių vidurkiu
        if (i === 0) {
            smoothed[i] = ((data[i] + data[i+1]) / 2).toFixed(1);
        }
        // Jei tai paskutinis skaičius, pakeisti jį paskutinių dviejų skaičių vidurkiu
        else if (i === data.length - 1) {
            smoothed[i] = ((data[i-1] + data[i]) / 2).toFixed(1);
        }
        // Kitu atveju, pakeisti jį vidurkiu tarp jo ir dviejų gretimų skaičių
        else {
            smoothed[i] = ((data[i-1] + data[i] + data[i+1]) / 3).toFixed(1);
        }
    }

    // Atspausdinti išlygintus duomenis
    console.log("Išlyginti duomenys: ", smoothed.join(' '));
} else {
    console.log(`Failas ${path} neegzistuoja.`);
}
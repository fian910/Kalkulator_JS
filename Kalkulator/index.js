const readline = require("readline-sync");

const angkaPertama = parseFloat(readline.question("Masukkan angka pertama :"));
const operator = readline.question("Masukkan operator (+, -, *, /, %) :");
const angkaKedua = parseFloat(readline.question("Masukkan angka kedua :"));

//validasi
if(isNaN(angkaPertama) || isNaN(angkaKedua)) {
    //tampilkan error
    return console.log("Inputan tidak sesuai !!!")
}else {
    //lanjutkan eksekusi

    const hasil = execute(angkaPertama, angkaKedua, operator);
    console.log(`Hasilnya adalah ${hasil}`);
}

function execute(angkaPertama,angkaKedua,operator){
    
    switch (operator) {
        case "+":
            return angkaPertama + angkaKedua;
        case "-":
            return angkaPertama - angkaKedua;
        case "*":
            return angkaPertama * angkaKedua;
        case "/":
            if(angkaKedua === 0 ) {
                return console.log("Error: Tidak bisa dibagi dengan nol")
            }
                return angkaPertama / angkaKedua;
        case "%":
            return angkaPertama % angkaKedua;
        default:
            console.log("Operator tidak valid")
    }
}
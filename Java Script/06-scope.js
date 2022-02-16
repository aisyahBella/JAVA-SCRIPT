/// Soal - 01
/// Kita sudah belajar mengenai variable scope yang dimiliki oleh Javascript
/// dan kamu diminta untuk merangkum tentang:
/// - ada berapa banyak jumlah variable scope pada Javascript?
/// - jelaskan secara singkat setiap variable scope yang dimiliki oleh Javascript
/// - buatlah implementasi sederhana dari tiap-tiap variable scope yang dimiliki oleh Javascript
//- ada 2 Variabel Scope di JavaScript yaitu Local Scope dan Global Scope
// - Local scope berarti kita mendeklarasikan variabel didalam blocks seperti function, conditional, dan looping.
// - Global scope berarti variabel yang kita buat dapat diakses dimanapun dalam suatu file.
// - Agar menjadi Global Scope, suatu variabel harus dideklarasikan diluar Blocks.
Global - Scope
let myName = 'Aisyah'
function greeting() {
    return myName; // Aisyah
}
console.log(myName); // Aisyah
Local - Scope
// Variable declare in function blocks
function greeting() {
    let myName = 'Aisyah';
    return myName; //Aisyah
}
console.log(greeting()) // Aisyah
console.log(myName) // Uncaught ReferenceError: myName is not defined because local scope

/// Soal - 02
/// Kamu diminta untuk melakukan analisa terhadap baris kode dibawah ini
/// - apa yang akan tampil didalam comsole.log ?
/// - apa alasan yang menyebabkan hasil dari console itu bukan nilai dari variable name?


const name = "John Watson";

function printFirstName(name) {
    return name.split(" ")[0];
}

console.log(printFirstName("Mariah Carey"));
console.log('SOAL NO 2');
console.log('apa yang akan tampil didalam console.log?');
console.log('Jawaban : Mariah');
console.log('');
console.log('apa alasan yang menyebabkan hasil dari console itu bukan nilai dari variable name?');
console.log('Jawaban : karena yang akan di tampilkan ialah parameter dari function printFirstName sedangkan John Watson tidak di tampilkan');
console.log('');
/// Soal - 01
/// Kamu diminta untuk membuat sebuah perulangan menggunakan for loop, untuk mencetak angka prima dari 1 ~ 100
/// EDIT HERE
for (let i = 2; i <= 100; i++) {
    let prime = true
    for (let angka = 2; angka < i; angka++) {
        if (i % angka === 0) {
            prime = false
        }
    } if (prime === true) {
        console.log(i)
    }
}


/// Soal - 02
/// Kamu diminta untuk menemukan bilangan prima ke-50, temukan bilangan tersebut menggunakan while loop 
let primeCounter = 0;
let fiftiethPrime;

let number = 2
while (primeCounter < 50) {
    let prime = true
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            prime = false
        }
    } if (prime === true) {
        primeCounter++
        fiftiethPrime = number
    } number++
} console.log(fiftiethPrime)


/// Soal - 03
/// Kamu diminta untuk menemukan bilangan ganjil ke-50, temukan bilangan tersebut menggunakan do while loop
let oddCounter = 0;
let fiftiethOdd;

let angka = 1
do {
    if (angka % 2 === 1) {
        oddCounter++
        fiftiethOdd = angka
    } angka++
} while (oddCounter < 50)
console.log(fiftiethOdd)
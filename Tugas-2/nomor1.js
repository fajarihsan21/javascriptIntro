// sumber 1 = https://codepolitan.com/10-metode-array-pada-javascript-yang-wajib-kamu-ketahui-5b33a047b110a/
// sumber 2 = https://kelasprogrammer.com/method-javascript-untuk-manipulasi-string/

// // 1. foreach() = Metode ini berfungsi untuk melakukan pengulangan di dalam array.
// const arrayForeach = [1, 2, 3, 4, 5]
// arrayForeach.forEach(item => { 
//   console.log(item);
// });

// // 2. filter() = Metode ini berfungsi untuk membuat sebuah array baru dengan 
// // memperhatikan kondisi tertentu pada setiap elemen dari array yang sudah ada.
// const angkaFilter = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// const filteredArray = angkaFilter.filter(item => item % 2 === 0);
// console.log(filteredArray)

// // 3. sort() = Metode ini berfungsi untuk mengurutkan elemen pada array baik secara ascending atau descending.
// const angka = [23, 15, 2, 40, 50, 420, 6, 9]
// const huruf = ['z', 'a', 'c', 'g', 'p']
// // ascending order
// const descOrder = angka.sort((a, b) => a > b ? 1 : -1);
// console.log(descOrder); 
// // descending order
// const ascOrder = huruf.sort((a, b) => a > b ? -1 : 1);
// console.log(ascOrder);

// // 4. concat() = Metode ini berfungsi untuk menggabungkan 2 array menjadi 1 array.
// const buah = ['apel', 'pisang', 'mangga']
// const number = [1, 2, 3]
// const newArray = buah.concat(number);
// console.log(newArray);

// // 5. includes() = Metode ini berfungsi untuk mengecek apakah pada elemen array 
// // memenuhi suatu kondisi atau tidak.
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// const something = numbers.includes(2);

// const any = numbers.includes(10);
// console.log(something); // true
// console.log(any); // false

// // 6. indexOf() = Mencari indeks dari string tertentu. 
// // Bila tidak ditemukan menghasilkan nlai -1.
// let nama = "Fajar Ihsan Adinugroho"
// let konten = "s"
// console.log(nama.indexOf(konten));

// // 7. endsWith() = Memeriksa string diakhiri dengan string tertentu atau tidak.
// let kata = "Programmer"
// let words = "er"
// console.log(kata.endsWith(words));

// // 8. search() = Mencari sebuah string dalam string lainnya. 
// let namaSearch = "Fajar Ihsan Adinugroho"
// console.log(namaSearch.search("Fajar"));

// //9. slice() = Mengambil string dengan rentan indeks awal dan akhir.
// let namaSlice = "Fajar Ihsan Adinugroho"
// console.log(nama.slice(0,5));

// 10. toString = Menjadikan suatu objek menjadi string
let nilaiString = 24
console.log(nilaiString.toString());
function SeleksiNilai(nilaiAwal, nilaiAkhir, dataArray) {

    if (nilaiAwal < nilaiAkhir && dataArray.length >= 5) {
        let hasilNilai = dataArray.filter(el => el > nilaiAwal && el < nilaiAkhir)
        return hasilNilai
    } else if (nilaiAwal >= nilaiAkhir && dataArray.length >= 5) {
        console.log("Nilai akhir harus lebih besar dari nilai awal");
    } else if (nilaiAwal < nilaiAkhir && dataArray.length <= 5) {
        console.log("Jumlah angka dalam dataArray harus lebih dari 5");
    } else {
        console.log("Nilai tidak ditemukan");
    }
}

let hasil1 = SeleksiNilai(2, 9, [1, 3, 4, 5, 6, 7, 8, 9, 10])
console.log(hasil1);
let hasil2 = SeleksiNilai(9, 2, [1, 2, 3, 4, 5, 6, 7, 8])
console.log(hasil2);
let hasil3 = SeleksiNilai(1, 3, [2, 3, 4])
console.log(hasil3);
let hasil4 = SeleksiNilai(5, 17 , [2, 25, 4, 1, 30, 18])
console.log(hasil4);

const mtk = 50
const bahasaIndonesia = 10
const bahasaInggris = 50
const ipa =  69
let rataRata = (mtk + bahasaIndonesia + bahasaInggris + ipa) / 4

if ( typeof mtk != 'number' ||  typeof bahasaIndonesia != 'number' ||  typeof bahasaInggris != 'number' ||  typeof ipa != 'number') {
    console.log("Nilai harus diisi")
} else if (rataRata >= 90) {
    console.log(`Rata-rata = ${rataRata}`);
    console.log("Grade = A");
} else if (rataRata >= 80) {
    console.log(`Rata-rata = ${rataRata}`);
    console.log("Grade = B");
} else if (rataRata >= 70) {
    console.log(`Rata-rata = ${rataRata}`);
    console.log("Grade = C");
} else if (rataRata >= 60) {
    console.log(`Rata-rata = ${rataRata}`);
    console.log("Grade = D");
} else {
    console.log(`Rata-rata = ${rataRata}`);
    console.log("Grade = E");
}
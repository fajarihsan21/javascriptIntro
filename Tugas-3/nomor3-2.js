const cekNilai = () => {
    return new Promise((resolve, reject) => {
        const nilai = 70
        const rataRata = 75
        setTimeout(() => {
            if (nilai >= rataRata) {
                resolve("Anda Lulus!");
            } else {
                reject("Anda Belum Lulus");
            }
        }, 1000);
    })
}

async function cekRatarata() {
    const nilai = await cekNilai();
    console.log(nilai);
}
 
cekRatarata()
const cekHariKerja = (day) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat']
            let cek = dataDay.find((item) => {
                return item === day
            })
            if (cek) {
                resolve(cek)
            } else {
                reject(new Error('Hari ini bukan hari kerja'))
            }
        }, 3000)
    })
}

// // then/catch
// cekHariKerja('minggu')
// .then((cek) => {
//     console.log(cek); 
// }).catch((error) => {
//     console.log(error);
// })

// try/catch
async function hariKerjaTryCatch() {
    try {
        const cekHari = await cekHariKerja()
        console.log(cekHari);
    } catch (error) {
        console.log(error);
    }
}

hariKerjaTryCatch()

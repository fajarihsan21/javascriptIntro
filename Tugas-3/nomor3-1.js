const checkStock = () => {
    return new Promise((resolve, reject) => {
        const stock = {
            semen: 50,
            pasir: 1000,
        }
        if (stock.semen >= 150 && stock.pasir >= 500) {
            resolve("Stok cukup");
        } else {
            reject("Stok tidak cukup");
        }
    });
};
 
checkStock().then((result) => {console.log(result)}).catch((error) => console.log(error))
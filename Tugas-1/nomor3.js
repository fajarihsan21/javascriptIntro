const printSegitiga = 7;
if (typeof printSegitiga == 'number') {
    for (let i = 0; i <= printSegitiga; i++) {
        let output = '';
        for (let j = 1; j <= printSegitiga - i; j++) {
            output += j + '  ';
        }
        console.log(output);
    }
} else {
    console.log("data harus number")
}
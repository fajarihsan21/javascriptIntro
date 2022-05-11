const names = [
    'Abigail', 'Alexandra', 'Alison',
    'Amanda', 'Angela', 'Bella',
    'Carol', 'Caroline', 'Carolyn',
    'Deirdre', 'Diana', 'Elizabeth',
    'Ella', 'Faith', 'Olivia', 'Penelope']

function searchName(cari, limit, callback) {
    // let myName = names.filter(el => el.includes(cari) && names.length < limit);
    // return myName
    array = names.filter ((el) => {
        return el.toLowerCase().indexOf(cari.toLowerCase()) !== -1
    } )
    console.log(array);
    callback(limit)

    function limit(output) {
        let output = names.length < limit
        console.log(output);
    }
}

console.log(searchName("an", 3, callback));


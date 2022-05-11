let data = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: 
    {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    }

let dataBaru = {
    name: "Fajar Ihsan Adinugroho",
    email: "fajarihsanadinugroho21@gmail.com",
    hobby: "reading, gaming, sports"
}

let dataSaya = {...data, ...dataBaru}
console.log(dataSaya);
let {street, city} = data.address
console.log(street, city);
let url = 'https://jsonplaceholder.typicode.com/users'
async function getUsers() {
    const response = await fetch(url);
    const data = await response.json();
    for (const {name: n} of data) {
        console.log(n);
    }
}
getUsers()
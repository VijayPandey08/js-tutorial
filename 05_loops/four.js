const myObj = {
    'game1' : 'NFS',
    'game2' : 'Spiderman'
}

for (const key in myObj) {
console.log(`${key} is ${myObj[key]}`);
}
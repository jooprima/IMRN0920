// di index.js
var readBooks = require('./callback.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000}
]
 
// Tulis code untuk memanggil function readBooks di sini
let i = 0
function callBack(waktu){
    i++
    if(i < books.length){
        readBooks(waktu, books[i], callBack)
    }
    
    else{
        console.log("Semua buku sudah terbaca")
    }
}
readBooks(10000, books[i], callBack)
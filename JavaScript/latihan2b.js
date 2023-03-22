const { tambah, kurang, kali, bagi } = require('./latihan21.js')

// 4000 / 2 + 25 - 2
// bagi terlebih dahulu ( 4000 / 2)
const hasil_bagi = bagi(25,2);
const hasil = tambah(hasil_bagi, kurang(25, 2));

console.log(hasil);
//output = 2023
# Daffa-Saskara_Tugas1MCI
MCI Lab Open Recruitment's Task(s)

| Nama                      | NRP        |
|---------------------------|------------|
| Daffa Saskara             | 5025211249 |

# JS

## latihan1.js
Pada latihan 1 ini cukup simple, hanya dibutuhkan untuk mengoutput `` "Saya Calon Admin MCI" `` secara instan dan diberikan jeda 3 detik untuk mengoutputkan lagi kalimat lain, yaitu nama kita masing-masing. Yang di mana, di sini saya sendiri, yaitu `` Daffa Saskara `` .
```js
function calonAdminMCI() {

  console.log("Saya Calon Admin MCI");

  let time = 3000;
  setTimeout(function () {
    console.log("Daffa Saskara");
  }, time);
  
};

calonAdminMCI();
```
Membuat function bernama `` calonAdminMCI() `` yang berisi perintah diatas. Membuat `` let `` bernama `` time `` selama 3000 (3 detik).
### Screenshot(s) solusi
![running code lat1](https://user-images.githubusercontent.com/88588446/227226480-ebd34ff9-60b1-49d7-b0c4-199bfb82402f.png)
### Kendala Pengerjaan soal
Masih belum ada.
## latihan2a.js & latihan2b.js
Di sini kita mulai memasuki teknik Module. Di mana, kita diminta untuk membuat 2 file, yang pertama `` latihan2a.js `` yang berisikan fungsi fungsi operasi matematika umum seperti `` + `` , `` - `` , `` * `` , `` / `` . Yang nantinya kita akan pakai pada `` latihan2b.js `` .
```js
function tambah(a, b) {
  return a + b;
}
function kurang(a, b) {
  return a - b;
}
function kali(a, b) {
  return a * b;
}
function bagi(a, b) {
  return a / b;
}

module.exports = { tambah: tambah, kurang: kurang, kali: kali, bagi: bagi }
```
Lalu pada `` latihan2b.js `` , kita harus mengoperasikan perhitungan `` 4000 / 2 + 25 - 2 ``.
```js
const { tambah, kurang, kali, bagi } = require('./latihan2a.js')

// 4000 / 2 + 25 - 2
// bagi terlebih dahulu ( 4000 / 2)
const hasil_bagi = bagi(4000,2);
const hasil = tambah(hasil_bagi, kurang(25, 2));

console.log(hasil);
//output = 2023
```
### Screenshot(s) solusi
| <p align="center"> latihan2a.js </p> | <p align="center"> running latihan2b.js case_zip </p> |
| -------------------------------------- | -------------------------------------- |
| <img src="https://user-images.githubusercontent.com/88588446/227226459-f1549bd2-caf2-44a8-88f2-8b34fd01af1b.png" width = "500"/> | <img src="https://user-images.githubusercontent.com/88588446/227226484-f98bc22f-2497-40e3-a315-6966c7b13656.png" width = "500"/> |
### Kendala Pengerjaan soal
Belum ada.
## latihan3.js
Soal pada latihan3 sedikit tricky, karena mengulang lagi 3 dimensional array yang dulu pernah dipelajari. Dan, untuk persoalan yang diminta rumit. Kita diminta untuk membuat fungsi seperti `` np.argwhere `` , yang merupakan sebuah fungsi yang tersedia pada library numpy di bahasa pemrograman python. Fungsi tersebut akan mengembalikan sebuah array 2 dimensi yang berisikan index - index value pada array n-d yang tidak bernilai 0.
Kode di bawah adalah kode bantuan dari soal yang berisi fungsi `` dim `` yang berguna untuk mengembalikan ukuran dari array yang menjadi input value.
```js
function dim(arr) {
  if (arr instanceof Array) {
    return [arr.length].concat(dim(arr[0]));
  } else {
    return [];
  }
}
```
Kode di bawah adalah fungsi `` argwhere `` dengan parameter `` arr ``. dan ada `` const shape `` yang diambil dari fungsi `` dim `` di atas. Kode di bawah berfungsi untuk melakukan pengecekan value yang tidak 0 di dalam array 3 dimensi yang sudah dirubah menjadi array 2 dimensi pada input.
```js
function argwhere(arr) {
  let result = [];
  const shape = dim(arr);
  for (let i = 0; i < shape[0]; i++) {
    for (let j = 0; j < shape[1]; j++) {
      for (let k = 0; k < shape[2]; k++) {
        if (arr[i][j][k] !== 0) {
          result.push([i, j, k]);
        }
      }
    }
  }
  return result;
}
```
Lalu, kode dibawah merupakan `` const `` yang berisi input-an yang diinginkan soal, dan pada akhirnya mengeluarkan output fungsi `` argwhere `` dari input-an soal :
```js
const input = [
  [
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 0],
  ],
  [
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 0],
  ],
  [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ],
];

console.log(argwhere(input));
```

Adapun visualisasi dari outputan yang diberikan pada soal ini.
Di bawah, merupakan visualisasi dari output-an array dari array dimensi ke-0:

![Visualisasi array dimensi 0 latihan3 js](https://user-images.githubusercontent.com/88588446/227219698-21b72af4-5abc-4a29-b9a3-bff990ff553d.jpg)

Lalu, berikut untuk visualisasi dari output-an array dari array dimensi ke -1:

![Visualisasi array dimensi 1 latihan3 js](https://user-images.githubusercontent.com/88588446/227219906-47c4bc53-6517-4f78-8d3d-75140f2fdd27.jpg)

Kita ambil contoh pada output-an `` [ 0, 1, 1 ] `` , angka `` '0' `` pertama menyatakan bahwa value berada di dimensi ke 0 (pertama) [warna biru]. Lalu, `` '1' `` yang kedua merupakan diiterasi ke `` j `` ke-1 terdapat value yang bukan 0 [warna oranye]. Dan angka `` '1' `` terakhir merupakan pada iterasi ` k ` terdapat value yang tidak 0 [warna merah].

Bisa dilihat karena ada 4 value dalam array input-an, maka keluar 4 array 2 dimensi yang menunjukkan 'alamat' value-vallue tersebut. Dan bisa dilihat bahwa tidak ada value yang tidak sama dengan 0 pada dimensi ke-2 (array ke ketiga), dengan bukti tidak ada output yang di awali `` [ 2, x, x ]


### Screenshot(s) solusi
![running code lat3](https://user-images.githubusercontent.com/88588446/227226471-7bc5af51-fbac-4ed6-926f-1553fae5f5b9.png)
### Kendala Pengerjaan soal
sedikit memusingkan saat men-translate soal.

# SQL

## latihan1.sql
Tampilkan daftar nama dan ukt berdasarkan nominal ukt yang paling mahal!

``` 
SELECT 
    nama, ukt
FROM
    data_fix
ORDER BY ukt DESC;
```
Men-select `` nama, ukt `` dari tabel `` data_fix `` dan melakukan `` ORDER BY `` `` ukt ``  secara Descending / Menurun.

### Screenshot(s) solusi

![running lat1 sql](https://user-images.githubusercontent.com/88588446/227229013-015c3f1b-39d9-4c10-b009-385ab85daabc.png)

### Kendala Pengerjaan soal
Tidak Ada.
## latihan2.sql
Tampilkan daftar nama dan ukt berdasarkan nominal ukt yang paling mahal, jika ada ukt yang sama, urutkan berdasarkan nama mahasiswa secara alfabetikal.
```
SELECT 
    nama, ukt
FROM
    data_fix
ORDER BY ukt DESC, nama ASC;
```
Men-select `` nama, ukt `` dari tabel `` data_fix `` dan melakukan `` ORDER BY `` `` ukt `` secara Descending / Menurun, dan `` nama `` secara Ascending / Meningkat.
### Screenshot(s) solusi

![running lat2 sql](https://user-images.githubusercontent.com/88588446/227229007-476ce7a1-f120-4a04-b405-80bc1a0df4f0.png)

### Kendala Pengerjaan soal
Tidak Ada.

## latihan3.sql
Pada tabel, Hitunglah jumlah mahasiswa yang memiliki ipk >= 3.5 dan berada di semester 8.
```
SELECT 
    COUNT(*) AS Jumlah_Mhs
FROM
    data_fix
WHERE
    ipk >= 3.5 AND semester = 8;
```
Men-Select `` Jumlah_Mhs `` (column baru) dari `` data_fix `` dengan syarat ( `` WHERE `` ) yaitu `` ipk >= 3.5 AND semester = 8 `` .
### Screenshot(s) solusi
![running lat3 sql](https://user-images.githubusercontent.com/88588446/227229019-105b44fc-c149-442a-9380-de77fe42e595.png)

### Kendala Pengerjaan soal
Tidak Ada.
## latihan4.sql
Pada tabel, Tampilkan nama, ukt, dan golongan. Jika ukt mahasiswa kurang dari sama dengan 1 juta, maka masuk golongan "A". Jika ukt mahasiswa diatas 1 juta sampai dengan 2 juta, maka masuk golongan "B" Jika ukt mahasiswa diatas 2 juta, maka masuk golongan "C".

```
SELECT 
    nama,
    ukt,
    CASE
        WHEN ukt <= 1000000 THEN 'A'
        WHEN ukt > 1000000 AND ukt <= 2000000 THEN 'B'
        WHEN ukt > 2000000 THEN 'C'
    END AS golongan
FROM
    data_fix;
```
Men-Select `` nama, ukt `` dengan `` CASE `` dimana,
```
        WHEN ukt <= 1000000 THEN 'A'
        WHEN ukt > 1000000 AND ukt <= 2000000 THEN 'B'
        WHEN ukt > 2000000 THEN 'C'
```
Yang nanti value `` 'A' `` , `` 'B' `` , dan  `` 'C' `` akan di `` END `` sebagai `` golongan `` (column baru).

### Screenshot(s) solusi
![running lat4 sql](https://user-images.githubusercontent.com/88588446/227228997-3a0f7d89-008f-4ae3-8f38-7bf56b76a49d.png)
### Kendala Pengerjaan soal
Pada awalnya, tidak tahu syntax penggunaan `` CASE `` pada MySQL.

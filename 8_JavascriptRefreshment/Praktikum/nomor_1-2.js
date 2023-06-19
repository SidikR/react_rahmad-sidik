let a = 5
let b = "kampus merdeka"
const nama = "budi"
let terdaftar = true //untuk menampilkan baris 17 value false tersebut akan diubah ke true agar dapat ditampilkan 
let lengkap_arr = [a, b, nama, terdaftar]

function perkenalan() {
    let asal = "indonesia"
    return console.log(
        "perkenalkan nama saya " + 
        nama + 
        " nomor urut " + 
        a + 
        " sekarang sedang mengikuti " +
        b + 
        " berasal dari " + 
        asal
    )
}

if (terdaftar === true) {
    console.log(nama + " terdaftar sebagai kegiatan kampus merdeka")
}

a = b;
// nama = b;   variabel 'nama' menggunakan variabel const yang dimana nilai/atau variabel yang sudah di deklarasikan tidak dapat di deklarasikan kembali.

// console.log("asal diakses " + asal)   variabel asal dideklarasikan di dalam scope function 'perkenalan' dan variabel tersebut hanya dapat diakses di dalam scope function 'perkenalan' saja
console.log("array = " + lengkap_arr[2]) // memanggil index kedua dari array pada baris ke 5
console.log("a adalah = " + a)
console.log("b adalah = " + b)
perkenalan() // Memanggil Function perkenalan
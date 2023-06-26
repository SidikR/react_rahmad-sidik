class Kendaraan {
    constructor(){
        this.jumlahRoda = 0
        this.kecepatanPerJam = 0
    }
}

class Mobil extends Kendaraan {
    constructor() {
        super(...arguments)
    }

    tambahKecepatan(num){
        this.kecepatanPerJam += num
    }

    berjalan() {
        this.tambahKecepatan(10)
    }

}

let mobilCepat = new Mobil()
mobilCepat.berjalan()
mobilCepat.berjalan()
mobilCepat.berjalan()
console.log("Kecepatan mobil cepat " +mobilCepat.kecepatanPerJam+ " KM/JAM")

let mobilLambat = new Mobil()
mobilLambat.berjalan()
console.log("Kecepatan mobil lambat " +mobilLambat.kecepatanPerJam+ " KM/JAM")
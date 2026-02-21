class Cafetera {
  #limiteDeAgua = 0

  constructor(energia) {
    this.energia = energia
    console.log(this.energia)
  }

  get limiteDeAgua() {
    return this.#limiteDeAgua
  }
}

let cafetera = new Cafetera(100)

console.log(cafetera.limiteDeAgua)

class Animal {
  constructor(familia) {
    this.familia = familia
  }

  andar = () => {
    return 'andando...'
  }
}

class Cachorro extends Animal{
  constructor(n, i, f) {
    super(f)
    this.nome = n
    this.idade = i
  }


  latir() {
    return `${this.nome}: au au!`
  }
}

let rex = new Cachorro('Rex', 2, "Dromedários")
console.log(rex.latir())
console.log(rex.andar())

const frutas = ['laranja', 'banana', 'melancia']

let [fruta1, fruta2] = frutas

console.log(fruta2)

const pessoa = {
  nome: 'Inah',
  idade: 32,
  país: 'Indonésia',
  idioma: 'indonésio'
}

const diversidade = ({ nome, país, idioma }) => `${nome} mora na ${país} e fala ${idioma}`

console.log(diversidade(pessoa))

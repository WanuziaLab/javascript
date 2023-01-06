// Spread operator: faz cópia do array original, sem alterá-lo (diferente do resultado ao se usar .push)
const numeros = [1, 2, 3]

const novosNumeros = [...numeros, 5]
novosNumeros.push(7)
console.log(novosNumeros)
const rex = {
  nome : 'Rex'
}

const max = { ...rex, idade: 2, familia: 'Tiranossaurus'}

console.log(max)

// Rest operator: prefiro a inserção de variaveis sem quantidade definida
const somar = (...numeros) => numeros.reduce( (a, b) => a + b, 0)

console.log(somar(23, 25, 478, 12, 3, 78))

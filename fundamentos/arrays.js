let valores = [7, 8, 8.1, 10]
console.log(valores)
console.log(valores[0])
console.log(valores.length)

valores[1] = 10

valores.push(9.1)
console.log(valores)

console.log(valores.pop())
delete valores[1]

console.log(valores)
console.log(typeof valores)
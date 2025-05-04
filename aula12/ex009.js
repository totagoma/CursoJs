var idade = 65
console.log(`voce tem ${idade}`)
if (idade < 16) {
    console.log('Não vota')
} else if (idade < 18 || idade > 65) {
    console.log('opcional')
} else {
    console.log('voto obrigatorio')
}

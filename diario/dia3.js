
// chamando e utilizando o terminal JS
// começando com a nossa querida mensagem do terminal 
console.log('Olá eu sou o terminal!!')
console.log('e hoje iremos ver, if e else, famosos e SE e SE NÃO.')
// por exemplo vamos definir uma velocidade.
console.log('Altere a sua velocidade no código')
var vel = 12  // em Km/h por favor
console.log(`Sua velocidade é de ${vel}Km/h.`)
if(vel>60) { // traduzindo a codificação
// se a velocidade é maior que 60, aparece a mensagem 'MULTADO!!!'
    console.log(`MULTADO!!!`)
}else console.log(`Tenha uma boa viagem!`)
//se não, aparece a mensagem 'Tenha uma boa viagem'.
console.log('agora que vimos a velocidade do seu veículo, me diga de quantos anos você tem, mudando a var no código.')
var idade = 9
console.log(`Você tem ${idade} anos.`)
if(idade<18){
    console.log('Você ainda é de menor, tudo é pra estar tranquilo...')
}else if (idade<18 || idade>65){
    console.log('Já é de maior, parabéns seus problemas começaram.')
}else{console.log(`parabéns você é um sobrevivente a ${idade} anos.`)}
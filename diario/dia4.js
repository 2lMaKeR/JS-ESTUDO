
// agora vamos nos tornar chronomancer's (ou um meterologista kekw)
// vamos brincar um pouco com o tempo ou pelo usar algumas informações dele
var agora = new Date()
// new date é usado para puxar alguma informação da data presente, 
// sendo horas, minutos, segundos, dia , mês ou ano.
var hora = agora.getHours() // horas variam de 0 até 23
var minB = agora.getMinutes() // getMinutes não mostra o zero na frente
var diasemB = agora.getDay()// já dias da semana possuem uma certa numeração em JS
// sendo 0=domingo, 1=segunda, 2=terça, 3=quarta, 4=quinta, 5=sexta e 6=sábado
if(minB<10){
    var min = '0' + minB // então este if é somente para mantermos o visual clássico
}else var min = minB
switch(diasemB){
    case 0:var diasem = ('domingo') // e isso para transformar-mos
        break
    case 1:var diasem = ('segunda') // a existência do número 0-6
        break
    case 2:var diasem = ('terça') // em dias da semana
        break
    case 3:var diasem = ('quarta')
        break
    case 4:var diasem = ('quinta')
        break
    case 5:var diasem = ('sexta')
        break
    case 6:var diasem = ('sábado')
        break 
}
if(hora>8 && hora<12){
    var saudacao = ('bom dia') // e agora ensinamos ao programa qual saudação
} else if(hora>=12 && hora<18){
    var saudacao = ('boa tarde') // se dá para cada horário do dia
} else if(hora>=18 && hora<=23){
    var saudacao = ('boa noite')
} else {
    var saudacao = ('boa madrugada')
}

console.log(`Olá ${saudacao}!! Agora são ${hora}:${min} horas de ${diasem}.`)
// tudo pra deixar essa frase bem escrita
